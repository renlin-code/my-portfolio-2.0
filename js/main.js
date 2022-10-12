const initFlickity = () => {
    const flkty = new Flickity( ".certificates__slider", {
      pageDots: false,
      autoPlay: true
    });
}
document.addEventListener("DOMContentLoaded", initFlickity);
