// Mobile menu
const burger=document.querySelector('.burger'),menu=document.querySelector('.menu');
burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
// Tabs
const tabs=document.querySelectorAll('.tablist button'),panels=document.querySelectorAll('.panel');
tabs.forEach(t=>t.addEventListener('click',()=>{tabs.forEach(b=>b.setAttribute('aria-selected',b===t));panels.forEach((p,i)=>p.classList.toggle('on',i==t.dataset.t))}));
// Before / After slider
const cmp=document.getElementById('cmp');
cmp.querySelector('input').addEventListener('input',e=>cmp.style.setProperty('--p',e.target.value+'%'));
// Counters
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
 const el=e.target,n=+el.dataset.n;let s=null;const step=t=>{s??=t;const p=Math.min((t-s)/1600,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3))).toLocaleString()+(p==1&&n==1400?'+':'');if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>io.observe(el));
// Demo form (WordPress: replace with Contact Form 7 / Elementor Form)
document.getElementById('form').addEventListener('submit',e=>{e.preventDefault();e.target.querySelector('.ok').hidden=false;e.target.reset()});
