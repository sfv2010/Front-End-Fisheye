window.onload = function () {
    const likeIt = document.querySelectorAll(".divLike");
    const totalLikes = document.querySelector(".totalLikes");

    const numberOfLike = document.querySelectorAll(".numberOfLike");
    console.log(numberOfLike);

    //Display the total of likes in small footer
    let totalNumberLikes = 0;
    numberOfLike.forEach((like) => {
        totalNumberLikes += Number(like.textContent);
        console.log(totalNumberLikes);
        totalLikes.textContent = totalNumberLikes;
    });
    // && && liked.classList.contain("clicked")
    likeIt.forEach((liked) => {
        window.addEventListener("load", () => {});

        liked.addEventListener("click", () => {
            let clickTimes = 0;
            const timesOfLike = liked.firstElementChild;
            if (timesOfLike.classList.contains("clicked")) {
                clickTimes++;
                totalLikes.textContent--;
                timesOfLike.classList.remove("clicked");
                numberOfLike.textContent--;
            } else {
                totalLikes.textContent++;
                timesOfLike.classList.add("clicked");
                numberOfLike.textContent++;
            }
            console.log(clickTimes);
            // clickTimes ? clickTimes-- : clickTimes++;
            console.log(totalLikes.textContent);
        });
    });
};
