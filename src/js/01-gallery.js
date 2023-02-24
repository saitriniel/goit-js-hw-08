import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.map(({preview, original, description}) => `<a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}" alt="${description}"> </a>`
).join(" ");

const lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
});