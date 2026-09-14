
let plants=[], current=null, currentTab="kenalan";
const grid=document.querySelector("#plantGrid"), detail=document.querySelector("#detail"), welcome=document.querySelector("#welcome");
const content=document.querySelector("#tabContent");

fetch("plants.json").then(r=>r.json()).then(data=>{
  plants=data;
  grid.innerHTML=plants.map(p=>`<button class="plant-card" data-id="${p.id}">
    <img src="assets/${p.id}.png" alt="${p.name}">
    <span>${p.name}</span>
  </button>`).join("");
  grid.querySelectorAll("button").forEach(b=>b.onclick=()=>openPlant(b.dataset.id));
  const wanted=new URLSearchParams(location.search).get("tanaman");
  if(wanted && plants.some(p=>p.id===wanted)) openPlant(wanted);
});

function openPlant(id){
  current=plants.find(p=>p.id===id); if(!current)return;
  welcome.classList.add("hidden"); detail.classList.remove("hidden");
  document.querySelector("#plantImg").src=`assets/${current.id}.png`;
  document.querySelector("#plantImg").alt=current.name;
  document.querySelector("#plantName").textContent=current.name;
  document.querySelector("#plantType").textContent=current.type;
  currentTab="kenalan"; syncTabs(); render();
  loadDate(); history.replaceState(null,"",`?tanaman=${current.id}`);
  scrollTo({top:0,behavior:"smooth"});
}
document.querySelector("#backBtn").onclick=()=>{
  detail.classList.add("hidden"); welcome.classList.remove("hidden"); history.replaceState(null,"",location.pathname);
};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{currentTab=b.dataset.tab;syncTabs();render()});
function syncTabs(){document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("active",b.dataset.tab===currentTab))}

function render(){
  if(!current)return;
  const p=current;
  if(currentTab==="kenalan") content.innerHTML=`
    <h3>👋 Kenalan denganku</h3>
    <div class="fact"><b>Jenis:</b> ${p.type}</div>
    <div class="fact"><b>Cara tumbuh:</b> ${p.habit}</div>
    <div class="fact"><b>Perlu rambatan/ajir?</b> ${p.support}</div>
    <div class="fact">🔎 ${p.note}</div>`;
  if(currentTab==="tumbuh") content.innerHTML=`
    <h3>🌱 Perjalanan tumbuh</h3>
    <div class="fact"><b>Mulai:</b> ${p.start}</div>
    <div class="fact"><b>Biji → tunas:</b> ${p.sprout}</div>
    <div class="fact"><b>Menuju panen:</b> ${p.harvest}</div>
    <p><small>Ini kisaran belajar, bukan janji tanggal pasti.</small></p>`;
  if(currentTab==="menanam") content.innerHTML=`
    <h3>🪴 Cara menanam</h3>
    <div class="fact">1. Siapkan wadah berlubang dan media yang sesuai.</div>
    <div class="fact">2. ${p.start}</div>
    <div class="fact">3. Tutup benih secukupnya—jangan terlalu dalam.</div>
    <div class="fact">4. Siram lembut, beri cahaya, lalu amati.</div>
    <div class="fact"><b>Media:</b> ${p.media}</div>`;
  if(currentTab==="rawat") content.innerHTML=`
    <h3>☀️💧 Cara merawat</h3>
    <div class="fact"><b>Cahaya:</b> ${p.light}</div>
    <div class="fact"><b>Air:</b> ${p.water}</div>
    <div class="fact"><b>Penyangga:</b> ${p.support}</div>
    <div class="fact">Gunakan kompos/pupuk organik secukupnya bersama orang tua/guru dan ikuti petunjuk produk.</div>`;
  if(currentTab==="gizi") content.innerHTML=`
    <h3>🥗 Gizi & manfaat</h3>
    <div class="fact">${p.food}</div>
    <p><small>Makanan sehat berasal dari pola makan yang beragam; satu sayuran bukan “obat” untuk penyakit.</small></p>`;
  if(currentTab==="bantuan") content.innerHTML=`
    <h3>🛠️ Yuk, kita periksa bersama!</h3>
    <p>Pilih yang paling mirip dengan keadaan tanamanmu.</p>
    <div class="action">
      <button data-help="belum">Belum tumbuh</button>
      <button data-help="layu">Tunas layu</button>
      <button data-help="kuning">Daun menguning</button>
      <button data-help="tinggi">Terlalu tinggi/lemah</button>
      <button data-help="bunga">Belum berbunga/berbuah</button>
      <button data-help="serangga">Ada serangga/lubang</button>
      <button data-help="lain">Masalah lain</button>
    </div><div id="helpAnswer"></div>`;
  document.querySelectorAll("[data-help]").forEach(b=>b.onclick=()=>help(b.dataset.help));
}
function help(kind){
 const p=current; let t="";
 if(kind==="belum") t=`<b>Belum tumbuh bukan berarti gagal.</b> ${p.sprout} Periksa: media lembap tetapi tidak becek, benih tidak terlalu dalam, tempat cukup terang/hangat sesuai tanaman, dan benih masih baik. Amati lagi sebelum mengganti benih.`;
 if(kind==="layu") t=`Periksa media dengan jari bersama orang tua/guru. Terlalu kering maupun terlalu basah bisa membuat tanaman layu. Pastikan lubang drainase tidak tersumbat dan hindari memindahkan bibit terlalu sering.`;
 if(kind==="kuning") t=`Periksa apakah media selalu basah, cahaya terlalu sedikit, atau tanaman terlalu rapat. Jangan langsung menambah banyak pupuk; perbaiki satu hal, lalu amati perubahan.`;
 if(kind==="tinggi") t=`Batang yang panjang dan lemah sering perlu cahaya yang lebih baik. Pindahkan bertahap ke lokasi lebih terang dan beri penyangga bila jenis tanaman memerlukannya.`;
 if(kind==="bunga") t=`Tanaman mungkin belum cukup dewasa. Pastikan cahaya cukup, pertumbuhan sehat, dan ikuti kisaran waktunya. Untuk tanaman buah, bunga biasanya muncul sebelum buah.`;
 if(kind==="serangga") t=`Amati bagian atas dan bawah daun. Jangan gunakan pestisida sendiri. Tunjukkan kepada orang tua/guru; daun yang sangat rusak dapat dipisahkan sesuai arahan orang dewasa.`;
 if(kind==="lain") t=`Foto atau catat apa yang kamu lihat: warna daun, kondisi tanah, tinggi tanaman, dan kapan masalah mulai terlihat. Tanyakan kepada orang tua/guru.`;
 document.querySelector("#helpAnswer").innerHTML=`<div class="answer">${t}<br><br><b>Ilmuwan kecil:</b> amati → periksa → lakukan satu perubahan → amati lagi.</div>`;
}

const dateInput=document.querySelector("#plantDate"), dayCount=document.querySelector("#dayCount");
document.querySelector("#saveDate").onclick=()=>{ if(!current||!dateInput.value)return; localStorage.setItem("tanamaku:"+current.id,dateInput.value); updateDays(); };
function loadDate(){dateInput.value=localStorage.getItem("tanamaku:"+current.id)||"";updateDays()}
function updateDays(){
 if(!dateInput.value){dayCount.textContent="";return}
 const d=new Date(dateInput.value+"T00:00:00"), now=new Date();
 const days=Math.max(0,Math.floor((new Date(now.getFullYear(),now.getMonth(),now.getDate())-d)/86400000));
 dayCount.textContent=`🌱 Hari ke-${days}. Yuk, lihat perubahan kecil pada tanamanmu hari ini!`;
}
