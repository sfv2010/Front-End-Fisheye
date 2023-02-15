//Factory Function that creates a photographer introduction
function mediaFactory(data) {
    //Object destructuring assignment. Extract multiple properties from object
    const { id, photographerId, title, image, video, likes, date, price } =
        data;

    const picture = `assets/images/${photographerId}/${image}`;
    const videos = `assets/images/${photographerId}/${video} `;
    //Function that returns the photographer DOM element
    function getMediaCardDOM() {
        // Create div
        const divMedia = document.createElement("div");
        divMedia.classList.add("divMedia");
        divMedia.tabIndex = "0";

        // Create image
        const imgMedia = document.createElement("img");
        imgMedia.src = picture;
        imgMedia.alt = title;
        // Create video
        const videoMedia = document.createElement("video");
        videoMedia.src = videos;
        videoMedia.alt = title;

        // Create div
        const divTitleLike = document.createElement("div");
        divTitleLike.classList.add("titleLike");
        divTitleLike.tabIndex = "0";
        // Create h3 for title
        const h3Media = document.createElement("h3");
        h3Media.classList.add("h3Media");
        h3Media.textContent = title;

        // Create div
        const divLike = document.createElement("div");
        divLike.classList.add("divLike");
        divLike.tabIndex = "0";
        // Create span
        const spanMedia = document.createElement("span");
        spanMedia.textContent = likes;
        //Create icon
        const iconLike = document.createElement("i");
        iconLike.classList.add("fa-solid");
        iconLike.classList.add("fa-heart");

        divMedia.appendChild(imgMedia);
        // divMedia.appendChild(videoMedia);
        divMedia.appendChild(divTitleLike);
        divTitleLike.appendChild(h3Media);
        divTitleLike.appendChild(divLike);

        divLike.appendChild(spanMedia);
        divLike.appendChild(iconLike);

        return divMedia;
    }
    return { getMediaCardDOM };
}

//Event for select
const dropMenu = document.getElementById("dropDownMenu");
const spanArrow = document.querySelector(".arrowSpan");
dropMenu.addEventListener("click", () => {
    dropMenu.size = "3";
    dropMenu.classList.add("showMenu");
    spanArrow.classList.add("arrowDropMenu");
    dropMenu.classList.remove("dropDownMenuArrow");
});

spanArrow.addEventListener("click", () => {
    dropMenu.size = "0";
    dropMenu.classList.remove("showMenu");
    spanArrow.classList.remove("arrowDropMenu");
    dropMenu.classList.add("dropDownMenuArrow");
});
