const images = [
    { src: "https://www.thesprucepets.com/thmb/MzKr6fC-v8W4D4oz2p9wWCwAFms=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg", caption: "Maine Coon" },
    { src: "https://medipet-shop.de/thumbnail/35/91/93/1674567844/britsich%20kurzhaar_1920x1920.jpg", caption: "Britische Kurzhaarkatze" },
    { src: "https://www.haustierratgeber.de/wp-content/uploads/2016/02/Siam.png", caption: "Siamkatze" },
    { src: "https://i.pinimg.com/originals/5a/e4/d7/5ae4d7330d1145d8924a587b74bd0cf3.jpg", caption: "Europäische Kurzhaarkatze" },
    { src: "https://www.bubblypet.com/wp-content/uploads/2022/07/White-Persian-cat-walking-on-green-grass.jpg", caption: "Perserkatze" }
];

let index = 0;

function updateSlider() {
    document.getElementById("slider-img").src = images[index].src;
    document.getElementById("slider-caption").textContent = images[index].caption;
}

function nextImage() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

