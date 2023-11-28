const inputTema = document.querySelector('[data-tema]');
const body = document.body;

function mudarTema() {
  const modo = inputTema.checked ? 'dark' : 'ligth';
  body.setAttribute('data-bs-theme', modo)
}

inputTema.addEventListener('click', mudarTema);