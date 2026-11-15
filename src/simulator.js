const clamp=(value,min,max)=>Math.min(max,Math.max(min,value));

export function conceptualProfile(mode,{oxygen=21,airflow=10}={}){
 const oxygenFactor=clamp((oxygen-15)/15,0,1),flowFactor=clamp(airflow/40,0,1);
 if(mode==='earth')return {shape:'Damla biçimli ve yukarı yönlü',transport:'Kaldırma kuvveti / doğal taşınım baskın',airflowResponse:flowFactor>.55?'Akış alevi yana yatırır':'Yerçekimi yukarı yönü belirgin tutar',intensity:clamp(.38+oxygenFactor*.55,0,1),elongation:.72+oxygenFactor*.32,tilt:flowFactor*.22,diffusion:.28};
 return {shape:flowFactor>.35?'Küresel çekirdek, akış yönünde uzama':'Daha küresel ve difüz',transport:'Kaldırma zayıf; difüzyon ve zorlanmış akış belirleyici',airflowResponse:flowFactor>=.45?'Fan akışı şekli güçlü biçimde yönlendirir':'Düşük akışta belirgin bir yukarı yönü oluşmaz',intensity:clamp(.26+oxygenFactor*.45,0,1),elongation:.62+flowFactor*.65,tilt:flowFactor*.78,diffusion:.72};
}

function flamePath(ctx,width,height,lean,wave){
 ctx.beginPath();ctx.moveTo(-width*.52,0);ctx.bezierCurveTo(-width*.65,-height*.27,-width*.36,-height*.63,lean-width*.13,-height*.98+wave);ctx.bezierCurveTo(lean+width*.07,-height*1.2+wave,lean+width*.24,-height*.72,width*.43,-height*.35);ctx.bezierCurveTo(width*.58,-height*.16,width*.45,-height*.04,width*.34,0);ctx.closePath();
}

