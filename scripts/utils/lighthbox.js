import { lightboxMedia } from "../factories/lightboxFactory.js";

export function viewLightbox() {
    const lightboxModal = document.getElementById("lightboxModal");
    const allImages = document.querySelectorAll(".viewIn");
    const main = document.getElementById("main");
    const closeLightboxModalButton = document.querySelector(".closeLightbox");
    const figure = document.querySelector("figure");

    function displayLightboxModal(e) {
        const zoomLightbox = document.querySelector(".viewInLightbox");

        const figcaption = document.querySelector("figcaption");
        const arrayAllImages = Array.from(allImages);
        console.log(arrayAllImages);

        lightboxModal.style.display = "block";
        main.ariaHidden = "true";
        lightboxModal.ariaHidden = "false";

        const media = e.target;
        //  const media = e.target.cloneNode(true);
        // media.classList.remove("viewIn");
        // media.classList.add("viewInLightbox");
        // figure.insertBefore(media, figcaption);
        // console.log(figcaption);
        // // figure.removeChild(zoomLightbox);

        // figcaption.innerText = e.target.getAttribute("title");

        const currentId = media.id;
        lightboxMedia(currentId);

        // console.log(currentId);

        // const currentIndex = arrayAllImages.findIndex(
        //     (current) => current.id === currentId
        // );
        // function showNext() {
        //     if (currentIndex < arrayAllImages.length - 1) {
        //         const nextIndex =
        //             arrayAllImages[currentIndex + 1].cloneNode(true);
        //         console.log(nextIndex);
        //         // media.id = nextIndex;
        //         nextIndex.classList.remove("viewIn");
        //         nextIndex.classList.add("viewInLightbox");
        //         figure.insertBefore(nextIndex, figcaption);
        //         figure.removeChild(media);
        //     } else {
        //         const nextIndexMedia = arrayAllImages[0].cloneNode(true);
        //         nextIndexMedia.classList.remove("viewIn");
        //         nextIndexMedia.classList.add("viewInLightbox");
        //         figure.insertBefore(nextIndexMedia, figcaption);
        //         figure.removeChild(media);
        //     }
        // }

        // console.log(currentIndex);

        // const mediaNext = document.querySelector(".chevronNext");
        // const mediaBack = document.querySelector(".chevronBack");

        // mediaNext.addEventListener("click", showNext);

        // mediaBack.addEventListener("click", showBack);
        // function showBack() {}

        //zoomLightbox.setAttribute("src", e.target.getAttribute("id"));
    }
    function closeLightboxModal() {
        lightboxModal.style.display = "none";
        main.ariaHidden = "false";
        lightboxModal.ariaHidden = "true";
    }

    allImages.forEach((elem) => {
        elem.addEventListener("click", displayLightboxModal);
    });

    closeLightboxModalButton.addEventListener("click", closeLightboxModal);
}

// import { lightboxFactory } from "../factories/lightboxFactory.js";

// export function viewLightbox() {
//     const lightboxModal = document.getElementById("lightboxModal");
//     const allImages = document.querySelectorAll(".viewIn");
//     const main = document.getElementById("main");
//     const closeLightboxModalButton = document.querySelector(".closeLightbox");

//     function displayLightboxModal(e) {
//         const zoomLightbox = document.querySelector(".viewInLightbox");
//         const figure = document.querySelector("figure");
//         const figcaption = document.querySelector("figcaption");
//         const arrayAllImages = Array.from(allImages);
//         console.log(arrayAllImages);

//         lightboxModal.style.display = "block";
//         main.ariaHidden = "true";
//         lightboxModal.ariaHidden = "false";

//         // const media = e.target.cloneNode(true);
//         // media.classList.remove("viewIn");
//         // media.classList.add("viewInLightbox");
//         // figure.insertBefore(media, zoomLightbox);
//         // figure.removeChild(zoomLightbox);
//         // figcaption.innerText = e.target.getAttribute("title");

//         // const currentId = media.id;
//         // console.log(currentId);

//         // const currentIndex = arrayAllImages.findIndex(
//         //     (current) => current.id === currentId
//         // );
//         // function showNext() {
//         //     if (currentIndex < arrayAllImages.length - 1) {
//         //         const nextIndex =
//         //             arrayAllImages[currentIndex + 1].cloneNode(true);
//         //         console.log(nextIndex);
//         //         // media.id = nextIndex;
//         //         nextIndex.classList.remove("viewIn");
//         //         nextIndex.classList.add("viewInLightbox");
//         //         figure.insertBefore(nextIndex, media);
//         //         figure.removeChild(media);
//         //     }
//         // }

//         // console.log(currentIndex);

//         // const mediaNext = document.querySelector(".chevronNext");
//         // const mediaBack = document.querySelector(".chevronBack");

//         // mediaNext.addEventListener("click", showNext);

//         // mediaBack.addEventListener("click", showBack);
//         // function showBack() {}
//         const media = e.target.cloneNode(true);
//         console.log(media);
//         const targetId = media.id;
//         console.log(targetId);

//         const targetLightbox = arrayAllImages.find(
//             (target) => target.id == targetId
//         );
//         console.log(targetLightbox);
//         lightboxFactory(targetLightbox);
//         // zoomLightbox.setAttribute("src", e.target.getAttribute("src"));
//     }
//     function closeLightboxModal() {
//         lightboxModal.style.display = "none";
//         main.ariaHidden = "false";
//         lightboxModal.ariaHidden = "true";
//     }

//     allImages.forEach((elem) => {
//         elem.addEventListener("click", displayLightboxModal);
//     });

//     closeLightboxModalButton.addEventListener("click", closeLightboxModal);
// }
