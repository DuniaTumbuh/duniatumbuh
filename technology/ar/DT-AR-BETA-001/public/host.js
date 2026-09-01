const video=document.querySelector('#camera'), canvas=document.querySelector('#output'), status=document.querySelector('#status');
const ctx=canvas.getContext('2d');
const nimo=new Image();
let placement={x:.5,y:.63,scale:.34}, ready=false, sending=false;
const canonical='/assets/nimo/Nimo_Master_Character_Reference_v1.1_Jambul_Correction_Candidate.png';
function setStatus(text,ok=false){status.textContent=text;status.className=`overlay ${ok?'ok':''}`}
function command(type){if(type==='MOVE_LEFT')placement.x=.25;if(type==='MOVE_CENTER'||type==='RESET')placement.x=.5;if(type==='MOVE_RIGHT')placement.x=.75;if(type==='WAVE')placement.scale=.38;setTimeout(()=>placement.scale=.34,650)}
nimo.onload=()=>{ready=true;setStatus('Aset Nimo kanonis termuat',true)};
nimo.onerror=()=>setStatus('HARD STOP: binary Nimo kanonis tidak tersedia');
nimo.src=canonical;
new EventSource('/events/command').addEventListener('command',e=>command(JSON.parse(e.data).type));
async function start(){
  try{video.srcObject=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment',width:{ideal:1280},height:{ideal:720}},audio:false});await video.play();draw();setInterval(pushFrame,160)}
  catch(e){setStatus(`Kamera gagal: ${e.message}`)}
}
function draw(){
  if(video.videoWidth){canvas.width=video.videoWidth;canvas.height=video.videoHeight;ctx.drawImage(video,0,0,canvas.width,canvas.height);if(ready){const h=canvas.height*placement.scale,w=h*(nimo.naturalWidth/nimo.naturalHeight);ctx.drawImage(nimo,canvas.width*placement.x-w/2,canvas.height*placement.y-h,w,h)}}requestAnimationFrame(draw)
}
async function pushFrame(){if(!ready||sending||!canvas.width)return;sending=true;try{await fetch('/api/frame',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({image:canvas.toDataURL('image/jpeg',.62)})})}finally{sending=false}}
start();
