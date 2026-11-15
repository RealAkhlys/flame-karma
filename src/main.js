import { createResearchWorkspace } from './research.js';
import { createFireExperience } from './fire.js';
import { createVisualStory } from './visual-story.js';
import { createFlameLab } from './flame-lab.js';
import { createSafetyAnalyst } from './safety-analyst.js';
import { createEarthSpinOffs } from './spin-offs.js';
import { createPresentationMode } from './presentation-mode.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const $ = (id) => document.getElementById(id);
const icons = {
 arrow:'M4 12h16m-6-6 6 6-6 6',right:'m9 5 7 7-7 7',left:'m15 5-7 7 7 7',up:'m5 15 7-7 7 7',down:'m5 9 7 7 7-7',
 close:'m6 6 12 12M6 18 18 6',expand:'M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6',
 info:'M12 11v6m0-10v.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
 help:'M9 9a3 3 0 1 1 5 2.24c-1.2.8-2 1.2-2 2.76m0 3v.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0',
 home:'m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7',
 cube:'m12 3 9 5v8l-9 5-9-5V8l9-5Zm0 10v8M3 8l9 5 9-5',
 layers:'m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5',
 search:'M20 20l-5-5m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0',
 focus:'M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 route:'M5 6a2 2 0 1 1 0 .01M19 18a2 2 0 1 1 0 .01M7 6h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8',
 spark:'m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z',
 hand:'M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 4-2 7-6 7h-2c-2 0-3-1-4-3l-4-6a2 2 0 0 1 3-2l1 1',
 cursor:'m5 3 14 10-7 1-3 7L5 3Z',external:'M14 3h7v7m0-7L10 14M10 3H3v18h18v-7',
 bike:'M9 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m14 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 17l5-9 5 9H5m5-9h7l2 9M8 5h5m4-2h3v5',
 cable:'M6 3v5a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v5M3 3h6m6 18h6M5 1v2m2-2v2m10 18v2m2-2v2',
 rack:'M4 3h16v18H4V3Zm0 6h16M4 15h16M8 6h2m-2 6h2m-2 6h2',
 light:'M8 16c0-3-3-4-3-8a7 7 0 0 1 14 0c0 4-3 5-3 8H8Zm0 3h8m-6 3h4',
 hatch:'M6 3h12l3 3v12l-3 3H6l-3-3V6l3-3Zm2 4h8v10H8V7m5 5h1',
 screen:'M3 4h18v13H3V4Zm9 13v4m-5 0h10',
 camera:'M3 6h5l2-3h4l2 3h5v15H3V6Zm13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0',
 frame:'M3 3h18v18H3V3m4 0v18M17 3v18M3 7h18M3 17h18'
};
function icon(name){return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[name]||icons.cube}"/></svg>`;}
document.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));

const state={ready:false,entered:false,selected:null,hover:null,filter:'all',query:'',quality:'high',route:true,visited:new Set(),yaw:-Math.PI/2,pitch:0,targetYaw:-Math.PI/2,targetPitch:0,travel:null};
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const touch=matchMedia('(pointer: coarse)').matches;
const compact=()=>touch||innerWidth<=760;
const keys=new Set();const held=new Set();
const meshes=[];const parts=[];const byName=new Map();let metadata,renderer,composer,outline,camera,scene,ao,fire;
let lastFrame=performance.now(),hoverTime=0,toastTimer,hoverPoint=new THREE.Vector3();
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),moveRay=new THREE.Raycaster();
const velocity=new THREE.Vector3(),desired=new THREE.Vector3();
const minBounds=new THREE.Vector3(-3.15,-.45,-.4),maxBounds=new THREE.Vector3(3.15,.45,.4);
const initialPosition=new THREE.Vector3(-2.85,.03,0);

const stops=[
 {name:'CEVIS.Bike',title:'CEVIS Cycle Ergometer',sub:'Crew Exercise System',icon:'bike',pos:[.25,.04,.18],target:[1.1,-.58,-.67]},
 {name:'EXPRESS_Racks_ATLAS_11B_Generic_Locker_01',title:'EXPRESS Science Lockers',sub:'Modular payload volume',icon:'rack',pos:[-1.15,.15,.05],target:[-.74,.7,-1.28]},
 {name:'US_Lab_Int_MSS_AV_Wires',title:'Avionics Cable Loom',sub:'High-voltage harness routing',icon:'cable',pos:[-.7,.05,-.12],target:[.05,-.09,.87]},
 {name:'US_Lab_Int_Lights_Emissive',title:'Destiny Lighting Fixtures',sub:'Illumination array',icon:'light',pos:[-1.7,-.1,0],target:[-.9,1.06,0]},
 {name:'US_Lab_Int_FWD_Bulkhead',title:'Forward Passageway Bulkhead',sub:'Module boundary to Node 2',icon:'hatch',pos:[2.65,.03,0],target:[3.7,0,0]}
];

