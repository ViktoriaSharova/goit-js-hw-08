// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML('beforeend', markup);

function createMarkup (arr) {
    return arr.map(({ preview, original, description }) => {
        return `<li data-preview='${preview}' class="gallery__item js-gallery-item">
                  <a class="gallery__link" href='${original}'>
                    <img class="gallery__image"
                     src='${preview}'
                    alt='${description}'>
                  </a>
                </li>`
    }).join('');
}


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
});

console.log(galleryItems);
