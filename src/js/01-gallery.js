import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let item of galleryItems) {

    const link = document.createElement("a");
    link.classList.add("gallery__item");
    link.href = item.original;
    gallery.append(link);

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = item.preview;
    image.alt = item.description;
    link.append(image);
    
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
};

let lightbox = new SimpleLightbox('.gallery a', { gallery });
lightbox.options.captionsData = "alt";
lightbox.options.captionDelay = 250;

console.log(lightbox);
console.log(gallery);
