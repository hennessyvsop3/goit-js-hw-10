import { fetchBreeds } from './cat-api';
import { createMarkup as fillSelect, renderCatInfo } from './createMarkup';
import SlimSelect from 'slim-select';
import getRefs from './refs';

const refs = getRefs();

refs.error.style.display = 'none'; //стан по дефолту
refs.loader.style.display = 'none'; //стан по дефолту
refs.loader.textContent = '';

refs.breedSelect.addEventListener('change', breedSelectHandler);
function breedSelectHandler(event) {
  const { value } = event.target.selectedOptions[0]; //дістаємо ІД породи
  fetchBreeds('images/search', { breed_ids: value }) //дистаємо ІД імдж
    .then(res => {
      if (res.length > 0) {
        const { id } = res[0]; //ід зображення
        fetchBreeds(`images/${id}`) //апі повертає url img і опис кота
          .then(renderCatInfo);
      }
    });
}

fetchBreeds('breeds')
  .then(fillSelect)
  .then(res => {
    new SlimSelect({
      select: '#selectElement',
    });
  });