function describe(name){
 let title='Equipment Component',description='Identifiable hardware component in the US Lab Destiny interior mesh.',category='Equipment',glyph='cube',group='equipment';
 if(name==='CEVIS.Bike'){title='CEVIS Exercise Ergometer';description='Cycle Ergometer with Vibration Isolation and Stabilization system. Used by astronauts for daily cardiovascular conditioning.';category='Crew Systems';glyph='bike';}
 else if(/Cevis.Mount/i.test(name)){title='CEVIS Structural Mount';description='Vibration-isolated mounting fixture securing the exercise bike to internal seat tracks.';glyph='bike';}
 else if(/Wires/i.test(name)){title='Avionics Wire Loom';description='Inter-rack avionics and power wiring bundles running along utility standoffs.';category='Cabling & Power';glyph='cable';}
 else if(/Generic_Locker/i.test(name)){const n=name.match(/_(\d+)$/)?.[1]||'';title=`EXPRESS Payload Locker ${n}`;description='Standardized middeck locker enclosure inside the EXPRESS rack structure for microgravity experiments.';category='Science Hardware';glyph='rack';}
 else if(/_Base$/.test(name)){title='EXPRESS Rack Base Structure';description='Primary standardized rack chassis providing power, data, and cooling fluids to experiments.';category='Science Hardware';glyph='rack';}
 else if(/Drawer/i.test(name)){title='Equipment Drawer';description='Modular pull-out utility and payload drawer.';category='Science Hardware';glyph='rack';}
 else if(/Lights/i.test(name)){title=/EndCaps/.test(name)?'Lighting End Caps':'Module Luminaire Assembly';description='Overhead interior light fixture running along ceiling standoffs.';category='Interior Systems';glyph='light';group='structure';}
 else if(/Bulkhead/.test(name)){title=/FWD/.test(name)?'Forward Bulkhead Hatchway':'Aft Bulkhead Hatchway';description='Endcone structural bulkhead and vestibule ring separating US Lab from adjacent modules.';category='Structural Shell';glyph='hatch';group='structure';}
 else if(/WORF/.test(name)){title='WORF Optical Window Frame';description='Window Observational Research Facility optical bench mounting ring.';category='Earth Observation';glyph='camera';}
 else if(/MainFrame/.test(name)){title='Internal Standoff Frame';description='Longitudinal structural titanium/aluminum framework supporting equipment racks and ducting.';category='Structural Shell';glyph='frame';group='structure';}
 else if(/Int_Racks/.test(name)){title=`Avionics Rack Shell ${name.slice(-3)}`;description='Enclosed hardware rack chassis flanking the central aisle.';category='Interior Systems';glyph='rack';group='structure';}
 else if(/Elbow_Screens/.test(name)){title='Avionics Interface Panel';description='Side utility panel providing auxiliary display and telemetry connections.';category='Interior Systems';glyph='screen';}
 else if(/Elbows/.test(name)){title='Corner Structural Connectors';description='Corner bracket couplings linking transverse bulkhead rings.';category='Structural Shell';glyph='frame';group='structure';}
 else if(/Metals/.test(name)){title='Internal Metal Bracketry';description='Structural mounts and bracket assemblies throughout the aisle.';category='Structural Shell';glyph='frame';group='structure';}
 else if(/Patches/.test(name)){title='Mission Decals & Badges';description='Interior station insignia and expedition commemorative plaques.';category='Interior Systems';glyph='spark';group='structure';}
 else if(/MSS_AV$/.test(name)){title='MSS Avionics Terminal';description='Mobile Servicing System robotic workstation display terminal.';glyph='screen';}
 else {const simple=name.replace(/^EXPRESS_Racks_ATLAS_(?:\d+_)?/,'').replaceAll('_',' ').replace(/\s+/g,' ').trim();title=simple||title;description='Hardware element cataloged in official NASA JSC interior geometry archive.';category='Science Hardware';glyph='rack';}
 return {title,description,category,icon:glyph,group};
}

