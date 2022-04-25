import { galleryItems } from './gallery-items.js';
// Change code below this line
const imageGallery = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        `;
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { 'captionsData': 'alt', 'captionDelay': '250' });