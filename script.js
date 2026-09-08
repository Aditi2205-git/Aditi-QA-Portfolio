document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();t.scrollIntoView({behavior:"smooth"})}}));

// QA evidence image preview
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = () => { if (modal) { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); } };
document.querySelectorAll('.evidence-shot').forEach(card => card.addEventListener('click', () => {
  modalImage.src = card.dataset.full;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}));
if (modal) { modal.addEventListener('click', e => { if (e.target === modal || e.target.classList.contains('modal-close')) closeModal(); }); }
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