function drawChamber(ctx,w,h,state){
 const background=ctx.createRadialGradient(w*.5,h*.56,10,w*.5,h*.56,Math.max(w,h)*.65);background.addColorStop(0,'#25302e');background.addColorStop(.52,'#151d1c');background.addColorStop(1,'#0b1110');ctx.fillStyle=background;ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='rgba(184,207,190,.075)';ctx.lineWidth=1;for(let x=28;x<w;x+=44){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}for(let y=24;y<h;y+=44){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
 ctx.fillStyle='rgba(211,225,214,.55)';ctx.font='9px Inter, Segoe UI';ctx.fillText('KAVRAMSAL GÖZLEM',18,22);ctx.textAlign='right';ctx.fillText(`O₂ ${state.oxygen}%  ·  AKIŞ ${state.airflow} cm/s`,w-18,22);ctx.textAlign='left';
}

function drawBurner(ctx,x,y){
 ctx.save();ctx.translate(x,y);ctx.fillStyle='#263630';ctx.fillRect(-18,0,36,61);ctx.fillStyle='#597267';ctx.fillRect(-12,2,24,47);ctx.fillStyle='#98aa9f';ctx.fillRect(-9,3,18,3);ctx.fillStyle='#111a17';ctx.fillRect(-7,-2,14,5);ctx.restore();
}

function drawEarthFlame(ctx,x,y,size,profile,flow,time){
 const pulse=Math.sin(time*.0047),wave=Math.sin(time*.0073)*size*.035,lean=flow*size*.48+Math.sin(time*.0032)*size*.035,height=size*(1.72+profile.intensity*.32),width=size*(.64+profile.intensity*.12);
 ctx.save();ctx.translate(x,y);ctx.rotate(flow*.12);
 ctx.globalCompositeOperation='screen';ctx.filter=`blur(${Math.round(size*.22)}px)`;ctx.fillStyle=`rgba(235,89,22,${.20+profile.intensity*.12})`;flamePath(ctx,width*1.12,height*1.03,lean,wave);ctx.fill();ctx.filter='none';
 const outer=ctx.createLinearGradient(0,0,lean,-height);outer.addColorStop(0,'rgba(255,92,16,.88)');outer.addColorStop(.44,'rgba(255,137,24,.78)');outer.addColorStop(.82,'rgba(255,183,39,.5)');outer.addColorStop(1,'rgba(255,202,83,.08)');ctx.fillStyle=outer;flamePath(ctx,width,height,lean,wave);ctx.fill();
 ctx.save();ctx.translate(lean*.1,0);ctx.scale(.57,.67+.025*pulse);const inner=ctx.createLinearGradient(0,0,0,-height);inner.addColorStop(0,'rgba(111,176,255,.8)');inner.addColorStop(.12,'rgba(247,250,224,.98)');inner.addColorStop(.55,'rgba(255,218,78,.96)');inner.addColorStop(1,'rgba(255,151,26,.15)');ctx.fillStyle=inner;flamePath(ctx,width,height*.84,lean*.35,-wave);ctx.fill();ctx.restore();
 ctx.globalCompositeOperation='source-over';ctx.restore();
}

function drawMicroFlame(ctx,x,y,size,profile,flow,time){
 const radius=size*(.72+profile.intensity*.16),stretch=1+flow*.68,drift=flow*size*.45;ctx.save();ctx.translate(x,y-radius*.54);ctx.rotate(flow*.22);ctx.globalCompositeOperation='screen';
 ctx.filter=`blur(${Math.round(size*.2)}px)`;ctx.fillStyle='rgba(71,126,255,.23)';ctx.beginPath();ctx.ellipse(drift*.25,0,radius*stretch*1.22,radius*1.14,0,0,Math.PI*2);ctx.fill();ctx.filter='none';
 for(let layer=0;layer<4;layer++){const phase=time*.0016+layer*1.7,lobeX=Math.sin(phase)*radius*.06,lobeY=Math.cos(phase*1.3)*radius*.045,gradient=ctx.createRadialGradient(-radius*.13+lobeX,-radius*.1+lobeY,radius*.06,0,0,radius*(.9+layer*.055));gradient.addColorStop(0,'rgba(250,254,239,.9)');gradient.addColorStop(.19,'rgba(255,196,72,.66)');gradient.addColorStop(.48,'rgba(95,170,255,.46)');gradient.addColorStop(.76,'rgba(69,96,229,.25)');gradient.addColorStop(1,'rgba(30,66,180,0)');ctx.fillStyle=gradient;ctx.beginPath();ctx.ellipse(drift*.22+lobeX,lobeY,radius*stretch*(.93+layer*.025),radius*(.92+layer*.018),0,0,Math.PI*2);ctx.fill();}
 ctx.strokeStyle='rgba(121,180,255,.34)';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(drift*.22,0,radius*stretch,radius*.95,0,0,Math.PI*2);ctx.stroke();ctx.globalCompositeOperation='source-over';ctx.restore();
}

function drawFlow(ctx,h,flow,state){
 const length=38+flow*88,y=h-28;ctx.strokeStyle='rgba(178,207,191,.55)';ctx.fillStyle=ctx.strokeStyle;ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(18,y);ctx.lineTo(18+length,y);ctx.stroke();ctx.beginPath();ctx.moveTo(18+length,y);ctx.lineTo(11+length,y-4);ctx.lineTo(11+length,y+4);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(204,220,210,.67)';ctx.font='9px Inter, Segoe UI';ctx.fillText('ORTAK HAVA AKIŞI',18,y-9);
}

function drawFlame(canvas,mode,state,time){
 const rect=canvas.getBoundingClientRect(),scale=Math.min(devicePixelRatio||1,2),width=Math.max(1,Math.round(rect.width*scale)),height=Math.max(1,Math.round(rect.height*scale));if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
 const ctx=canvas.getContext('2d');ctx.setTransform(scale,0,0,scale,0,0);const w=rect.width,h=rect.height,profile=conceptualProfile(mode,state),flow=clamp(state.airflow/40,0,1),oxygen=clamp((state.oxygen-15)/15,0,1),size=Math.min(w,h)*(.22+oxygen*.045),x=w*.5,y=h*.78;ctx.clearRect(0,0,w,h);drawChamber(ctx,w,h,state);if(mode==='earth')drawEarthFlame(ctx,x,y,size,profile,flow,time);else drawMicroFlame(ctx,x,y,size,profile,flow,time);drawBurner(ctx,x,y);drawFlow(ctx,h,flow,state);
}

export function renderConceptualSimulator(root,{onOpenData}={}){
 let state={oxygen:21,airflow:10},frame=0,active=true;
 root.innerHTML=`<section class="sim-page"><header class="sim-head"><div><span class="rw-kicker">ALEV DAVRANIŞ LABORATUVARI</span><h1>Aynı koşul. Farklı yerçekimi.</h1><p>Oksijen ve hava akışını tek noktadan değiştir; Dünya ile mikroçekim görünümünü eşzamanlı karşılaştır.</p></div><div class="sim-warning"><strong>Kavramsal görselleştirme</strong><span>Bu araç CFD hesabı yapmaz; sıcaklık, tutuşma, yayılma hızı veya sönme sonucu üretmez.</span></div></header><section class="sim-controls" aria-label="Ortak deney koşulları"><div class="sim-controls-title"><span class="rw-kicker">ORTAK DENEY KOŞULLARI</span><p>İki gözlem penceresi de aynı girdileri kullanır.</p></div><label>Oksijen oranı <output id="sim-oxygen-value">21%</output><input id="sim-oxygen" type="range" min="15" max="30" step="1" value="21"></label><label>Hava akışı <output id="sim-airflow-value">10 cm/s</output><input id="sim-airflow" type="range" min="0" max="40" step="1" value="10"></label><div class="sim-presets"><button data-preset="ambient">Atmosfer · %21</button><button data-preset="low-flow">Düşük akış</button><button data-preset="fan-flow">Fanlı · 20 cm/s</button></div></section><div class="sim-compare"><article><div class="sim-card-head"><div><span>01 · DÜNYA</span><strong>1 g</strong></div><b>Doğal taşınım</b></div><canvas id="earth-flame" aria-label="Dünya yerçekiminde kavramsal alev görünümü"></canvas><dl id="earth-profile"></dl></article><article><div class="sim-card-head"><div><span>02 · MİKROÇEKİM</span><strong>≈ 0 g</strong></div><b>Difüzyon + zorlanmış akış</b></div><canvas id="micro-flame" aria-label="Mikroçekimde kavramsal alev görünümü"></canvas><dl id="micro-profile"></dl></article></div><section class="sim-explanation"><div><span class="rw-kicker">GÖZLEM NOTU</span><h2>Aynı girdiler, farklı taşıma mekanizması.</h2><p id="sim-explanation-text"></p></div><div class="sim-guardrails"><p><b>Oksijen:</b> Göreli parlaklık ve hacim vurgusunu değiştirir; malzemeye özgü sınır hesaplamaz.</p><p><b>Hava akışı:</b> Kavramsal yönlenmeyi değiştirir; gerçek hız veya yayılma oranı üretmez.</p><button id="sim-open-data">NASA deney tablolarına git →</button></div></section></section>`;
 const earth=root.querySelector('#earth-flame'),micro=root.querySelector('#micro-flame'),oxygen=root.querySelector('#sim-oxygen'),airflow=root.querySelector('#sim-airflow');
 const profileMarkup=profile=>`<div><dt>Biçim</dt><dd>${profile.shape}</dd></div><div><dt>Taşıma</dt><dd>${profile.transport}</dd></div><div><dt>Akış etkisi</dt><dd>${profile.airflowResponse}</dd></div>`;
 function update(){state={oxygen:Number(oxygen.value),airflow:Number(airflow.value)};root.querySelector('#sim-oxygen-value').value=`${state.oxygen}%`;root.querySelector('#sim-airflow-value').value=`${state.airflow} cm/s`;root.querySelector('#earth-profile').innerHTML=profileMarkup(conceptualProfile('earth',state));root.querySelector('#micro-profile').innerHTML=profileMarkup(conceptualProfile('microgravity',state));root.querySelector('#sim-explanation-text').textContent=state.airflow<8?'Dünya’da sıcak gaz kaldırma kuvvetiyle yükselirken mikroçekimde belirgin bir yukarı yön oluşmaz; alev daha küresel ve difüz görünür.':'Dünya’da kaldırma kuvveti yukarı yönü korur. Mikroçekimde fan akışı taşıma mekanizmasını daha güçlü biçimde yönlendirir ve küresel yapıyı akış yönünde uzatır.';}
 function animate(time){if(!active)return;drawFlame(earth,'earth',state,time);drawFlame(micro,'microgravity',state,time);frame=requestAnimationFrame(animate);}
 oxygen.oninput=update;airflow.oninput=update;root.querySelectorAll('[data-preset]').forEach(button=>button.onclick=()=>{oxygen.value=21;airflow.value=button.dataset.preset==='low-flow'?2:button.dataset.preset==='fan-flow'?20:10;update();});root.querySelector('#sim-open-data').onclick=()=>onOpenData?.('PSI-98');
 update();frame=requestAnimationFrame(animate);return ()=>{active=false;cancelAnimationFrame(frame);};
}
