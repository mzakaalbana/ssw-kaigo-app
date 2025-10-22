(function(){
  const $ = (q,el=document)=>el.querySelector(q);

  const meta = $('#meta');
  const stage = $('#stage');
  const btnStart = $('#btnStart');

  function renderSample(){
    // Render 1 soal pertama sebagai bukti koneksi JS bekerja
    const q = (window.BANK && window.BANK[0]) ? window.BANK[0] : null;
    if(!q){ stage.innerHTML = '<p>Tidak ada soal.</p>'; return; }
    meta.textContent = `0/${window.BANK.length}`;
    stage.innerHTML = `
      <div class="qno">Soal <strong>1</strong> dari <strong>${window.BANK.length}</strong></div>
      <div class="question">${q.prompt}</div>
      <ul>
        ${q.choices.map((c,i)=>`<li>${i+1}. ${c.t}</li>`).join('')}
      </ul>
      <p class="muted">(Ini hanya tampilan uji di Step 1)</p>
    `;
  }

  btnStart.addEventListener('click', renderSample);

  // auto-render saat halaman dibuka
  renderSample();
})();