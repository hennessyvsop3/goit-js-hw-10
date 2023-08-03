import getRefs from './refs';
const refs = getRefs();

export function createMarkup(data) {
  //створюємо селект
  const option = data
    .map(el => `<option value="${el.id}">${el.name}</option>`)
    .join('');
  refs.breedSelect.insertAdjacentHTML('beforeend', option);
}

export function renderCatInfo({ url, breeds }) {
  // деструктурували res
  refs.catInfo.innerHTML = ''; //скидаємо попереднього кота х__Х
  const imgUrl = `<img src="${url}" alt="" class="cat-img">`;
  const { name, description, temperament } = breeds[0];
  const descr = `
            ${imgUrl}
            <p class="breed-name">${name}</p>
            <p class="description">${description}</p>
            <p class="temperament">${temperament}</p>`;
  refs.catInfo.insertAdjacentHTML('beforeend', descr);
}
