const liveSearch = () => {
  const items = document.querySelectorAll('.list__item');
  const form = document.querySelector('.form');
  const searchEl = document.querySelector('.form__search');

  form.addEventListener('submit', handlerOfSearch);
  searchEl.addEventListener('input', handlerOfSearch);

  function handlerOfSearch(e) {
    this.nodeName === 'FORM' && e.preventDefault();

    const searchText = searchEl.value;

    if (searchText.length) {
      items.forEach(item => {
        if (item.innerText.search(searchText) !== -1) {
          item.hidden = false;
          item.dataset.lastText = item.innerText;

          const writeText = item.innerText.replace(eval(`/${searchText}/`), `<span class="active">${searchText}</span>`);

          item.innerHTML = writeText;
        } else {
          item.hidden = true;
          item.innerHTML = item.dataset.lastText ? item.dataset.lastText : item.innerText;
        }
      });
    } else {
      items.forEach(item => {
        item.hidden = false;
        item.innerHTML = item.dataset.lastText ? item.dataset.lastText : item.innerText;
      });
    }
  }
}

liveSearch();