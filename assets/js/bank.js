// BANK 55 soal (dari kisi) — semua kanji diberi furigana (hiragana)
window.BANK = [
  {id:1, prompt:"Percakapan: kemarin ryousha demam, cek ke dokter, disuruh minum obat.", choices:[
    {t:"診察（しんさつ）したあとで薬（くすり）を飲（の）む", key:"A"},
    {t:"診察（しんさつ）せずに薬（くすり）を飲（の）む", key:"B"},
    {t:"薬（くすり）を飲（の）まずに寝（ね）ます", key:"C"},
  ], correctKey:"A"},

  {id:2, prompt:"Persamaan kata 記録（きろく）", choices:[
    {t:"書（か）き留（と）める", key:"A"},
    {t:"記入（きにゅう）する", key:"B"},
    {t:"書（か）きます", key:"C"},
  ], correctKey:"C"},

  {id:3, prompt:"Nawarin bantuan: apakah bisa duduk sendiri?", choices:[
    {t:"一人（ひとり）で座（すわ）れますか", key:"A"},
    {t:"一人（ひとり）で座（すわ）りました", key:"B"},
    {t:"誰（だれ）かと一緒（いっしょ）に座（すわ）ります", key:"C"},
  ], correctKey:"A"},

  {id:4, prompt:"Ryousha dan kaigosyoku mau karaoke", choices:[
    {t:"利用者（りようしゃ）と介護職（かいごしょく）が一緒（いっしょ）に歌（うた）を歌（うた）います", key:"A"},
    {t:"利用者（りようしゃ）だけで歌（うた）います", key:"B"},
    {t:"介護職（かいごしょく）だけで歌（うた）います", key:"C"},
  ], correctKey:"A"},

  {id:5, prompt:"Persamaan kata メニュー", choices:[
    {t:"献立（こんだて）", key:"A"},
    {t:"食事（しょくじ）", key:"B"},
    {t:"料理（りょうり）", key:"C"},
  ], correctKey:"A"},

  {id:6, prompt:"Lansia bisa makan sendiri tapi kotor → perlu apron.", choices:[
    {t:"利用者（りようしゃ）は汚（よご）さないようまふろおを使（つか）います", key:"A"},
    {t:"エプロンを使（つか）います", key:"B"},
    {t:"利用者（りようしゃ）は誰（だれ）かに全部（ぜんぶ）食（た）べさせてもらいます", key:"C"},
  ], correctKey:"B"},

  {id:7, prompt:"Dokkai: hemiplegia kanan, pakai baju mulai dari sisi mana?", choices:[
    {t:"右腕（みぎうで）から服（ふく）を着（き）ます", key:"A"},
    {t:"左腕（ひだりうで）から服（ふく）を着（き）ます", key:"B"},
    {t:"どちらの腕（うで）からでも同（おな）じです", key:"C"},
  ], correctKey:"A"},

  {id:8, prompt:"Menerima bantuan menjemur futon (hari mencuci)", choices:[
    {t:"利用者（りようしゃ）は介護職（かいごしょく）と一緒（いっしょ）に布団（ふとん）を干（ほ）します", key:"B"},
    {t:"利用者（りようしゃ）は洗濯物（せんたくもの）を干（ほ）すのを手伝（てつだ）います", key:"A"},
    {t:"利用者（りようしゃ）は何（なに）もしません", key:"C"},
  ], correctKey:"B"},

  {id:9, prompt:"Melengkapi: テーブルの上でをアルコール 〇〇〇〇〇", choices:[
    {t:"拭（ふ）きます", key:"A"},
    {t:"消毒（しょうどく）します", key:"B"},
    {t:"置（お）きます", key:"C"},
  ], correctKey:"C"},

  {id:10, prompt:"Perawatan sebelum tidur: gigi palsu dilepas.", choices:[
    {t:"寝（ね）る前（まえ）に入（い）れ歯（ば）を外（はず）します", key:"A"},
    {t:"寝（ね）る前（まえ）に入（い）れ歯（ば）をそのままにします", key:"B"},
    {t:"寝（ね）る前（まえ）に歯（は）を磨（みが）きます", key:"C"},
  ], correctKey:"A"},

  {id:11, prompt:"Karena banyak keringat, jadi…", choices:[
    {t:"体（からだ）を拭（ふ）いてしまいました", key:"A"},
    {t:"体（からだ）を洗（あら）いませんでした", key:"B"},
    {t:"体（からだ）を乾（かわ）かしませんでした", key:"C"},
  ], correctKey:"A"},

  {id:12, prompt:"Sebelum tidur, agar tidak mengompol?", choices:[
    {t:"寝（ね）る前（まえ）にトイレに行（い）くか確認（かくにん）します", key:"A"},
    {t:"寝（ね）る前（まえ）に飲（の）み物（もの）をたくさん飲（の）みます", key:"B"},
    {t:"寝（ね）る前（まえ）にトイレに行（い）きません", key:"C"},
  ], correctKey:"A"},

  {id:13, prompt:"Demam → minum obat → mau mandi, boleh?", choices:[
    {t:"はい、入（はい）ってもいいです", key:"A"},
    {t:"いいえ、薬（くすり）を飲（の）む前（まえ）に入（はい）ってはいけません", key:"B"},
    {t:"いいえ、入（はい）る必要（ひつよう）はありません", key:"C"},
  ], correctKey:"A"},

  {id:14, prompt:"Punggung gatal—apa yang dilakukan kaigosyoku?", choices:[
    {t:"介護職（かいごしょく）は看護職（かんごしょく）に相談（そうだん）します", key:"B"},
    {t:"介護職（かいごしょく）は背中（せなか）をかきます", key:"A"},
    {t:"介護職（かいごしょく）は何（なに）もしません", key:"C"},
  ], correctKey:"B"},

  {id:15, prompt:"Obrolan menu malam: pilihan terakhir apa?", choices:[
    {t:"今日（きょう）スープを飲（の）みたい", key:"B"},
    {t:"今晩（こんばん）は何（なに）を食（た）べますか", key:"A"},
    {t:"今晩（こんばん）は何（なに）も食（た）べません", key:"C"},
  ], correctKey:"B"},

  {id:16, prompt:"Ryousha menginap di rumah musuko malam ini", choices:[
    {t:"今晩（こんばん）、利用者（りようしゃ）は息子（むすこ）の家（いえ）に泊（と）まります", key:"A"},
    {t:"今晩（こんばん）、利用者（りようしゃ）は一人（ひとり）で寝（ね）ます", key:"B"},
    {t:"今晩（こんばん）、利用者（りようしゃ）は家族（かぞく）に泊（と）まります", key:"C"},
  ], correctKey:"A"},

  {id:17, prompt:"Demam 38→minum obat→hari ini 37", choices:[
    {t:"診察（しんさつ）後（ご）で薬（くすり）を飲（の）みます", key:"A"},
    {t:"今日（きょう）は熱（ねつ）が下（さ）がりました", key:"B"},
    {t:"今日（きょう）は熱（ねつ）が上（あ）がりました", key:"C"},
  ], correctKey:"A"},

  {id:18, prompt:"Jendela terbuka, minta ditutup (dingin)", choices:[
    {t:"ちょっと寒（さむ）いです", key:"A"},
    {t:"ちょっと暑（あつ）いです", key:"B"},
    {t:"ちょっと暗（くら）いです", key:"C"},
  ], correctKey:"A"},

  {id:19, prompt:"Perawat menanyakan suhu; minta lebih hangat", choices:[
    {t:"エアコンの温度（おんど）は上（あ）げますね", key:"B"},
    {t:"部屋（へや）の温度（おんど）を暖（あたた）かくします", key:"A"},
    {t:"部屋（へや）の温度（おんど）を下（さ）げます", key:"C"},
  ], correctKey:"B"},

  {id:20, prompt:"Dokkai: tata cara mandi agar tidak terpeleset", choices:[
    {t:"浴室（よくしつ）で滑（すべ）らないように注意（ちゅうい）します", key:"A"},
    {t:"浴室（よくしつ）で走（はし）ります", key:"B"},
    {t:"天井（てんじょう）にしないように気（き）をつけて", key:"C"},
  ], correctKey:"A"},

  {id:21, prompt:"Mira-san menginap di fasilitas; besok pulang", choices:[
    {t:"明日（あした）、施設（しせつ）を出（で）ます", key:"A"},
    {t:"明日（あした）、施設（しせつ）に泊（と）まります", key:"B"},
    {t:"明日（あした）帰（かえ）ります", key:"C"},
  ], correctKey:"A"},

  {id:22, prompt:"(Gambar) orang sedang cek suhu", choices:[
    {t:"体温計（たいおんけい）", key:"A"},
    {t:"測（はか）る", key:"B"},
    {t:"髪（かみ）を梳（と）かす", key:"C"},
  ], correctKey:"A"},

  {id:23, prompt:"(Gambar) orang sedang menyisir", choices:[
    {t:"体温計（たいおんけい）", key:"A"},
    {t:"測（はか）る", key:"B"},
    {t:"髪（かみ）を梳（と）かす", key:"C"},
  ], correctKey:"C"},

  {id:24, prompt:"Ryousha ingin jalan keluar → ke toilet dulu", choices:[
    {t:"トイレに行（い）ってから散歩（さんぽ）へ行（い）きます", key:"A"},
    {t:"外（そと）へ散歩（さんぽ）に行（い）きません", key:"B"},
    {t:"今（いま）すぐ散歩（さんぽ）へ行（い）きます", key:"C"},
  ], correctKey:"A"},

  {id:25, prompt:"Leader: lansia batuk kalau minum ocha", choices:[
    {t:"お茶（ちゃ）を飲（の）むと、咳（せき）が出（で）ます", key:"A"},
    {t:"今日はお茶（ちゃ）を飲（の）みます", key:"B"},
    {t:"水（みず）を飲（の）みます", key:"C"},
  ], correctKey:"A"},

  {id:26, prompt:"Persamaan えんげ（嚥下）", choices:[
    {t:"飲（の）み込み（こみ）", key:"C"},
    {t:"飲（の）み下（くだ）す", key:"A"},
    {t:"ごっくんする", key:"B"},
  ], correctKey:"C"},

  {id:27, prompt:"(Gambar) tumit", choices:[
    {t:"頭（あたま）", key:"A"},
    {t:"踵（かかと）", key:"B"},
    {t:"上腕（じょうわん）", key:"C"},
  ], correctKey:"B"},

  {id:28, prompt:"Sambung kata: お風呂（おふろ）のあと体（からだ）を…", choices:[
    {t:"拭（ふ）きます", key:"A"},
    {t:"乾（かわ）かします", key:"B"},
    {t:"洗（あら）います", key:"C"},
  ], correctKey:"A"},

  {id:29, prompt:"汗（あせ）をたくさん…", choices:[
    {t:"かきます", key:"A"},
    {t:"出（で）ます", key:"B"},
    {t:"流（なが）れます", key:"C"},
  ], correctKey:"A"},

  {id:30, prompt:"Ryousha malam ini menginap di rumah musuko", choices:[
    {t:"今晩（こんばん）、利用者（りようしゃ）は息子（むすこ）の家（いえ）に泊（と）まります", key:"A"},
    {t:"今晩（こんばん）、利用者（りようしゃ）に泊（と）まります", key:"B"},
    {t:"明日（あした）、利用者（りようしゃ）は息子（むすこ）の家（いえ）に泊（と）まります", key:"C"},
  ], correctKey:"A"},

  {id:31, prompt:"(Gambar) bantuan mandi pada lansia", choices:[
    {t:"入浴（にゅうよく）", key:"A"},
    {t:"畳（たた）みます", key:"B"},
    {t:"洗（あら）います", key:"C"},
  ], correctKey:"A"},

  {id:32, prompt:"Tabel kerja: kapan anak menjenguk?", choices:[
    {t:"申し送り（もうしおくり）二回（にかい）", key:"B"},
    {t:"子供（こども）は休（やす）みの日（ひ）に見舞（みま）いに来（き）ます", key:"A"},
    {t:"子供（こども）は忙（いそが）しくて来（き）ません", key:"C"},
  ], correctKey:"B"},

  {id:33, prompt:"Persamaan 褥瘡（ふくがい）", choices:[
    {t:"うつ伏（ぶ）せ", key:"A"},
    {t:"床擦（とこず）れ", key:"B"},
    {t:"仰向（あおむ）け", key:"C"},
  ], correctKey:"A"},

  {id:34, prompt:"Kakek ke kamar; lutut sakit; pilih tongkat", choices:[
    {t:"杖（つえ）を使（つか）って部屋（へや）へ行（い）きます", key:"A"},
    {t:"車椅子（くるまいす）で部屋（へや）へ行（い）きます", key:"B"},
    {t:"部屋（へや）へ行（い）きません", key:"C"},
  ], correctKey:"A"},

  {id:35, prompt:"Malam, minta ekskresi di portable toilet", choices:[
    {t:"夜（よる）はポータブルトイレを使（つか）って介護（かいご）が必要（ひつよう）です", key:"C"},
    {t:"夜（よる）は自分（じぶん）でポータブルトイレを使（つか）います", key:"A"},
    {t:"夜（よる）はベッドでそのまま休（やす）みます", key:"B"},
  ], correctKey:"C"},

  {id:36, prompt:"(Gambar) alat bantu berjalan / tongkat", choices:[
    {t:"歩行器（ほこうき）", key:"A"},
    {t:"杖（つえ）", key:"B"},
    {t:"車椅子（くるまいす）", key:"C"},
  ], correctKey:"A"},

  {id:37, prompt:"Mandi; ingin suhu air dinaikkan", choices:[
    {t:"ちょっとぬるいですか。少（すこ）し熱（あつ）くしますね", key:"B"},
    {t:"お湯（ゆ）の温度（おんど）を上（あ）げます", key:"A"},
    {t:"お湯（ゆ）の温度（おんど）を下（さ）げます", key:"C"},
  ], correctKey:"B"},

  {id:38, prompt:"Bisa pakai baju, tapi mengancing butuh waktu", choices:[
    {t:"ボタンをかけるとき時間（じかん）がかかります", key:"A"},
    {t:"自分（じぶん）で服（ふく）を着（き）られません", key:"B"},
    {t:"早（はや）く服（ふく）を着（き）ます", key:"C"},
  ], correctKey:"A"},

  {id:39, prompt:"Persamaan お尻", choices:[
    {t:"臀部（でんぶ）", key:"A"},
    {t:"尻部（しりぶ）", key:"B"},
    {t:"ヒップ", key:"C"},
  ], correctKey:"A"},

  {id:40, prompt:"Persamaan 参加します", choices:[
    {t:"出席（しゅっせき）", key:"A"},
    {t:"欠席（けっせき）", key:"B"},
    {t:"不参加（ふさんか）", key:"C"},
  ], correctKey:"A"},

  {id:41, prompt:"(Gambar) cukur jenggot", choices:[
    {t:"髭（ひげ）を剃（そ）ります", key:"A"},
    {t:"髪（かみ）を梳（と）かします", key:"B"},
    {t:"顔（かお）を洗（あら）います", key:"C"},
  ], correctKey:"A"},

  {id:42, prompt:"Ryousha akan pergi dengan putrinya untuk makan malam", choices:[
    {t:"午後（ごご）、娘（むすめ）と一緒（いっしょ）に夕食（ゆうしょく）を食（た）べます", key:"A"},
    {t:"娘（むすめ）と一緒（いっしょ）に夕食（ゆうしょく）へ行（い）きます", key:"B"},
    {t:"一人（ひとり）で昼食（ちゅうしょく）を食（た）べます", key:"C"},
  ], correctKey:"A"},

  {id:43, prompt:"Persamaan 褥瘡（ぎょうがい）", choices:[
    {t:"仰向（あおむ）け", key:"B"},
    {t:"褥瘡（じょくそう）", key:"A"},
    {t:"褥創（じょくそう）", key:"C"},
  ], correctKey:"B"},

  {id:44, prompt:"Saat mandi, klien minta punggungnya digosok lebih kuat", choices:[
    {t:"少（すこ）しよくしますね", key:"B"},
    {t:"背中（せなか）をもっと強（つよ）く洗（あら）います", key:"A"},
    {t:"背中（せなか）を軽（かる）く洗（あら）います", key:"C"},
  ], correctKey:"B"},

  {id:45, prompt:"Hemiplegia telinga kiri", choices:[
    {t:"左（ひだり）耳（みみ）が聞（き）こえる", key:"A"},
    {t:"左（ひだり）耳（みみ）が痛（いた）いです", key:"B"},
    {t:"左（ひだり）耳（みみ）が聞（き）こえにくいです", key:"C"},
  ], correctKey:"C"},

  {id:46, prompt:"Senam: angkat tangan kanan-kiri bersama, kanan sakit", choices:[
    {t:"左（ひだり）手（て）を上（あ）げてください", key:"B"},
    {t:"両手（りょうて）を上（あ）げてください", key:"A"},
    {t:"右（みぎ）手（て）を下（さ）げてください", key:"C"},
  ], correctKey:"B"},

  {id:47, prompt:"Jalan-jalan, minta kursi roda (kemarin kebanyakan jalan)", choices:[
    {t:"散歩（さんぽ）する時（とき）、たくさん歩（ある）いて足（あし）が痛（いた）いです", key:"B"},
    {t:"車椅子（くるまいす）を使（つか）いたいです", key:"A"},
    {t:"散歩（さんぽ）の時（とき）、たくさん歩（ある）く", key:"C"},
  ], correctKey:"B"},

  {id:48, prompt:"Asupan cairan: tidak boleh minum ocha pada jam tertentu", choices:[
    {t:"食事（しょくじ）の時（とき）お茶（ちゃ）を飲（の）みます", key:"A"},
    {t:"食事（しょくじ）の時（とき）お茶（ちゃ）を飲（の）みません", key:"B"},
    {t:"食事（しょくじ）の後（あと）お茶（ちゃ）を飲（の）みます", key:"C"},
  ], correctKey:"A"},

  {id:49, prompt:"Hourensou (SSW6): pilih yang ada", choices:[
    {t:"チームを決（き）めます", key:"A"},
    {t:"何（なに）もしません", key:"B"},
    {t:"自分（じぶん）でできます", key:"C"},
  ], correctKey:"A"},

  {id:50, prompt:"Persamaan 面会禁止", choices:[
    {t:"面会（めんかい）してはいけません", key:"B"},
    {t:"面会（めんかい）します", key:"A"},
    {t:"面会（めんかい）できます", key:"C"},
  ], correctKey:"B"},

  {id:51, prompt:"Persamaan 危ない", choices:[
    {t:"危険（きけん）", key:"B"},
    {t:"元気（げんき）", key:"A"},
    {t:"便利（べんり）", key:"C"},
  ], correctKey:"B"},

  {id:52, prompt:"Pakai 補聴器: anggota mana?", choices:[
    {t:"耳（みみ）", key:"C"},
    {t:"目（め）", key:"A"},
    {t:"手（て）", key:"B"},
  ], correctKey:"C"},

  {id:53, prompt:"Berkeringat; cuaca panas; mandi shower dingin saja", choices:[
    {t:"シャワーだけ浴（あ）びます", key:"C"},
    {t:"お風呂（ふろ）に入（はい）ります", key:"A"},
    {t:"水（みず）のシャワーだけ浴（あ）びます", key:"B"},
  ], correctKey:"C"},

  {id:54, prompt:"Ditawari bantuan mandi; jawab: tidak usah", choices:[
    {t:"一人（ひとり）でお風呂（ふろ）に入（はい）ります", key:"C"},
    {t:"一緒（いっしょ）にお風呂（ふろ）に入（はい）ります", key:"A"},
    {t:"手伝（てつだ）ってください", key:"B"},
  ], correctKey:"C"},

  {id:55, prompt:"これはなんですか（gambar gelas）", choices:[
    {t:"ゆのみ", key:"B"},
    {t:"茶碗（ちゃわん）", key:"A"},
    {t:"すいのみ", key:"C"},
  ], correctKey:"B"},
];