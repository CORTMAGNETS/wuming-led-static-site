
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded', open ? 'true':'false');});}
const topBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>{if(topBtn){topBtn.classList.toggle('show', window.scrollY > 500);}});
if(topBtn){topBtn.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
const filterButtons = document.querySelectorAll('.filter-btn');
const caseCards = document.querySelectorAll('[data-case]');
filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  caseCards.forEach(card=>{card.style.display = filter === 'all' || card.dataset.case === filter ? '' : 'none';});
}));
const forms = document.querySelectorAll('[data-mail-form]');
forms.forEach(form=>form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('LED Lighting Inquiry from Website');
  const lines = [];
  data.forEach((value,key)=>lines.push(`${key}: ${value}`));
  const body = encodeURIComponent(lines.join('\n'));
  window.location.href = `mailto:sales@example.com?subject=${subject}&body=${body}`;
}));
