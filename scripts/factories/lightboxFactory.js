import { getPhotographers } from "../utils/service.js";
export async function lightboxMedia(mediaId) {
    const { media } = await getPhotographers();
    const selectedMedia = await media.find((media) => media.id == mediaId);
    let currentId = mediaId;
    const { title, photographerId, image, video, id } = selectedMedia;
    const figure = document.querySelector(".figure");
    const lightbox = document.querySelector(".lightbox");
    let mediaUrl;
    if (video) {
        mediaUrl = `assets/images/${photographerId}/${video} `;
    } else {
        mediaUrl = `assets/images/${photographerId}/${image}`;
    }
    if (video) {
        const videoMedia = document.createElement("video");
        videoMedia.src = mediaUrl;
        videoMedia.title = title;
        videoMedia.controls = "cotrols";
        videoMedia.textContent = "Sorry, can't play video";
        videoMedia.classList.add("viewInLightbox");
        videoMedia.id = id;
        videoMedia.tabIndex = "0";
        figure.appendChild(videoMedia);
    } else if (image) {
        const imageMedia = document.createElement("img");
        imageMedia.src = mediaUrl;
        imageMedia.alt = title;
        imageMedia.classList.add("viewInLightbox");
        imageMedia.id = id;
        imageMedia.tabIndex = "0";
        figure.appendChild(imageMedia);
    }
    // Create figcaption
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("figcaption");
    figcaption.innerText = title;
    figcaption.tabIndex = "0";
    figure.appendChild(figcaption);

    lightbox.focus();
}

// export function lightboxFactory(data) {
//     //Object destructuring assignment. Extract multiple properties from object
//     const { id, title, video, image } = data;
//     console.log(data);

//     //Function that returns the photographer DOM element
//     function getLightboxCardDOM() {
//         //create div
//         const lightbox = document.createElement("div");
//         lightbox.classList.add("lightbox");
//         lightbox.tabIndex = "0";

//         //create button
//         const buttonClose = document.createElement("button");
//         buttonClose.classList.add("closeLightbox");
//         buttonClose.classList.add("fa-solid");
//         buttonClose.classList.add("fa-xmark");
//         buttonClose.tabndex = "0";
//         buttonClose.ariaLabel = "Close dialog";
//         // Create div
//         const divBack = document.createElement("div");
//         divBack.classList.add("chevronBack");
//         divBack.classList.add("fa-sharp");
//         divBack.classList.add("fa-solid");
//         divBack.classList.add("fa-chevron-left");
//         divBack.tabIndex = "0";

//         // Create div
//         const divNext = document.createElement("div");
//         divNext.classList.add("chevronNext");
//         divNext.classList.add("fa-sharp");
//         divNext.classList.add("fa-solid");
//         divNext.classList.add("fa-chevron-right");
//         divNext.tabIndex = "0";

//         // Create figure
//         const figure = document.createElement("figure");
//         figure.classList.add("figure");

//         // Create figcaption
//         const figcaption = document.createElement("figcaption");
//         figcaption.classList.add("figcaption");
//         figcaption.innerText = title;
//         figcaption.tabIndex = "0";

//         // let mediaUrl;
//         // if (video) {
//         //     mediaUrl = `assets/images/${photographerId}/${video} `;
//         // } else {
//         //     mediaUrl = `assets/images/${photographerId}/${image}`;
//         // }
//         // Create video ou image
//         if (video) {
//             const videoMedia = document.createElement("video");
//             videoMedia.src = "";
//             videoMedia.title = title;
//             videoMedia.controls = "cotrols";
//             videoMedia.textContent = "Sorry, can't play video";
//             videoMedia.classList.add("viewInLightbox");
//             videoMedia.id = id;
//             divMedia.appendChild(videoMedia);
//         } else if (image) {
//             const imageMedia = document.createElement("img");
//             imageMedia.src = "";
//             imageMedia.alt = title;
//             imageMedia.title = title;
//             imageMedia.dataCaption = "title";
//             imageMedia.classList.add("viewInLightbox");
//             imageMedia.id = id;
//             figure.appendChild(imageMedia);
//         }

//         lightbox.appendChild(buttonClose);
//         lightbox.appendChild(divBack);
//         lightbox.appendChild(figure);
//         figure.appendChild(figcaption);
//         lightbox.appendChild(divNext);

//         return lightbox;
//     }
//     return { getLightboxCardDOM };
// }
