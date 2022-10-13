//NAVIGATOR MENU
const burgerDOM = document.querySelector("#burger-checkbox");
const navMenuDOM = document.querySelector(".header__nav");
const bodyDOM = document.querySelector("body");



burgerDOM.addEventListener("click", () => {
  navMenuDOM.classList.toggle("header__nav--open");
  bodyDOM.classList.toggle("fixed");
})

const menuItemClick = () => {
  burgerDOM.checked = false
  navMenuDOM.classList.remove("header__nav--open");
  bodyDOM.classList.remove("fixed");
};




//CERTIFICATES
const renderCertificates = async () => {
  const url = "../certificates.json";
  const res = await fetch(url);
  const data = await res.json();

  const sliderDOM = document.querySelector(".certificates__slider");    

  data.forEach(item => {
    const slideDOM = document.createElement("div");
    const slideFrontLayerDOM = document.createElement("div");
    const certificateDOM = document.createElement("img");

    slideDOM.classList.add("certificates__slider-slide");
    slideFrontLayerDOM.classList.add("front-layer")
    certificateDOM.src = item.url_mini;

    slideDOM.appendChild(slideFrontLayerDOM);
    slideDOM.appendChild(certificateDOM);

    sliderDOM.appendChild(slideDOM);

    // certificate.addEventListener("click", () => {
    //     popupView(i);
    // })

    // certificateContainer.appendChild(certificate);
    // certificatesSlider.appendChild(certificateContainer);

    
  });
  const flkty = new Flickity( ".certificates__slider", {
    pageDots: false,
    autoPlay: true
  });
}

renderCertificates();