function toast(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,3200);}
function modalOpen(){return !!document.querySelector('dialog[open]');}
function stopMovement(){keys.clear();held.clear();velocity.set(0,0,0);document.querySelectorAll('[data-move]').forEach(b=>b.classList.remove('pressed'));}
function showDialog(id){stopMovement();state.travel=null;$(id).showModal();}
$('help-button').onclick=()=>showDialog('help-dialog');$('info-button').onclick=()=>showDialog('info-dialog');
$('retry-button').onclick=()=>location.reload();
$('fullscreen-button').onclick=async()=>{try {if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('Fullscreen is not supported in this browser.');}catch{toast('Unable to toggle fullscreen.');}};
document.addEventListener('fullscreenchange',()=>$('fullscreen-button').setAttribute('aria-label',document.fullscreenElement?'Exit Fullscreen':'Fullscreen'));

function enter(){
 if(!state.ready)return;
 const first=!state.entered;
 state.entered=true;
 document.body.classList.add('entered');
 $('welcome').hidden=true;
 $('hud').hidden=false;
 $('explore-hint').hidden=false;
 if(first)setRoute(!compact());
 renderer.domElement.focus({preventScroll:true});
}
$('enter-button').onclick=enter;

function setRoute(visible){state.route=visible;$('route').hidden=!visible||!state.entered;$('route-button').setAttribute('aria-pressed',String(visible));if(visible)$('inventory').hidden=true;}
$('route-button').onclick=()=>{if(compact()&&!state.route)closeSelection();setRoute(!state.route);};
function showInventory(){if(!state.ready)return;setRoute(false);if(compact())closeSelection();$('inventory').hidden=false;renderInventory();$('part-search').focus();}
$('inventory-button').onclick=showInventory;$('inventory-close').onclick=()=>{$('inventory').hidden=true;setRoute(true);};
$('part-search').addEventListener('input',e=>{state.query=e.target.value.toLowerCase();renderInventory();});
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{state.filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));renderInventory();});

function renderInventory(){
 const items=parts.filter(m=>{const d=m.userData.description;return (state.filter==='all'||d.group===state.filter)&&`${d.title} ${m.userData.sourceName}`.toLowerCase().includes(state.query);}).sort((a,b)=>a.userData.description.title.localeCompare(b.userData.description.title));
 $('parts-list').replaceChildren();
 for(const m of items){const d=m.userData.description;const b=document.createElement('button');b.dataset.part=String(m.userData.index);b.className='part-row'+(state.selected===m?' selected':'');b.innerHTML=`<span>${icon(d.icon)}</span><span><strong></strong><small></small></span>`;b.querySelector('strong').textContent=d.title;b.querySelector('small').textContent=d.category;b.onclick=()=>{select(m);if(compact())$('inventory').hidden=true;};$('parts-list').append(b);}
 if(!items.length){const p=document.createElement('p');p.className='empty-search';p.textContent='No matching hardware parts found.';$('parts-list').append(p);}
 $('search-count').textContent=`${items.length} / ${parts.length} cataloged parts`;
}

function makeStops(){
 stops.forEach((s,i)=>{const b=document.createElement('button');b.className='route-stop';b.dataset.stop=String(i);b.innerHTML=`<span class="stop-number">${String(i+1).padStart(2,'0')}</span><span class="stop-copy"><strong>${s.title}</strong><small>${s.sub}</small></span><span class="stop-arrow">${icon('arrow')}</span>`;b.onclick=()=>{const mesh=byName.get(s.name);if(mesh){select(mesh);travelTo(s.pos,s.target);}else toast('Part not found in model mesh.');};$('route-stops').append(b);});
}

