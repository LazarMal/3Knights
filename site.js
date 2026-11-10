(()=>{
'use strict';
const root=document.documentElement;
const direction=root.dataset.direction||'forest';
const desert=direction==='desert';
const neutral=direction==='neutral';
const themes={
 desert:{
  name:'DESERT / COBALT',dir:'Architectural Energy',
  hero:'assets/portal-clay.webp',heroPosition:'50% 52%',
  heading:['SPACE','IN MOTION.'],eyebrow:'The architecture of possibility.',
  intro:'Where form meets freedom.',second:['THE','OTHER','SIDE.'],
  statement:'We make room for what matters.',
  statementBody:'A precise structure can change the way an entire space feels. It can shape the light, connect inside and outside, and make everyday movement effortless.',
  label:'COLOUR STUDY / 02',
  craft:'assets/terracotta-rhythm.webp',
  gallery:[
   ['assets/sandstone-facade.webp','Sunlit stone architecture and striking shadows','01 / Light and structure','large'],
   ['assets/terracotta-rhythm.webp','Repetitive terracotta architecture','02 / Rhythm and detail','tall'],
   ['assets/desert-shading.webp','Warm terracotta facade with architectural louvers and blue sky, illustrative visualization','03 / Shade and geometry','wide'],
   ['assets/desert-slat-macro.webp','Warm afternoon light filtering through horizontal slats, illustrative visualization','04 / The angle of light','tall'],
   ['assets/desert-blue-installation.webp','Cobalt-blue architectural installation with orange sculptural elements and translucent screens, visual reference','05 / Form through colour','large'],
   ['assets/desert-venetian-light.webp','Venetian blinds shaping dramatic light over a warm architectural interior, visual reference','06 / A geometry of light','tall'],
   ['assets/desert-terracotta-sky.webp','Terracotta architecture against a deep-blue sky, visual reference','07 / Material and sky','wide'],
  ],
  systemShade:'assets/desert-shading.webp',
  systemInsect:'assets/desert-screen-interior.webp',
  caption:'Light can change the character of a surface.',
  finishMap:{forest:['Deep forest','#123e31'],clay:['Burnt clay','#ba6d48'],cobalt:['Cobalt','#245fb0'],coral:['Signal coral','#f57f79']},
  finishKeys:['forest','clay','cobalt','coral'],
 },
 forest:{
  name:'FOREST / CORAL',dir:'Studio Expression',
  hero:'assets/forest-living.webp',heroPosition:'60% 50%',
  heading:['FORM','FOLLOWS','FEELING.'],eyebrow:'A different perspective on the everyday.',
  intro:'There is more beyond the frame.',second:['LOOK','BEYOND','THE FRAME.'],
  statement:'Built to move. Made to belong.',
  statementBody:'The smallest movements have the greatest impact. A filter of daylight. An opening to the outside. A system that feels as considered as the room around it.',
  label:'COLOUR STUDY / 01',
  craft:'assets/forest-shadows.webp',
  gallery:[
   ['assets/forest-shadows.webp','Forest-green interior and filtered daylight through venetian blinds, illustrative visualization','01 / Light as material','large'],
   ['assets/forest-warm-interior.webp','Warm, tactile interior with adjustable shading and woodland beyond, illustrative visualization','02 / Architecture at rest','tall'],
   ['assets/neutral-blinds.webp','Architectural interior showing venetian blind geometry','03 / The shaded interior','wide'],
   ['assets/desert-slat-macro.webp','Architectural slats photographed in warm light, illustrative visualization','04 / Made of detail','tall'],
   ['assets/forest-lounge.webp','Emerald-green lounge with coral upholstery and an architectural window, visual reference','05 / Forest after dark','large'],
   ['assets/forest-coral-arch.webp','Sculptural teal interior with coral passage and natural skylight, visual reference','06 / Sculpted space','wide'],
  ],
  systemShade:'assets/forest-shadows.webp',
  systemInsect:'assets/forest-warm-interior.webp',
  caption:'An opening is never just an opening.',
  finishMap:{forest:['Deep forest','#123e31'],clay:['Burnt clay','#ba6d48'],cobalt:['Cobalt','#245fb0'],coral:['Signal coral','#f57f79']},
  finishKeys:['forest','clay','cobalt','coral'],
 },
 neutral:{
  name:'NEUTRAL / STUDIO',dir:'Quiet Precision',
  hero:'assets/neutral-arch.webp',heroPosition:'50% 42%',
  heading:['SHAPE','THE LIGHT.'],eyebrow:'A calmer architectural point of view.',
  intro:'A more neutral studio perspective.',second:['FORM.','FUNCTION.','FEEL.'],
  statement:'Quiet on the surface. Precise in every detail.',
  statementBody:'From daylight to privacy, from the smallest connection to the widest opening. We work with details that quietly shape everyday spaces.',
  label:'COLOUR STUDY / 03',
  craft:'assets/neutral-detail.webp',
  gallery:[
   ['assets/neutral-portal.webp','Sculptural sunlit architectural opening','01 / The opening','large'],
   ['assets/neutral-exterior.webp','Quiet stone home in an evening landscape','02 / Architecture at rest','wide'],
   ['assets/neutral-roller-screen.webp','Bright studio interior with roller shade and pleated insect screen, illustrative visualization','03 / The light filter','tall'],
   ['assets/neutral-interior.webp','Bright modern lounge overlooking an outdoor courtyard','04 / A room to breathe','wide'],
   ['assets/neutral-courtyard.webp','Rhythmic terracotta facade against the sky','05 / Built in rhythm','tall'],
   ['assets/neutral-sunroom.webp','Soft morning light across an open living space','06 / Light in motion','wide'],
   ['assets/neutral-courtyard-screen.webp','Sunlit architectural living room and framed exterior, illustrative visualization','07 / Inside meets outside','large'],
  ],
  systemShade:'assets/neutral-roller-screen.webp',
  systemInsect:'assets/neutral-courtyard-screen.webp',
  caption:'Small movements change the character of a room.',
  finishMap:{ivory:['Studio ivory','#ece7dd'],sand:['Stone beige','#c9b69a'],sage:['Soft sage','#99a38b'],blue:['Muted blue','#5d82b4']},
  finishKeys:['ivory','sand','sage','blue'],
 }
};
const theme=themes[direction]||themes.forest;
const studio='https://serene-tulumba-eb6ada.netlify.app/#/';
const eMail='office@s-assembly.com';
const app=document.getElementById('app');
const galleryHtml=theme.gallery.map(([src,alt,cap,size])=>`<figure class="gallery-frame ${size}"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`).join('');
const optionsHtml=theme.finishKeys.map((key,i)=>{const [label,color]=theme.finishMap[key];return `<button type="button" class="colour-option" data-finish="${key}" aria-pressed="${i===0}"><span style="background:${color}"></span>${label}</button>`}).join('');
const currentFinish = theme.finishMap[theme.finishKeys[0]];
app.innerHTML=`
<a class="skip-link" href="#story">Skip cinematic introduction</a>
<div class="reveal-curtain" aria-hidden="true"><div></div><div></div></div>
<header class="topbar" id="topbar">
  <a class="wordmark" href="#top" aria-label="S.A.C. home"><span>S<span class="worddot">.</span>A<span class="worddot">.</span>C<span class="worddot">.</span></span><small>ASSEMBLY</small></a>
  <nav class="navlinks" aria-label="Main navigation"><a href="#story">Our approach</a><a href="#systems">What we do</a><a href="materials.html?direction=${direction}">Materials</a><a href="#company">Company</a><a href="#contact">Contact</a><a class="navstudio" href="${studio}" target="_blank" rel="noopener noreferrer">Product Studio <span aria-hidden="true">↗</span></a></nav>
  <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
</header>
<nav class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" hidden><a href="#story">Our approach</a><a href="#systems">What we do</a><a href="materials.html?direction=${direction}">Materials</a><a href="#company">Company</a><a href="#contact">Contact</a><a href="${studio}" target="_blank" rel="noopener noreferrer">Product Studio ↗</a></nav>
<main id="top">
<section class="hero-track" aria-label="Cinematic introduction" id="intro">
 <div class="hero-sticky">
   <div class="ambient-shape" aria-hidden="true"></div>
   <div class="hero-photo-window" aria-hidden="true"><img class="hero-photo" src="${theme.hero}" alt="" fetchpriority="high" style="object-position:${theme.heroPosition}"><div class="photowash"></div></div>
   <div class="hero-frame" aria-hidden="true"></div>
   <div class="hero-content"><div class="hero-kicker">S.A.C. Assembly Company <span>—</span> Zrenjanin, Serbia</div>
     <h1>${theme.heading.map(w=>`<span>${w}</span>`).join('')}</h1>
     <div class="hero-bottom"><p>Window coverings.<br>Insect protection.<br>Made with intent.</p><a href="#story">Explore the story <span aria-hidden="true">↓</span></a></div>
   </div>
   <div class="hero-side-note" aria-hidden="true">DESIGNED AROUND WHAT MATTERS</div>
   <div class="hero-progress" aria-hidden="true"><span></span></div>
   <div class="transition-plate" aria-hidden="true"><div class="transition-inner"><strong>${theme.second.map(w=>`<span>${w}</span>`).join('')}</strong><p>Form. Light. Movement.</p></div></div>
 </div>
</section>
<section id="story" class="statement-section" aria-labelledby="statement-title">
 <div class="section-contents statement-contents"><div class="statement-mark">S.A.C.</div>
  <div class="statement-body"><h2 id="statement-title">${theme.statement}</h2><p>${theme.statementBody}</p></div>
  <div class="statement-bottom"><span>Manufacturing with a different point of view.</span><a href="#craft">See our approach <span aria-hidden="true">↘</span></a></div>
 </div>
</section>
<section class="craft-section" id="craft" aria-label="The way we think">
 <div class="craft-copy" data-reveal><span class="chapter-number">01 / THE THINKING</span><h2>The detail<br>is the <em>difference.</em></h2><p>Good systems are felt in the everyday: the way they move, the way they fit, the way they quietly become part of the architecture.</p></div>
 <div class="craft-visual" data-parallax><img src="${theme.craft}" alt="Architectural opening and sculptural geometry, used as an art-direction study" loading="lazy"><span class="image-annotation">${theme.caption}</span></div>
 <div class="craft-bottom"><span>Thoughtful details. Purposeful solutions.</span><span class="craft-rule">— S.A.C. Assembly</span></div>
</section>
<section class="gallery-track" aria-label="Architectural visual story">
 <div class="gallery-sticky">
   <div class="gallery-head"><span class="chapter-number">02 / A STUDY IN SPACE</span><h2>New ways<br>to see.</h2><p>We think about the relationship between the inside, the outside and everything in between.</p></div>
   <div class="gallery-rail" id="gallery-rail">${galleryHtml}</div>
 </div>
</section>
<section class="systems-section" id="systems">
 <div class="systems-lead"><span class="chapter-number">03 / WHAT WE MAKE</span><h2>Systems that<br><em>make space.</em></h2><p>S.A.C. Assembly specialises in made-to-measure window decoration and insect screen systems, with a focus on partner and private-label production.</p></div>
 <div class="systems-split">
  <article class="system-item shade-item" data-reveal>
   <div class="system-image"><img src="${theme.systemShade}" alt="Architecture and daylight in a contemporary interior" loading="lazy"/><div class="system-image-scrim"></div><strong>01</strong></div>
   <div class="system-label"><h3>Window<br>coverings.</h3><p>Systems for shaping daylight, privacy and the character of a room.</p></div>
  </article>
  <article class="system-item insect-item" data-reveal>
   <div class="system-image"><img src="${theme.systemInsect}" alt="A sculptural architectural opening framing outdoor space" loading="lazy"/><div class="system-image-scrim"></div><strong>02</strong></div>
   <div class="system-label"><h3>Insect<br>screens.</h3><p>Made-to-measure protection designed to connect rooms and outdoor living.</p></div>
  </article>
 </div>
 <div class="systems-cta"><p>Explore products, configurations and 3D models in our dedicated studio.</p><a class="text-cta" href="${studio}" target="_blank" rel="noopener noreferrer">Enter Product Studio <span aria-hidden="true">↗</span></a></div>
</section>
<section class="palette-section" id="materials">
 <div class="palette-intro"><span class="chapter-number">04 / MATERIAL & COLOUR</span><h2>There is no<br>ordinary <em>surface.</em></h2><p>Colour is never separate from light, texture or space. Explore a selection of visual directions below.</p></div>
 <div class="material-lab">
  <div class="material-preview" id="material-preview" style="--material:${currentFinish[1]}"><div class="material-blind" aria-hidden="true"><div class="blind-header"></div>${Array.from({length:11},(_,i)=>`<span class="blind-slat" style="--i:${i}"></span>`).join('')}<div class="blind-footer"></div></div><div class="material-glow"></div><div class="material-preview-label"><strong id="material-name">${currentFinish[0]}</strong><span>Interactive colour study — illustrative, not a product specification</span></div></div>
  <div class="material-controls"><p>Move through colour.</p><div class="colour-options" role="group" aria-label="Choose illustrative material finish">${optionsHtml}</div><a href="mailto:${eMail}?subject=S.A.C.%20material%20and%20finish%20information">Ask for material information <span aria-hidden="true">↗</span></a></div>
 </div>
 <a class="library-invitation" href="materials.html?direction=${direction}" aria-label="Open the interactive Material Library">
  <span class="library-invitation-copy"><span class="chapter-number">A NEW CHAPTER / MATERIAL LIBRARY</span><strong>Take a closer<br>look.</strong><span>Explore fabric, frame finishes and mesh through a tactile interactive collection.</span><span class="library-enter">Open the material book <b aria-hidden="true">↗</b></span></span>
  <span class="library-invitation-visual" aria-hidden="true"><span class="library-cover"><span>S.A.C.</span><span>MATERIAL<br>STUDIES</span><span>001—003</span></span><span class="library-open-page"><i></i><i></i><i></i><i></i></span></span>
 </a>
</section>
<section class="company-section" id="company">
 <div class="company-main"><span class="chapter-number">05 / OUR COMPANY</span><h2>Made in<br><em>Zrenjanin.</em><br>Looking outward.</h2><p>S.A.C. Assembly Company is a manufacturing business in Serbia focused on custom window decoration and insect screen solutions for European trade partners.</p><p class="company-detail">In 2025, production of original Metaco pleated screen doors began at S.A.C. in Serbia in cooperation with KeJe.</p><a href="https://www.keje.nl/en/inspiration-and-advice/keje-commences-production-of-original-insect-screen-doors-in-serbia" target="_blank" rel="noopener noreferrer">Read the KeJe production announcement <span aria-hidden="true">↗</span></a></div>
 <div class="company-stamp" aria-hidden="true"><span>MADE TO</span><strong>FIT.</strong><span>MADE TO MOVE.</span></div>
</section>
<section class="contact-section" id="contact">
 <div class="contact-top"><span class="chapter-number">06 / GET IN TOUCH</span><span>Zrenjanin, Serbia · European partnerships</span></div>
 <h2>Let's make<br>something <em>work.</em></h2>
 <div class="contact-action"><p>For partnerships, production enquiries, materials and further information.</p><a class="contact-email" href="mailto:${eMail}">${eMail} <span aria-hidden="true">↗</span></a></div>
 <a class="studio-final" href="${studio}" target="_blank" rel="noopener noreferrer"><span>Looking for the collection?</span><strong>Enter Product Studio</strong><span class="studio-arrow" aria-hidden="true">↗</span></a>
 <footer><span>S.A.C. Assembly Company © <span id="year"></span></span><span>Custom-made window covering and insect screen systems</span><a href="compare.html">Compare creative directions ↗</a></footer>
</section>
</main>
<nav class="floating-island" id="floating-island" aria-label="Quick navigation"><a href="#top" class="island-link island-home" aria-label="Home" data-section="#top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11.2 12 3l9 8.2V21H6v-9.5"/><path d="M9 21v-7h6v7"/></svg><span class="island-tooltip">Home</span></a><a href="#story" class="island-link island-story" aria-label="Approach" data-section="#story"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg><span class="island-tooltip">Approach</span></a><a href="#systems" class="island-link island-systems" aria-label="Systems" data-section="#systems"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="m4 6.5 8 4.5 8-4.5M12 11v9"/></svg><span class="island-tooltip">Systems</span></a><a href="materials.html?direction=${direction}" class="island-link island-book" aria-label="Materials" data-section="#materials"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6c-2.2-1.6-5-2-9-1v14c4-1 6.8-.6 9 1 2.2-1.6 5-2 9-1V5c-4-1-6.8-.6-9 1z"/><path d="M12 6v14"/></svg><span class="island-tooltip">Materials</span></a><a href="#company" class="island-link island-company" aria-label="Company" data-section="#company"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h2m4 0h1M9 11h2m4 0h1M9 15h2m4 0h1M10 21v-3h4v3"/></svg><span class="island-tooltip">Company</span></a><a href="#contact" class="island-link island-contact" aria-label="Contact" data-section="#contact"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/></svg><span class="island-tooltip">Contact</span></a><a href="${studio}" class="island-link island-studio" aria-label="Product Studio" data-section="" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 18H4v3h16v-3h-2M8 12l4-4 4 4M12 8v10M6 4h12"/></svg><span class="island-tooltip">Product Studio</span></a></nav>
<div class="variant-dock" id="variant-dock"><a class="study-home" href="compare.html" aria-label="Back to all creative studies">← Creative study</a><a href="forest.html" ${direction==='forest'?'aria-current="page"':''}>01 / Forest</a><a href="desert.html" ${direction==='desert'?'aria-current="page"':''}>02 / Desert</a><a href="neutral.html" ${direction==='neutral'?'aria-current="page"':''}>03 / Neutral</a></div>
`;
const scrollable=Array.from(document.querySelectorAll('a[href^="#"]'));
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
scrollable.forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href');const target=document.querySelector(id);if(!target)return;
 e.preventDefault();document.getElementById('mobile-menu').hidden=true;document.querySelector('.menu-toggle').setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');target.scrollIntoView({behavior:reduced?'auto':'smooth'});
}));
const menuButton=document.querySelector('.menu-toggle');
menuButton.addEventListener('click',()=>{
 const menu=document.getElementById('mobile-menu'); const open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open);
});
document.querySelectorAll('.colour-option').forEach(b=>b.addEventListener('click',()=>{
 const f=theme.finishMap[b.dataset.finish];document.querySelectorAll('.colour-option').forEach(c=>c.setAttribute('aria-pressed',String(c===b)));
 document.getElementById('material-preview').style.setProperty('--material',f[1]);document.getElementById('material-name').textContent=f[0];
}));
document.querySelector('#year').textContent=new Date().getFullYear();
const hero=document.querySelector('.hero-track'), windowEl=document.querySelector('.hero-photo-window'),frame=document.querySelector('.hero-frame'),photo=document.querySelector('.hero-photo'),plate=document.querySelector('.transition-plate'),plateInner=document.querySelector('.transition-inner'),heroContent=document.querySelector('.hero-content'),nav=document.querySelector('.topbar');
const gallery=document.querySelector('.gallery-track'),rail=document.querySelector('.gallery-rail');
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));const smooth=t=>{t=clamp(t);return t*t*(3-2*t)};
let rafPending=false;
function update(){rafPending=false;
 const sy=window.scrollY,h=window.innerHeight;
 const start=hero.getBoundingClientRect().top+sy;const end=Math.max(1,hero.offsetHeight-h);
 const p=clamp((sy-start)/end);
 const expand=smooth(clamp(p/.53)); const reveal=smooth(clamp((p-.60)/.38));
 const top=desert?12:(neutral?10:13),right=desert?10:(neutral?16:7),bottom=desert?14:(neutral?12:13),left=desert?49:(neutral?54:48);
 const t=top*(1-expand),r=right*(1-expand),b=bottom*(1-expand),l=left*(1-expand);
 windowEl.style.clipPath=`inset(${t}% ${r}% ${b}% ${l}%)`;
 frame.style.top=t+'%';frame.style.right=r+'%';frame.style.bottom=b+'%';frame.style.left=l+'%';frame.style.opacity=(1-expand).toFixed(3);
 const cam=1+0.18*smooth(clamp((p-.12)/.65));photo.dataset.scrollCam=String(cam);
 heroContent.style.opacity=String(1-smooth(clamp((p-.07)/.40)));
 heroContent.style.transform=`translate3d(0,${-p*70}px,0)`;
 plate.style.clipPath=`inset(${(1-reveal)*100}% 0 0 0)`;
 plateInner.style.transform=`translate3d(0,${(1-reveal)*17}vh,0)`;
 plateInner.style.opacity=String(smooth(clamp((p-.72)/.24)));
 document.querySelector('.hero-progress span').style.transform=`scaleX(${p})`;
 const st=document.querySelector('.statement-section').offsetTop;
 const cr=document.querySelector('.craft-section').offsetTop;
 const ga=document.querySelector('.gallery-track').offsetTop;
 const co=document.querySelector('.company-section').offsetTop;
 nav.classList.toggle('over-light', (p>.76 && sy<cr) || (sy>=st && sy<cr) || (sy>=ga && sy<co));
 const activeTargets=['top','story','systems','materials','company','contact'];
 let activeId='top';for(const id of activeTargets){const el=document.getElementById(id);if(el && sy+h*.45>=el.getBoundingClientRect().top+sy)activeId=id;}
 document.querySelectorAll('.floating-island .island-link[data-section]').forEach(a=>a.classList.toggle('is-active',a.dataset.section==='#'+activeId));
 const gstart=gallery.getBoundingClientRect().top+sy,grange=Math.max(1,gallery.offsetHeight-h);
 const gp=clamp((sy-gstart)/grange);
 // The gallery rail starts inset from the viewport's left edge. Account for
 // that inset and a small right margin so the final image can enter fully.
 const additionalTravel=rail.offsetLeft+window.innerWidth*.045;
 const maxRail=Math.max(0,rail.scrollWidth-rail.parentElement.clientWidth+additionalTravel);
 // Let the final image rest in view before the section unpins.
 const travelProgress=clamp(gp/.90);
 rail.style.transform=`translate3d(${-travelProgress*maxRail}px,0,0)`;
 document.querySelectorAll('[data-parallax]').forEach(el=>{const y=el.getBoundingClientRect().top+h/2;const v=clamp((h-y)/h,-1,1);const img=el.querySelector('img');img.style.transform=`translate3d(0,${v*16}px,0) scale(1.045)`;});
}
let startMs=performance.now();function breathe(now){
 const stageRect=hero.getBoundingClientRect();if(stageRect.bottom>=0 && stageRect.top<=innerHeight){
 let cam=Number(photo.dataset.scrollCam||1);let phase=now-startMs;
 const breathing=reduced?0:Math.sin(phase/3200)*0.009;
 photo.style.transform=`scale(${cam+breathing}) translate3d(${Math.sin(phase/5200)*.16}%,${Math.cos(phase/4800)*.16}%,0)`;
 }
 requestAnimationFrame(breathe);
}
const observer=new IntersectionObserver(entries=>{entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in-view');observer.unobserve(en.target);}})},{threshold:.18});
document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
function schedule(){if(!rafPending){rafPending=true;requestAnimationFrame(update);}}
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
update();requestAnimationFrame(breathe);
})();
