import { registerPlant, getPlant } from "./core/plant-registry.js";
import { createJourney, journeyAgeDays } from "./core/journey-engine.js";
import { createEmptyState, loadState, saveState, upsertJourney } from "./core/journey-store.js";
import { completeMission, recordObservation } from "./core/mission-engine.js";

const screen=document.querySelector("#screen"), stars=document.querySelector("#stars"), nav=document.querySelector("#bottomNav");
const storage=window.localStorage;
let state=loadState(storage);
let plant,missions,observations;
const JID="tomat-preview-001";

async function boot(){
 const [p,m,o]=await Promise.all([
  fetch("./content/tomat/plant.json").then(r=>r.json()),
  fetch("./content/tomat/missions.json").then(r=>r.json()),
  fetch("./content/tomat/observations.json").then(r=>r.json())
 ]);
 plant=p;missions=m;observations=o;registerPlant(plant);
 renderEntry();
}
function journey(){return state.journeys[JID]??null}
function persist(){state=saveState(storage,state);syncChrome()}
function syncChrome(){stars.textContent="⭐ "+(journey()?.stars??0);nav.classList.toggle("hidden",!journey())}
function plantImg(){return "../assets/tomat.png"}
function renderEntry(){
 syncChrome();
 if(journey()) return renderHome();
 screen.innerHTML=`<div class="hero"><div class="eyebrow">S01 · BENIHKU</div><img class="plant" src="${plantImg()}" alt="Tomat"><h1>Benihku: Tomat</h1><p>Yuk mulai perjalanan tumbuh bersama. Kita akan merawat dan mengamati tanaman nyata, bukan menebak pertumbuhannya dari waktu.</p><button id="start" class="primary">🌱 MULAI MENANAM</button></div>`;
 document.querySelector("#start").onclick=()=>{
  const j=createJourney({journeyId:JID,plant,plantingDate:new Date().toISOString().slice(0,10)});
  state=upsertJourney(state,j);persist();renderMission(missions.find(x=>x.id===plant.entryMissionId));
 };
}
function renderHome(){
 const j=journey(), age=journeyAgeDays(j), labels={seed:"Benih",sprout:"Tunas",leaf:"Daun",flower:"Bunga",fruit:"Buah",harvest:"Panen"};
 screen.innerHTML=`<div class="eyebrow">S03 · TANAMANKU</div><h1>🍅 Tomatku</h1><p class="muted">Perjalanan hari ke-${age} · Status observasi: <b>${labels[j.currentStage]||j.currentStage}</b></p><div class="card progress">${plant.growthModel.map(s=>`<span class="${s===j.currentStage?"on":""}">${labels[s]||s}</span>`).join("")}</div><div class="narrator"><b>Nimo:</b> Setiap tanaman punya waktu tumbuh yang berbeda. Yuk lihat keadaan tanamanmu.</div><button id="mission" class="primary">🎯 MISI HARI INI</button><button id="sprout" class="choice">🔎 Aku ingin memeriksa tunas</button>`;
 document.querySelector("#mission").onclick=()=>renderMission(missions.find(x=>x.id==="tomat-check-soil-001"));
 document.querySelector("#sprout").onclick=()=>renderObservation(observations.find(x=>x.id==="tomat-sprout-seen-001"));
 syncChrome();
}
function renderMission(m){
 screen.innerHTML=`<div class="eyebrow">S04 · MISI HARI INI</div><h1>${m.title}</h1><div class="card">${m.instructions.map((x,i)=>`<p><b>${i+1}.</b> ${x}</p>`).join("")}</div><p class="muted">Lakukan pada tanaman nyata, lalu kembali ke layar ini.</p><button id="done" class="primary">SUDAH SELESAI</button><button id="back" class="choice">← Kembali</button>`;
 document.querySelector("#done").onclick=()=>{
  const eventId="mission:"+m.id;
  state=completeMission({state,journeyId:JID,mission:m,eventId,createdAt:new Date().toISOString()});persist();
  if(m.nextObservationId) renderObservation(observations.find(x=>x.id===m.nextObservationId));
  else renderHome();
 };
 document.querySelector("#back").onclick=renderHome;
}
function renderObservation(o){
 screen.innerHTML=`<div class="eyebrow">S05 · APA YANG KAMU LIHAT?</div><h1>${o.question}</h1><p>Amati tanamanmu, lalu pilih yang paling sesuai.</p><div id="choices">${o.choices.map(c=>`<button class="choice" data-choice="${c.id}">${c.label}</button>`).join("")}</div><div id="feedback"></div><button id="back" class="choice">← Kembali</button>`;
 document.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>{
  const choiceId=b.dataset.choice,eventId="observation:"+o.id+":"+choiceId;
  state=recordObservation({state,journeyId:JID,plant,observation:o,choiceId,eventId,createdAt:new Date().toISOString()});persist();
  const msg=choiceId==="moist"?"Bagus. Tidak perlu menyiram hanya karena ada jadwal.":choiceId==="dry"?"Tanah terasa kering. Minta bantuan orang dewasa untuk menyiram secukupnya.":choiceId==="yes"?"Wah, kamu menemukan tunas! Milestone Tunas tercatat.":"Tidak apa-apa. Mengamati juga perlu latihan.";
  document.querySelector("#feedback").innerHTML=`<div class="feedback">${msg}</div><button id="continue" class="primary">LANJUTKAN</button>`;
  document.querySelector("#continue").onclick=renderHome;
 });
 document.querySelector("#back").onclick=renderHome;
}
function renderJournal(){
 const j=journey();screen.innerHTML=`<div class="eyebrow">JURNALKU</div><h1>📔 Perjalanan Tomatku</h1>${j.journal.length?j.journal.map(x=>`<div class="journal-entry"><b>${x.type==="mission"?"Misi":"Pengamatan"}</b><br><span class="muted">${x.missionId||x.observationId||""}</span></div>`).join(""):"<p>Belum ada catatan.</p>"}`;syncChrome();
}
function renderGarden(){screen.innerHTML=`<div class="eyebrow">KEBUNKU</div><h1>🌿 Kebun Dunia Tumbuh-ku</h1><div class="card"><b>🍅 Tomat</b><p>Perjalanan aktif · ${journey()?.currentStage||"seed"}</p></div><p class="muted">Tanaman lain akan ditambahkan melalui Plant Registry tanpa mengubah core game.</p>`;syncChrome()}
nav.querySelectorAll("button").forEach(b=>b.onclick=()=>b.dataset.nav==="journal"?renderJournal():b.dataset.nav==="garden"?renderGarden():renderHome());
boot().catch(e=>{screen.innerHTML=`<h1>Preview belum dapat dimuat</h1><p>${e.message}</p>`});
