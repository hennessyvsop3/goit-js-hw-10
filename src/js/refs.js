export default function getRefs() {
  return {
    loader: document.querySelector('.loader'),
    catInfo: document.querySelector('.cat-info'),
    breedSelect: document.querySelector('#selectElement'),
    error: document.querySelector('.error'),
  };
}
