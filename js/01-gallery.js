import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = document.querySelector('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);

imageGallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return ` 
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>
        `;
    }).join('');
};

const onImageGalleryClick = (event) => {

    event.preventDefault();
    const imageSource = event.target.dataset.source;
    if (!imageSource) return;

    const instance = basicLightbox.create(
        `<img src="${imageSource}" width="800" height="600">`, {
            onShow: () => {
                window.addEventListener("keydown", onEscButtonClose)
            },
            onClose: () => {
                window.removeEventListener("keydown", onEscButtonClose)
            },
        });

    function onEscButtonClose(event) {
        if (event.code === 'Escape') {
        instance.close();
        };
    };

    instance.show()
};

imageGallery.addEventListener('click', onImageGalleryClick);