function select(mesh){
 state.selected=mesh;state.hover=null;state.travel=null;stopMovement();$('hover-label').hidden=true;
 const d=mesh.userData.description;
 $('detail-title').textContent=d.title;
 $('detail-description').textContent=d.description;
 $('detail-category').textContent=d.category;
 $('detail-icon').innerHTML=icon(d.icon);
 $('detail-number').textContent=`USL / ${String(mesh.userData.index+1).padStart(2,'0')}`;
 $('detail-source').textContent=mesh.userData.sourceName;
 $('detail').hidden=false;
 document.body.classList.add('part-selected');
 setRoute(false);
 $('inventory').hidden=true;
 const related=/Wires|Bulkhead/i.test(mesh.userData.sourceName)?'Wire Overheating & Smoke Detection Studies':'Solid Fuel Flammability & Quenching Limits';
 $('detail-research-label').textContent=related;
 $('detail-research').onclick=()=>{switchView('research');research.open(/Wires|Bulkhead/i.test(mesh.userData.sourceName)?'detection':'prevention');};
 $('detail-placement').onclick=()=>{fire.placeAt(mesh.userData.center.toArray(),d.title);closeSelection();};
 if(compact()){setRoute(false);$('inventory').hidden=true;}
 const stopIndex=stops.findIndex(s=>s.name===mesh.userData.sourceName);if(stopIndex>=0)state.visited.add(stopIndex);
 document.querySelectorAll('[data-stop]').forEach(b=>{b.classList.toggle('selected',Number(b.dataset.stop)===stopIndex);b.classList.toggle('visited',state.visited.has(Number(b.dataset.stop)));});
 $('visited-count').textContent=`${state.visited.size} / ${stops.length}`;
 updateOutline();
 document.querySelectorAll('[data-part]').forEach(b=>b.classList.toggle('selected',Number(b.dataset.part)===mesh.userData.index));
}

function closeSelection(){
 state.selected=null;state.hover=null;document.body.classList.remove('part-selected');$('detail').hidden=true;$('selection-pin').hidden=true;document.querySelectorAll('[data-stop]').forEach(b=>b.classList.remove('selected'));updateOutline();
}
$('detail-close').onclick=closeSelection;
function updateOutline(){if(outline)outline.selectedObjects=state.selected?[state.selected]:state.hover?[state.hover]:[];}

function anglesTo(position,target){const dir=new THREE.Vector3(...target).sub(position).normalize();return {yaw:Math.atan2(-dir.x,-dir.z),pitch:Math.asin(THREE.MathUtils.clamp(dir.y,-1,1))};}
function shortestAngle(from,to){return from+Math.atan2(Math.sin(to-from),Math.cos(to-from));}
function travelTo(pos,target){
 stopMovement();const end=new THREE.Vector3(...pos).clamp(minBounds,maxBounds);const angles=anglesTo(end,target);
 if(reducedMotion.matches){camera.position.copy(end);state.yaw=state.targetYaw=angles.yaw;state.pitch=state.targetPitch=angles.pitch;state.travel=null;return;}
 state.travel={start:camera.position.clone(),end,startYaw:state.yaw,endYaw:shortestAngle(state.yaw,angles.yaw),startPitch:state.pitch,endPitch:angles.pitch,t:0,duration:1.15};
}
$('focus-button').onclick=()=>{if(!state.selected)return;const m=state.selected;const stop=stops.find(s=>s.name===m.userData.sourceName);if(stop)travelTo(stop.pos,stop.target);else {const c=m.userData.center.clone();let p=c.clone();p.x=THREE.MathUtils.clamp(c.x-.65,-2.9,2.9);p.y=THREE.MathUtils.clamp(c.y*.15,-.15,.2);p.z=0;travelTo(p.toArray(),c.toArray());}};
function home(){closeSelection();$('inventory').hidden=true;travelTo(initialPosition.toArray(),[3.1,.03,0]);toast('Reset view to module entrance.');}
$('home-button').onclick=home;
$('quality-button').onclick=()=>{state.quality=state.quality==='high'?'balanced':'high';$('quality-label').textContent=state.quality==='high'?'High':'Balanced';resize();toast(state.quality==='high'?'High Fidelity (PBR + GTAO)':'Balanced (Low GPU overhead)');};

const moveCodes={KeyW:'forward',ArrowUp:'forward',KeyS:'back',ArrowDown:'back',KeyA:'left',ArrowLeft:'left',KeyD:'right',ArrowRight:'right',KeyQ:'down',KeyE:'up'};
window.addEventListener('keydown',e=>{
 if(!state.entered||modalOpen())return;
 if(e.code==='Escape'){closeSelection();$('inventory').hidden=true;stopMovement();state.travel=null;renderer?.domElement.focus({preventScroll:true});return;}
 if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName))return;
 if(moveCodes[e.code]){e.preventDefault();keys.add(moveCodes[e.code]);state.travel=null;}
 if(e.code==='KeyR'&&!e.repeat)home();
});
window.addEventListener('keyup',e=>{if(moveCodes[e.code])keys.delete(moveCodes[e.code]);});
window.addEventListener('blur',stopMovement);document.addEventListener('visibilitychange',()=>{stopMovement();lastFrame=performance.now();});
document.querySelectorAll('[data-move]').forEach(b=>{
 b.addEventListener('pointerdown',e=>{e.preventDefault();state.travel=null;held.add(b.dataset.move);b.classList.add('pressed');b.setPointerCapture(e.pointerId);});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,()=>{held.delete(b.dataset.move);b.classList.remove('pressed');});
 b.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();held.add(b.dataset.move);state.travel=null;}});b.addEventListener('keyup',()=>held.delete(b.dataset.move));b.addEventListener('blur',()=>held.delete(b.dataset.move));
});

