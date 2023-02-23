//Factory Function that creates a photographer introduction
export function mediaFactory(data) {
    //Object destructuring assignment. Extract multiple properties from object
    const { id, photographerId, title, image, video, likes, date, price } =
        data;

    //Function that returns the photographer DOM element
    function getMediaCardDOM() {
        // Create div
        const divMedia = document.createElement("div");
        divMedia.classList.add("divMedia");
        divMedia.tabIndex = "0";

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
        spanMedia.classList.add("numberOfLike");
        spanMedia.textContent = likes;
        spanMedia.ariaLabel = "number of likes";

        //Create icon
        const iconLike = document.createElement("i");
        iconLike.classList.add("fa-solid");
        iconLike.classList.add("fa-heart");
        iconLike.ariaLabel = "heart icon";

        //Image et video
        let mediaUrl;
        if (video) {
            mediaUrl = `assets/images/${photographerId}/${video} `;
        } else {
            mediaUrl = `assets/images/${photographerId}/${image}`;
        }
        if (video) {
            // Create video
            const videoMedia = document.createElement("video");
            videoMedia.src = mediaUrl;
            videoMedia.alt = title;
            videoMedia.controls = "cotrols";
            videoMedia.textContent = "Sorry, can't play video";
            videoMedia.classList.add("viewIn");
            videoMedia.id = id;
            divMedia.appendChild(videoMedia);
        } else {
            // Create image
            const imgMedia = document.createElement("img");
            imgMedia.src = mediaUrl;
            imgMedia.alt = title;
            imgMedia.classList.add("viewIn");
            imgMedia.id = id;
            divMedia.appendChild(imgMedia);
        }

        divMedia.appendChild(divTitleLike);
        divTitleLike.appendChild(h3Media);
        divTitleLike.appendChild(divLike);

        divLike.appendChild(spanMedia);
        divLike.appendChild(iconLike);

        //small footer
        document.querySelector(".totalLikes").textContent = likes;
        //lightbox

        return divMedia;
    }
    return { getMediaCardDOM };
}

// //Event for select
// const dropMenu = document.getElementById("dropDownMenu");
// const spanArrow = document.querySelector(".arrowSpan");
// dropMenu.addEventListener("click", () => {
//     dropMenu.size = "3";
//     dropMenu.classList.add("showMenu");
//     spanArrow.classList.add("arrowDropMenu");
//     dropMenu.classList.remove("dropDownMenuArrow");
// });

// spanArrow.addEventListener("click", () => {
//     dropMenu.size = "0";
//     dropMenu.classList.remove("showMenu");
//     spanArrow.classList.remove("arrowDropMenu");
//     dropMenu.classList.add("dropDownMenuArrow");
// });
