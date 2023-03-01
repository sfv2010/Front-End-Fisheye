import { lightboxMedia } from "../factories/lightboxFactory.js";

export function viewLightbox() {
    const lightboxModal = document.getElementById("lightboxModal");
    const allImages = document.querySelectorAll(".viewIn");
    const main = document.getElementById("main");
    const closeLightboxModalButton = document.querySelector(".closeLightbox");
    const mediaNext = document.querySelector(".chevronNext");
    const mediaBack = document.querySelector(".chevronBack");
    let currentId;

    const arrayAllImages = Array.from(allImages);
    const figure = document.querySelector("figure");
    const zoomLightbox = document.querySelector(".viewInLightbox");
    const figcaption = document.querySelector("figcaption");

    function displayLightboxModal(e) {
        // console.log(arrayAllImages);

        lightboxModal.style.display = "block";
        main.ariaHidden = "true";
        lightboxModal.ariaHidden = "false";

        const media = e.target;

        currentId = media.id;
        lightboxMedia(currentId);

        // console.log(currentId);

        //zoomLightbox.setAttribute("src", e.target.getAttribute("id"));
    }

    function showNext(e) {
        // const arrayAllImages = Array.from(allImages);
        const zoomLightbox = document.querySelector(".viewInLightbox");
        const figcaption = document.querySelector("figcaption");

        let currentIndex = arrayAllImages.findIndex(
            (current) => current.id === currentId
        );
        // e.preventDefault;

        // console.log(zoomLightbox);
        // for (let i=0; i<=arrayAllImages.length;i++)
        if (currentIndex < arrayAllImages.length - 1) {
            const nextIndex = arrayAllImages[currentIndex + 1].id;
            currentIndex++;
            console.log(currentIndex);
            lightboxMedia(nextIndex);
            zoomLightbox.remove();
            figcaption.remove();
        } else {
            const nextIndex = arrayAllImages[0].id;
            currentIndex = 0;
            lightboxMedia(nextIndex);
            console.log(currentIndex);
            zoomLightbox.remove();
            figcaption.remove();
        }

        // zoomLightbox.remove();
        // figcaption.remove();
    }

    // console.log(currentIndex);

    mediaNext.addEventListener("click", showNext);

    mediaBack.addEventListener("click", showBack);
    function showBack() {}
    function closeLightboxModal() {
        const zoomLightbox = document.querySelector(".viewInLightbox");
        const figcaption = document.querySelector("figcaption");

        lightboxModal.style.display = "none";
        main.ariaHidden = "false";
        lightboxModal.ariaHidden = "true";
        zoomLightbox.remove();
        figcaption.remove();
    }

    allImages.forEach((elem) => {
        elem.addEventListener("click", displayLightboxModal);
    });

    closeLightboxModalButton.addEventListener("click", closeLightboxModal);
}

// import { lightboxMedia } from "../factories/lightboxFactory.js";

// export function viewLightbox() {
//     const lightboxModal = document.getElementById("lightboxModal");
//     const allImages = document.querySelectorAll(".viewIn");
//     const main = document.getElementById("main");
//     const closeLightboxModalButton = document.querySelector(".closeLightbox");
//     const figure = document.querySelector("figure");
//     const zoomLightbox = document.querySelector(".viewInLightbox");
//     const figcaption = document.querySelector("figcaption");
//     const mediaNext = document.querySelector(".chevronNext");
//     const mediaBack = document.querySelector(".chevronBack");
//     let currentId = 0;
//     const arrayAllImages = Array.from(allImages);

//     function displayLightboxModal(e) {
//         // console.log(arrayAllImages);

//         lightboxModal.style.display = "block";
//         main.ariaHidden = "true";
//         lightboxModal.ariaHidden = "false";

//         const media = e.target;

//         currentId = media.id;
//         lightboxMedia(currentId);

//         // console.log(currentId);

//         function showNext(e) {
//             const currentIndex = arrayAllImages.findIndex(
//                 (current) => current.id === currentId
//             );
//             e.preventDefault;
//             let count = currentIndex;
//             const zoomLightbox = document.querySelector(".viewInLightbox");
//             const figcaption = document.querySelector("figcaption");
//             // console.log(zoomLightbox);

//             if (count < arrayAllImages.length - 1) {
//                 const nextIndex = arrayAllImages[count + 1].id;
//                 count++;
//                 console.log(count);
//                 lightboxMedia(nextIndex);
//                 zoomLightbox.remove();
//                 figcaption.remove();
//             } else {
//                 const nextIndex = arrayAllImages[0].id;
//                 count = 0;
//                 lightboxMedia(nextIndex);
//                 console.log(count);
//                 zoomLightbox.remove();
//                 figcaption.remove();
//             }

//             // zoomLightbox.remove();
//             // figcaption.remove();
//         }

//         // console.log(currentIndex);

//         mediaNext.addEventListener("click", showNext);

//         mediaBack.addEventListener("click", showBack);
//         function showBack() {}

//         //zoomLightbox.setAttribute("src", e.target.getAttribute("id"));
//     }
//     function closeLightboxModal() {
//         const zoomLightbox = document.querySelector(".viewInLightbox");
//         const figcaption = document.querySelector("figcaption");

//         lightboxModal.style.display = "none";
//         main.ariaHidden = "false";
//         lightboxModal.ariaHidden = "true";
//         zoomLightbox.remove();
//         figcaption.remove();
//     }

//     allImages.forEach((elem) => {
//         elem.addEventListener("click", displayLightboxModal);
//     });

//     closeLightboxModalButton.addEventListener("click", closeLightboxModal);
// }
