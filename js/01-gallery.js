import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const marcup = galleryItems
    .map((e) => 
    `<li class="gallery__item">
     <a class="gallery__link" href="${e.original}">
    <img
      class="gallery__image"
      src="${e.preview}"
      data-source="${e.original}"
      alt="${e.description}"
    />
  </a>
</li>`

)
    .join("");

galleryList.innerHTML = marcup;


function openOriginal(event) {
       if (event.target === event.currentTarget) {
        return;
    };
    const clickOr = event.target.dataset.source;
    console.log(clickOr);
    event.preventDefault();

    const instance = basicLightbox.create(`
   <img src="${clickOr}">
`)

instance.show();
};


galleryList.addEventListener('click', openOriginal);

// dataset.source

// event.preventDefault()


// if (event.target.nodeName !== "BUTTON") {
//         return;
//     }