function setupPointer(){
 const canvas=renderer.domElement;let drag=null;let lastPointer={x:0,y:0};
 canvas.addEventListener('pointerdown',e=>{if(!state.entered||modalOpen()||drag||e.button!==0)return;canvas.focus({preventScroll:true});state.travel=null;drag={id:e.pointerId,x:e.clientX,y:e.clientY,moved:0};canvas.setPointerCapture(e.pointerId);$('hover-label').hidden=true;});
 canvas.addEventListener('pointermove',e=>{lastPointer={x:e.clientX,y:e.clientY};if(!state.entered)return;if(drag&&drag.id===e.pointerId){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.moved+=Math.abs(dx)+Math.abs(dy);state.targetYaw-=dx*.0032;state.targetPitch=THREE.MathUtils.clamp(state.targetPitch-dy*.0032,-1.38,1.38);drag.x=e.clientX;drag.y=e.clientY;state.hover=null;updateOutline();}else if(performance.now()-hoverTime>70&&!touch){hoverTime=performance.now();pick(e.clientX,e.clientY,false);}});
 canvas.addEventListener('pointerup',e=>{if(drag?.id!==e.pointerId)return;const moved=drag.moved;drag=null;if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(moved<6)pick(e.clientX,e.clientY,true);});
 canvas.addEventListener('pointercancel',()=>{drag=null;});canvas.addEventListener('lostpointercapture',()=>{drag=null;});
 canvas.addEventListener('pointerleave',()=>{if(!drag){state.hover=null;$('hover-label').hidden=true;updateOutline();}});
 canvas.addEventListener('contextmenu',e=>e.preventDefault());
 function pick(x,y,click){
  if(modalOpen()||!state.ready)return;const rect=canvas.getBoundingClientRect();pointer.set((x-rect.left)/rect.width*2-1,-(y-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(meshes,false)[0];
  if(hit){if(click){select(hit.object.userData.part);hoverPoint.copy(hit.point);}else{state.hover=hit.object.userData.part;$('hover-text').textContent=hit.object.userData.part.userData.description.title;$('hover-label').hidden=false;$('hover-label').style.left=`${Math.min(x+17,window.innerWidth-270)}px`;$('hover-label').style.top=`${Math.min(y+20,window.innerHeight-160)}px`;}}else{state.hover=null;$('hover-label').hidden=true;if(click)closeSelection();}updateOutline();
 }
}

function canMove(from,delta){
 if(delta.lengthSq()<1e-9)return true;
 const direction=delta.clone().normalize();const perpendicular=new THREE.Vector3().crossVectors(direction,Math.abs(direction.y)<.9?new THREE.Vector3(0,1,0):new THREE.Vector3(1,0,0)).normalize().multiplyScalar(.09);
 const perpendicular2=new THREE.Vector3().crossVectors(direction,perpendicular).normalize().multiplyScalar(.09);
 moveRay.far=delta.length()+.14;
 for(const offset of [new THREE.Vector3(),perpendicular,perpendicular.clone().negate(),perpendicular2,perpendicular2.clone().negate()]){moveRay.set(from.clone().add(offset),direction);if(moveRay.intersectObjects(meshes,false).length)return false;}
 return true;
}
function updateMotion(dt){
 if(!state.entered||modalOpen())return;
 if(state.travel){const t=state.travel;t.t+=dt;const a=Math.min(t.t/t.duration,1);const ease=a*a*(3-2*a);camera.position.lerpVectors(t.start,t.end,ease);state.yaw=state.targetYaw=THREE.MathUtils.lerp(t.startYaw,t.endYaw,ease);state.pitch=state.targetPitch=THREE.MathUtils.lerp(t.startPitch,t.endPitch,ease);if(a===1)state.travel=null;}
 else{
  state.yaw=THREE.MathUtils.damp(state.yaw,state.targetYaw,22,dt);state.pitch=THREE.MathUtils.damp(state.pitch,state.targetPitch,22,dt);
  const pressed=(k)=>keys.has(k)||held.has(k);let f=Number(pressed('forward'))-Number(pressed('back')),s=Number(pressed('right'))-Number(pressed('left')),v=Number(pressed('up'))-Number(pressed('down'));
  desired.set(-Math.sin(state.yaw)*f+Math.cos(state.yaw)*s,v,-Math.cos(state.yaw)*f-Math.sin(state.yaw)*s);if(desired.lengthSq()>1)desired.normalize();desired.multiplyScalar(.85);
  velocity.lerp(desired,1-Math.exp(-dt*12));
  const delta=velocity.clone().multiplyScalar(dt);
  for(const axis of ['x','y','z']){const step=new THREE.Vector3();step[axis]=delta[axis];if(canMove(camera.position,step))camera.position.add(step);else velocity[axis]=0;}
  camera.position.clamp(minBounds,maxBounds);
 }
 camera.rotation.set(state.pitch,state.yaw,0,'YXZ');
 $('map-marker').style.left=`${THREE.MathUtils.clamp((camera.position.x+3.15)/6.3*100,3,97)}%`;
 $('map-marker').firstElementChild.style.transform=`rotate(${(-state.yaw-Math.PI/2)*180/Math.PI}deg)`;
 $('position-label').textContent=camera.position.x<-1.5?'Aft Section':camera.position.x>1.5?'Forward Section':'Center Aisle';
 for(const b of document.querySelectorAll('[data-move]'))b.classList.toggle('pressed',pressedKey(b.dataset.move));
}
function pressedKey(k){return keys.has(k)||held.has(k);}
function resize(){if(!renderer||!composer)return;if(ao)ao.enabled=state.quality==='high'&&!fire?.active;const {width:w,height:h}=$('viewport').getBoundingClientRect();const dpr=Math.min(devicePixelRatio,state.quality==='high'?1.65:1);renderer.setPixelRatio(dpr);renderer.setSize(w,h);composer.setPixelRatio(dpr);composer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}
window.addEventListener('resize',resize);
new ResizeObserver(resize).observe($('viewport'));

function frame(now){requestAnimationFrame(frame);const elapsed=(now-lastFrame)/1000;const dt=Math.min(elapsed,.045);lastFrame=now;if(document.hidden||!state.ready||currentView!=='lab3d')return;updateMotion(dt);
 if(state.selected&&state.entered){const p=state.selected.userData.center.clone().project(camera);const rect=$('viewport').getBoundingClientRect();const visible=p.z>-1&&p.z<1&&Math.abs(p.x)<1&&Math.abs(p.y)<1;$('selection-pin').hidden=!visible;if(visible){$('selection-pin').style.left=`${rect.left+(p.x*.5+.5)*rect.width}px`;$('selection-pin').style.top=`${rect.top+(-p.y*.5+.5)*rect.height}px`;}}
 fire?.update(elapsed,camera);composer.render();
}

async function init(){
 try{
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.88;renderer.setClearColor(0x1a2933);
  renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Interactive 3D viewport');$('viewport').append(renderer.domElement);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();stopMovement();showError('WebGL context lost. Reload to resume.');});
  scene=new THREE.Scene();scene.background=new THREE.Color(0x13222e);camera=new THREE.PerspectiveCamera(68,innerWidth/innerHeight,.02,45);camera.position.copy(initialPosition);camera.rotation.set(0,-Math.PI/2,0,'YXZ');
  const pmrem=new THREE.PMREMGenerator(renderer);const room=new RoomEnvironment();scene.environment=pmrem.fromScene(room,.04).texture;scene.environmentIntensity=.48;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xf2f8ff,0x8698a5,.55));scene.add(new THREE.AmbientLight(0xffffff,.12));
  for(const x of [-2.7,-1.35,0,1.35,2.7]){const light=new THREE.PointLight(0xf6f6ec,1.5,4,1.5);light.position.set(x,.72,0);scene.add(light);}
  const fill=new THREE.PointLight(0xdceeff,.7,5,1);fill.position.set(-2.8,0,0);scene.add(fill);
  composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));ao=new GTAOPass(scene,camera,innerWidth,innerHeight,undefined,{radius:.16,thickness:.35,distanceExponent:1});ao.blendIntensity=.55;composer.addPass(ao);outline=new OutlinePass(new THREE.Vector2(innerWidth,innerHeight),scene,camera);outline.edgeStrength=3;outline.edgeGlow=.1;outline.edgeThickness=1;outline.visibleEdgeColor.set('#efbc64');outline.hiddenEdgeColor.set('#665235');outline.pulsePeriod=0;composer.addPass(outline);composer.addPass(new OutputPass());resize();
  const metaResponse=await fetch('./assets/us-lab-metadata.json');if(!metaResponse.ok)throw new Error('Could not load metadata');metadata=await metaResponse.json();
  const assetResponse=await fetch('./assets/us-lab.asset.json');if(!assetResponse.ok)throw Error('Could not load asset manifest');const asset=await assetResponse.json();
  const loaded=asset.parts.map(()=>0);
  const chunks=await Promise.all(asset.parts.map(async(part,index)=>{
   const response=await fetch('./assets/'+part.file);if(!response.ok)throw Error('Model chunk missing');
   const reader=response.body.getReader();const blocks=[];while(true){const {value,done}=await reader.read();if(done)break;blocks.push(value);loaded[index]+=value.byteLength;const percent=Math.round(loaded.reduce((a,b)=>a+b,0)/asset.bytes*93);$('load-progress').style.width=`${percent}%`;$('load-status').textContent=`Loading US Lab Geometry · ${percent}%`;}
   if(loaded[index]!==part.bytes)throw Error('Model chunk size mismatch');const bytes=new Uint8Array(loaded[index]);let offset=0;for(const b of blocks){bytes.set(b,offset);offset+=b.byteLength;}return bytes;
  }));
  const modelBytes=new Uint8Array(asset.bytes);let offset=0;for(const chunk of chunks){modelBytes.set(chunk,offset);offset+=chunk.byteLength;}
  const gltf=await new GLTFLoader().parseAsync(modelBytes.buffer,'./assets/');

  const descriptions=new Map(metadata.items.map(i=>[i.name,i]));
  gltf.scene.updateMatrixWorld(true);
  gltf.scene.traverse(part=>{
   const name=part.userData.source_name;if(!name||!descriptions.has(name))return;
   const meta=descriptions.get(name);part.userData.sourceName=name;part.userData.description=describe(name);part.userData.index=parts.length;part.userData.center=new THREE.Vector3(...meta.center);
   parts.push(part);byName.set(name,part);
   part.traverse(o=>{if(!o.isMesh)return;o.userData.part=part;meshes.push(o);o.frustumCulled=true;
    const materials=Array.isArray(o.material)?o.material:[o.material];for(const mat of materials){
     if(/USLab_Racks_0[13]/i.test(mat.name)){mat.transparent=false;mat.alphaTest=.5;mat.depthWrite=true;mat.opacity=1;mat.needsUpdate=true;}
     if(/Patches1/i.test(mat.name)){mat.transparent=false;mat.alphaTest=0;mat.depthWrite=true;mat.opacity=1;mat.needsUpdate=true;}
     if(mat.map)mat.map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());if(mat.emissive)mat.emissiveIntensity=Math.min(mat.emissiveIntensity,/Lights/i.test(name)?1.05:.55);}
   });
  });
  scene.add(gltf.scene);scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);
  if(meshes.length<10)throw new Error('Model meshes failed to initialize');
  $('part-count').textContent=String(parts.length);makeStops();setupPointer();$('load-progress').style.width='100%';$('load-status').textContent='Initializing flight telemetry';
  
  fire=createFireExperience({
    scene,
    enter,
    travelTo,
    stopMovement,
    openResearch:focus=>{switchView('research');research.open(focus);},
    hidePanels:()=>{closeSelection();setRoute(false);$('inventory').hidden=true;},
    onMode:active=>{document.body.classList.toggle('fire-mode',active);ao.enabled=!active&&state.quality==='high';}
  });

  await renderer.compileAsync(scene,camera);composer.render();
  state.ready=true;
  $('loading').hidden=true;
  requestAnimationFrame(frame);

  if(pendingReplay){
    fire.openRecord(pendingReplay);
    pendingReplay=null;
  }
 }catch(error){
   console.error('US Lab initialization error:',error);
   showError(error.message?.includes('WebGL')?'WebGL failed to initialize. Try modern hardware-accelerated browser.':'Unable to load 3D assets.');
 }
}

