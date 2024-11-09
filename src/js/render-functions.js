import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { CSS_STYLES, GALLERY_LEGEND_ITEM_LABELS, HITS_ITEM } from '../constants.js';

const gallery = document.querySelector('.gallery');
let lightbox = null;

let galleryItems = (items) => {
  return items.map(item => {
    return `<li class=${CSS_STYLES.GALLERY_ITEM}>
        <a class=${CSS_STYLES.GALLERY_LINK} href="${item[HITS_ITEM.LARGE_IMAGE_URL]}">
          <img
            class=${CSS_STYLES.GALLERY_IMAGE}
            src="${item[HITS_ITEM.PREVIEW_URL]}"
            alt="${item[HITS_ITEM.TAGS]}"
          />
          <span class=${CSS_STYLES.GALLERY_LEGEND}>
                <div class=${CSS_STYLES.GALLERY_LEGEND_ITEM}>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_LABEL}>${GALLERY_LEGEND_ITEM_LABELS.LIKES}</p>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_VALUE}>${item[HITS_ITEM.LIKES]}</p>
                </div>
                <div class=${CSS_STYLES.GALLERY_LEGEND_ITEM}>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_LABEL}>${GALLERY_LEGEND_ITEM_LABELS.VIEWS}</p>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_VALUE}>${item[HITS_ITEM.VIEWS]}</p>
               </div>
                <div class=${CSS_STYLES.GALLERY_LEGEND_ITEM}>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_LABEL}>${GALLERY_LEGEND_ITEM_LABELS.COMMENTS}</p>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_VALUE}>${item[HITS_ITEM.COMMENTS]}</p>
               </div>
                <div class=${CSS_STYLES.GALLERY_LEGEND_ITEM}>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_LABEL}>${GALLERY_LEGEND_ITEM_LABELS.DOWNLOADS}</p>
                  <p class=${CSS_STYLES.GALLERY_LEGEND_ITEM_VALUE}>${item[HITS_ITEM.DOWNLOADS]}</p>
               </div>
            </span>
          </a>
        </li>
      `;

  }).join('');
};

// noinspection JSValidateTypes
lightbox = new SimpleLightbox('.gallery a', {
  captions: true, captionDelay: 250, captionPosition: 'bottom', captionsData: 'alt',
});


export function fillGalleryWithImages(images) {
  gallery.insertAdjacentHTML('beforeend', galleryItems(images));
  refreshLightbox();
}

export function refreshLightbox() {
  lightbox.refresh();
}