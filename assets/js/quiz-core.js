// quiz-core.js — core logic untuk halaman latihan & ujian
(function(global){
  const $ = (q,el=document)=>el.querySelector(q);
  const $$ = (q,el=document)=>[...el.querySelectorAll(q)];
  const shuffle = (arr)=>arr.map(v=>[Math.random(),v]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
  const save = (k,v)=>localStorage.setItem(k,JSON.stringify(v));
  const load = (k,def=null)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):def;}catch(e){return def}};
  const withRuby = (str)=> str ? str.replace(/([^（\s]+)（([^）]+)）/g,(m,kanji,reading)=>`<ruby>${kanji}<rt>${reading}</rt></ruby>`) : '';

  function formatMMSS(s){
    const m = Math.floor(s/60), ss = s%60;
    return `${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;
  }

  function initQuiz(opts){
    const {
      study=false,            // true = feedback langsung (Latihan)
      durationSec=null,       // number | null (Ujian pakai timer)
      autoNextMs=800,         // auto next saat latihan (jika study)
      ids={                   // id elemen pada halaman
        meta:'meta', bar:'bar', timer:'timer', status:'status',
        quizPanel:'quizPanel', resultPanel:'resultPanel', stage:'stage',
        prev:'prev', next:'next', submit:'submit',
        scoreLine:'scoreLine', review:'review',
        reviewWrong:'reviewWrong', reviewAll:'reviewAll', tryAgain:'tryAgain'
      }
    } = opts||{};

    if(!global.BANK || !global.BANK.length){
      console.error('BANK tidak ditemukan.');
      return;
    }

    const s = {
      order: shuffle([...Array(global.BANK.length).keys()]),
      cursor: 0,
      answers: {},      // qid -> key
      choiceMaps: {},   // qid -> shuffled choices
      submitted: false,
      study,
      remainSec: durationSec || 0,
      timer: null,
    };

    const el = Object.fromEntries(Object.entries(ids).map(([k,id])=>[k,$(`#${id}`)]));

    function updateBar(){
      if(!el.bar || !el.meta) return;
      const answered = Object.keys(s.answers).length;
      const pct = Math.round((answered/global.BANK.length)*100);
      el.bar.style.width = pct+'%';
      el.meta.textContent = `${answered}/${global.BANK.length}`;
    }

    function getCurrent(){
      const bankIdx = s.order[s.cursor];
      return global.BANK[bankIdx];
    }

    function renderCurrent(){
      const q = getCurrent();
      const container = el.stage;
      if(!s.choiceMaps[q.id]){
        const mapped = q.choices.map(c=>({ key:c.key, text:c.t }));
        s.choiceMaps[q.id] = shuffle(mapped);
      }
      const mapped = s.choiceMaps[q.id];
      const selectedKey = s.answers[q.id] || null;

      const n = s.cursor+1;
      container.innerHTML = `
        <div class="qno">Soal <strong>${n}</strong> dari <strong>${global.BANK.length}</strong></div>
        <div class="question">
          <div>${q.prompt}</div>
        </div>
        <div class="choices">
          ${mapped.map((c,i)=>{
            const id = `c_${q.id}_${i}`;
            const checked = selectedKey===c.key? 'checked' : '';
            return `<label for="${id}" class="choice">
              <input type="radio" name="q_${q.id}" id="${id}" value="${c.key}" ${checked} ${s.submitted?'disabled':''} />
              <div><strong>${i+1}.</strong> <span class="jp">${withRuby(c.text)}</span></div>
            </label>`
          }).join('')}
        </div>
      `;

      $$(".choices input[type=radio]", container).forEach((inp, idx)=>{
        inp.addEventListener('change', (e)=>{
          s.answers[q.id] = e.target.value;
          updateBar();
          if(s.study && !s.submitted){
            // feedback langsung
            showInstantFeedback(q, idx);
            // auto next
            setTimeout(()=>{ if(s.cursor<global.BANK.length-1){ s.cursor++; renderCurrent(); } }, autoNextMs);
          }
        });
      });

      if(el.prev) el.prev.disabled = s.cursor===0;
      if(el.next) el.next.disabled = s.cursor===global.BANK.length-1;
    }

    function showInstantFeedback(q, selectedIdx){
      const mapped = s.choiceMaps[q.id];
      const chosenKey = mapped[selectedIdx].key;
      $$('.choices .choice').forEach((node,i)=>{
        node.classList.remove('correct','wrong','neutral');
        const isCorrect = mapped[i].key===q.correctKey;
        const isChosen = i===selectedIdx;
        if(isCorrect) node.classList.add('correct');
        if(isChosen && !isCorrect) node.classList.add('wrong');
      });
      if(el.status) el.status.textContent = (chosenKey===q.correctKey)? 'Benar ✅' : 'Kurang tepat ❌';
    }

    function buildReviewItem(q, i, filterWrongOnly){
      const chosen = s.answers[q.id];
      const ok = chosen === q.correctKey;
      if(filterWrongOnly && ok) return '';
      const mapped = s.choiceMaps[q.id];
      const lines = mapped.map(c=>{
        let cls = 'choice';
        if(c.key===q.correctKey) cls += ' correct';
        else if(c.key===chosen) cls += ' wrong';
        return `<div class="${cls}"><input type="radio" disabled ${c.key===chosen?'checked':''}/> <div class="jp">${withRuby(c.text)}</div></div>`;
      }).join('');

      return `
        <details ${filterWrongOnly? 'open' : ''}>
          <summary><strong>#${i+1}</strong> ${ok?'<span class="ok">Benar</span>':'<span class="bad">Salah</span>'} <span class="muted">(ID ${q.id})</span></summary>
          <div style="margin-top:8px">${q.prompt}</div>
          <div class="choices" style="margin-top:10px">${lines}</div>
        </details>`;
    }

    function showResult(filterWrongOnly=false){
      stopTimer();
      let correct = 0; const blocks = [];
      s.order.forEach((bankIdx, i)=>{
        const q = global.BANK[bankIdx];
        if(s.answers[q.id] === q.correctKey) correct++;
        const html = buildReviewItem(q, i, filterWrongOnly);
        if(html) blocks.push(html);
      });
      const scorePct = Math.round((correct/global.BANK.length)*100);
      if(el.scoreLine) el.scoreLine.innerHTML = `Skor: <strong>${correct}</strong> / ${global.BANK.length} <span class="pill">${scorePct}%</span>`;
      if(el.review) el.review.innerHTML = blocks.join('');
      if(el.quizPanel) el.quizPanel.classList.add('hidden');
      if(el.resultPanel) el.resultPanel.classList.remove('hidden');
    }

    function startTimer(){
      if(!durationSec || !el.timer) return;
      clearInterval(s.timer);
      s.remainSec = durationSec;
      el.timer.textContent = formatMMSS(s.remainSec);
      s.timer = setInterval(()=>{
        s.remainSec -= 1;
        if(s.remainSec < 0){
          clearInterval(s.timer);
          if(!s.submitted){
            s.submitted = true; showResult(false);
            if(el.status) el.status.textContent = 'Waktu habis. Hasil ditampilkan.';
          }
          return;
        }
        el.timer.textContent = formatMMSS(s.remainSec);
      },1000);
    }
    function stopTimer(){ clearInterval(s.timer); }

    // bind events
    if(el.prev) el.prev.addEventListener('click', ()=>{ if(s.cursor>0){ s.cursor--; renderCurrent(); }});
    if(el.next) el.next.addEventListener('click', ()=>{ if(s.cursor<global.BANK.length-1){ s.cursor++; renderCurrent(); }});
    if(el.submit) el.submit.addEventListener('click', ()=>{ s.submitted = true; showResult(false); });
    if(el.reviewWrong) el.reviewWrong.addEventListener('click', ()=> showResult(true));
    if(el.reviewAll) el.reviewAll.addEventListener('click', ()=> showResult(false));
    if(el.tryAgain) el.tryAgain.addEventListener('click', ()=>{
      // reset session
      s.order = shuffle([...Array(global.BANK.length).keys()]);
      s.cursor = 0; s.answers = {}; s.choiceMaps = {}; s.submitted=false;
      if(el.resultPanel) el.resultPanel.classList.add('hidden');
      if(el.quizPanel) el.quizPanel.classList.remove('hidden');
      if(el.status) el.status.textContent = s.study ? 'Mode belajar aktif' : 'Belum dikirim';
      if(durationSec) startTimer();
      updateBar(); renderCurrent();
    });

    // keyboard
    document.addEventListener('keydown',(e)=>{
      if(el.resultPanel && !el.resultPanel.classList.contains('hidden')) return;
      if(e.key==='ArrowLeft'){ e.preventDefault(); if(s.cursor>0){ s.cursor--; renderCurrent(); } }
      if(e.key==='ArrowRight'){ e.preventDefault(); if(s.cursor<global.BANK.length-1){ s.cursor++; renderCurrent(); } }
      if(/^([1-9])$/.test(e.key)){
        const idx = parseInt(e.key,10)-1;
        const radios = $$(".choices input[type=radio]");
        if(radios[idx]){ radios[idx].checked = true; radios[idx].dispatchEvent(new Event('change',{bubbles:true})); }
      }
    });

    // boot
    if(el.meta) el.meta.textContent = `0/${global.BANK.length}`;
    if(el.status) el.status.textContent = s.study ? 'Mode belajar aktif' : 'Belum dikirim';
    updateBar();
    renderCurrent();
    if(durationSec) startTimer();

    // expose minimal api if needed
    return { state:s, updateBar, renderCurrent, showResult };
  }

  // export
  global.SSWQuiz = { initQuiz };
})(window);