function showError(message){$('loading').hidden=false;$('loading').querySelector('h1').textContent='Laboratory Offline';$('load-status').textContent=message;$('retry-button').hidden=false;$('retry-button').style.marginTop='25px';}

let pendingReplay=null;

// View Switching & Single Unified Navigation
let currentView = 'story';
let activeModuleInstance = null;
let research = null;

function switchView(viewName) {
 currentView = viewName;
 document.body.classList.toggle('module-active', viewName !== 'lab3d');

 if (activeModuleInstance?.destroy) {
  activeModuleInstance.destroy();
  activeModuleInstance = null;
 }

 const navMap = {
  story: $('story-nav-btn'),
  'flame-lab': $('flame-lab-nav-btn'),
  safety: $('safety-nav-btn'),
  spinoff: $('spinoff-nav-btn'),
  lab3d: $('lab-button'),
  research: $('research-button')
 };

 Object.entries(navMap).forEach(([k, btn]) => {
  if (btn) {
   const isSel = k === viewName;
   btn.setAttribute('aria-pressed', String(isSel));
   btn.classList.toggle('active', isSel);
  }
 });

 const moduleEl = $('active-module-view');

 if (viewName === 'lab3d') {
  if (moduleEl) moduleEl.hidden = true;
  resize();
  if (state.ready) {
   enter();
   fire?.openRecord(); // Automatically launch 3D fire simulation!
  }
  return;
 }

 if (moduleEl) {
   moduleEl.hidden = false;
   moduleEl.innerHTML = '';
 }
 $('route').hidden = true;
 $('inventory').hidden = true;
 $('detail').hidden = true;
 $('welcome').hidden = true;
 fire?.pause();
 stopMovement();

 if (viewName === 'story') {
  activeModuleInstance = createVisualStory(moduleEl, {
   onOpenLab: () => switchView('flame-lab'),
   onOpenData: id => { switchView('research'); research?.open(); },
   onOpenStudy: id => { switchView('research'); research?.open(id); }
  });
 } else if (viewName === 'flame-lab') {
  activeModuleInstance = createFlameLab(moduleEl, {
   onOpenData: id => { switchView('research'); research?.open(); },
   onOpenStudy: id => { switchView('research'); research?.open(id); }
  });
 } else if (viewName === 'safety') {
  activeModuleInstance = createSafetyAnalyst(moduleEl, {
   onOpenData: id => { switchView('research'); research?.open(); },
   onOpenStudy: id => { switchView('research'); research?.open(id); }
  });
 } else if (viewName === 'spinoff') {
  activeModuleInstance = createEarthSpinOffs(moduleEl, {
   onOpenData: id => { switchView('research'); research?.open(); }
  });
 } else if (viewName === 'research') {
  // Render Mission & Data cleanly inline!
  research = createResearchWorkspace({
    container: moduleEl,
    onExplore: () => switchView('lab3d'),
    onReplay: record => {
      switchView('lab3d');
      if (state.ready) fire.openRecord(record);
      else pendingReplay = record;
    },
    onOpen: () => { stopMovement(); fire?.pause(); }
  });
  research.open();
 }
}

$('story-nav-btn')?.addEventListener('click', () => switchView('story'));
$('flame-lab-nav-btn')?.addEventListener('click', () => switchView('flame-lab'));
$('safety-nav-btn')?.addEventListener('click', () => switchView('safety'));
$('spinoff-nav-btn')?.addEventListener('click', () => switchView('spinoff'));
$('lab-button')?.addEventListener('click', () => switchView('lab3d'));
$('research-button')?.addEventListener('click', () => switchView('research'));
$('welcome-research')?.addEventListener('click', () => switchView('research'));

$('pitch-button')?.addEventListener('click', () => {
 createPresentationMode({
  onClose: () => {},
  onSwitchTab: tab => switchView(tab)
 });
});

document.addEventListener('keydown', e => {
 if ((e.key === 'p' || e.key === 'P') && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
  if (!document.body.classList.contains('pitch-active')) {
   createPresentationMode({
    onClose: () => {},
    onSwitchTab: tab => switchView(tab)
   });
  }
 }
});

// Launch directly into Cinematic Visual Story, while 3D US Lab loads in background
switchView('story');
init();
