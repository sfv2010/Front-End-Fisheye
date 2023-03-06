export async function lightboxMedia(mediaId, medias) {
    const selectedMedia = await medias.find((media) => media.id == mediaId);
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
        figure.appendChild(videoMedia);
    } else if (image) {
        const imageMedia = document.createElement("img");
        imageMedia.src = mediaUrl;
        imageMedia.alt = title;
        imageMedia.classList.add("viewInLightbox");
        imageMedia.id = id;
        figure.appendChild(imageMedia);
    }
    // Create figcaption
    const figcaption = document.createElement("figcaption");
    figcaption.classList.add("figcaption");
    figcaption.innerText = title;
    figure.appendChild(figcaption);

    lightbox.focus();
}
