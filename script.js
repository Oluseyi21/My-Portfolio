document.addEventListener("DOMContentLoaded", () => {
    const homeText = document.querySelector(".home-text");
    const homeImg = document.querySelector(".home-img img");

    // Fade in text
    homeText.style.opacity = 0;
    homeText.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => { homeText.style.opacity = 1; }, 300);

    // Slide in image
    homeImg.style.transform = "translateX(100px)";
    homeImg.style.opacity = 0;
    homeImg.style.transition = "all 1s ease-in-out";
    setTimeout(() => { 
        homeImg.style.transform = "translateX(0)";
        homeImg.style.opacity = 1;
    }, 500);
});