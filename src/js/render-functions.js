import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');
const LIKES_TITLE = 'Likes';
const VIEWS_TITLE = 'Views';
const COMMENTS_TITLE = 'Comments';
const DOWNLOADS_TITLE = 'Downloads';
let lightbox = null;

gallery.classList.add('gallery');

let galleryItems =
  (items) =>
    items.map(item => {
      return `
      <li class="gallery-item">
        <a class="gallery-link" href="${item['largeImageURL']}">
          <img
            class="gallery-image"
            src="${item['previewURL']}"
            alt="${item['tags']}"
          />
          <span class="gallery-legend">
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${LIKES_TITLE}</p>
                <p class="gallery-legend-item-value">${item[LIKES_TITLE.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${VIEWS_TITLE}</p>
                <p class="gallery-legend-item-value">${item[VIEWS_TITLE.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${COMMENTS_TITLE}</p>
                <p class="gallery-legend-item-value">${item[COMMENTS_TITLE.toLocaleLowerCase()]}</p>
             </div>
             <div class="gallery-legend-item">
                <p class="gallery-legend-item-label">${DOWNLOADS_TITLE}</p>
                <p class="gallery-legend-item-value">${item[DOWNLOADS_TITLE.toLocaleLowerCase()]}</p>
             </div>
          </span>
        </a>
      </li>
    `;
    }).join('');

export function fillGalleryWithImages(images) {
  gallery.insertAdjacentHTML('beforeend', galleryItems(images));
  refreshLightbox();
}

  // noinspection JSValidateTypes
  lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionPosition: 'bottom',
    captionsData: 'alt'
  });

export function refreshLightbox() {
  lightbox.refresh();
}