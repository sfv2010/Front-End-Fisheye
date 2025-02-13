export function timesLiked() {
    const likeIt = document.querySelectorAll(".divLike");
    const totalLikes = document.querySelector(".totalLikes");
    const numberOfLike = document.querySelectorAll(".numberOfLike");

    //Display the total of likes in small footer
    let totalNumberLikes = 0;
    numberOfLike.forEach((like) => {
        totalNumberLikes += Number(like.textContent);
        totalLikes.textContent = totalNumberLikes;
    });
    likeIt.forEach((liked) => {
        liked.addEventListener("click", () => {
            const timesOfLike = liked.firstElementChild;
            if (timesOfLike.classList.contains("clicked")) {
                totalLikes.textContent--;
                timesOfLike.classList.remove("clicked");
                timesOfLike.textContent--;
            } else {
                totalLikes.textContent++;
                timesOfLike.classList.add("clicked");
                timesOfLike.textContent++;
            }
        });
    });
}
