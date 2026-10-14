"use strict";
// In-memory fixture only. Reload resets all changes. No server or storage.
const initial=[
{id:"evt-a",universe:"Dino Adventure",title:"Petualangan Ulang Tahun A",date:"2026-11-08T10:00",venue:"Ruang Perayaan A",cake:"mint",candles:3,music:true},
{id:"evt-b",universe:"Dino Adventure",title:"Petualangan Ulang Tahun B",date:"2026-11-15T14:00",venue:"Ruang Perayaan B",cake:"pink",candles:4,music:false},
{id:"evt-c",universe:"Nimo & Friends — MOCK ONLY",title:"Perayaan C (uji isolasi)",date:"2026-11-22T09:00",venue:"Ruang Perayaan C",cake:"sunny",candles:2,music:true}
];
const clone=x=>JSON.parse(JSON.stringify(x));
const state=new Map(initial.map(e=>[e.id,{draft:clone(e),history:[clone(e)],published:0}]));
const $=id=>document.getElementById(id);let active=initial[0].id,muted=true,audio=null;
const safeCandles=n=>Math.max(1,Math.min(8,Number.isFinite(+n)?Math.round(+n):1));
const fields=["title","date","venue","cake","candles","music"];
function stopAudio(){if(audio){audio.osc.stop();audio.ctx.close().catch(()=>{});audio=null;}$("play").setAttribute("aria-pressed","false");$("play").textContent="▶ Musik demo";}
function load(){stopAudio();const e=state.get(active).draft;for(const k of fields){$(k)[k==="music"?"checked":"value"]=e[k];}render(e);$("status").textContent="Draft lokal siap diedit.";}
function collect(){const e=clone(state.get(active).draft);for(const k of fields)e[k]=k==="music"?$(k).checked:k==="candles"?safeCandles($(k).value):$(k).value.trim();return e;}
function render(e){$("universe").textContent=e.universe;$("displayTitle").textContent=e.title||"Tanpa judul";$("displayDate").textContent=e.date||"Tanggal belum diatur";$("displayVenue").textContent=e.venue||"Lokasi belum diatur";$("cakeArt").className="cake "+e.cake;$("flames").replaceChildren();for(let i=0;i<safeCandles(e.candles);i++){const f=document.createElement("span");f.className="flame";f.textContent="🕯️";$("flames").append(f);}$("celebrate").textContent="";$("revision").textContent="Publikasi simulasi: revisi "+state.get(active).published+" · "+state.get(active).history.length+" snapshot";}
$("event").replaceChildren();for(const e of initial){const o=document.createElement("option");o.value=e.id;o.textContent=e.id+" · "+e.universe;$("event").append(o);}
$("event").addEventListener("change",()=>{active=$("event").value;load();});
$("preview").addEventListener("click",()=>{const e=collect();state.get(active).draft=e;render(e);$("status").textContent="Preview draft lokal (belum publish).";});
$("publish").addEventListener("click",()=>{const e=collect();if(!e.title||!e.date||!e.venue){$("status").textContent="Judul, tanggal, dan lokasi wajib diisi.";return;}const s=state.get(active);s.draft=e;s.history.push(clone(e));s.published=s.history.length-1;render(e);$("status").textContent="Publish SIMULASI berhasil: revisi "+s.published+". Tidak ada server/QR nyata.";});
$("rollback").addEventListener("click",()=>{const s=state.get(active);if(s.published<1){$("status").textContent="Belum ada revisi untuk rollback.";return;}const target=s.history[s.published-1];const restored=clone(target);s.history.push(clone(restored));s.published=s.history.length-1;s.draft=restored;stopAudio();for(const k of fields)$(k)[k==="music"?"checked":"value"]=restored[k];render(restored);$("status").textContent="Rollback SIMULASI: publikasi baru revisi "+s.published+" memulihkan konten sebelumnya (riwayat tetap tersimpan).";});
$("blow").addEventListener("click",()=>{$("flames").replaceChildren();$("celebrate").textContent="🎉 Selamat ulang tahun!";});
$("mute").addEventListener("click",()=>{muted=!muted;$("mute").textContent=muted?"🔇 Mute":"🔊 Suara aktif";$("mute").setAttribute("aria-pressed",String(muted));if(muted)stopAudio();});
$("play").addEventListener("click",async()=>{if(audio){stopAudio();return;}if(muted){$("status").textContent="Aktifkan suara terlebih dahulu.";return;}if(!collect().music){$("status").textContent="Musik dinonaktifkan untuk acara ini.";return;}try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)throw Error("Browser tidak mendukung audio");const ctx=new AC();await ctx.resume();const osc=ctx.createOscillator(),gain=ctx.createGain();osc.type="sine";gain.gain.value=.035;osc.connect(gain);gain.connect(ctx.destination);osc.frequency.value=523.25;osc.start();audio={ctx,osc};$("play").textContent="⏸ Hentikan musik";$("play").setAttribute("aria-pressed","true");}catch{$("status").textContent="Audio tidak tersedia. Undangan tetap dapat digunakan.";}});window.addEventListener("pagehide",stopAudio);load();