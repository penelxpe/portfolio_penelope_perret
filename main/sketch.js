function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(225);


    const invasiveItem = document.querySelector(".item.invasive");
    const invasiveVideo = invasiveItem.querySelector(".hover-video");

    invasiveItem.addEventListener("pointerenter", () => {
        invasiveVideo.play().catch(() => {});
    });

    invasiveItem.addEventListener("pointerleave", () => {
        invasiveVideo.pause();
        invasiveVideo.currentTime = 0;
    });

}