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


//CERTIFICATES SLIDER
const renderCertificates = async () => {
  const url = "../certificates.json";
  const res = await fetch(url);
  const allCertificates = await res.json();


  const renderModal = (index) => {
    const modalDOM = document.querySelector(".modal-certificates");
    const counterDOM = document.getElementById("counter");
    const closeDOM = document.getElementById("close-button");
    const imageDOM = document.getElementById("modal-img");
    const descriptionDOM = document.getElementById("modal-description");
    const prevDOM = document.getElementById("prev-button");
    const nextDOM = document.getElementById("next-button");

    let counter = index + 1;

    const checkArrowsStyle = () => {
      switch(true) {
        case index === 0 :
          prevDOM.classList.add("disabled");
          nextDOM.classList.remove("disabled");
          break;
        case index === allCertificates.length - 1 :
          prevDOM.classList.remove("disabled");
          nextDOM.classList.add("disabled");
          break;
        default :
        prevDOM.classList.remove("disabled");
        nextDOM.classList.remove("disabled");
      }
    }
    checkArrowsStyle();
    
    counterDOM.innerHTML = `${counter} / ${allCertificates.length}`;

    imageDOM.src = allCertificates[index].url;
    descriptionDOM.innerHTML = allCertificates[index].description;

    prevDOM.addEventListener("click", () => {
      if (index > 0) {
        counterDOM.innerHTML = "";
        imageDOM.src = "";
        descriptionDOM.innerHTML = "";

        index--;
        counter--;

        checkArrowsStyle();

        counterDOM.innerHTML = `${counter} / ${allCertificates.length}`;
        imageDOM.src = allCertificates[index].url;
        descriptionDOM.innerHTML = allCertificates[index].description;
        
        flkty.previous();
      }
    })

    nextDOM.addEventListener("click", () => {
      if (index >= 0 && index < allCertificates.length - 1) {
        counterDOM.innerHTML = "";
        imageDOM.src = "";
        descriptionDOM.innerHTML = ""; 
        index++;
        counter++;
        
        checkArrowsStyle();

        counterDOM.innerHTML = `${counter} / ${allCertificates.length}`;
        imageDOM.src = allCertificates[index].url;
        descriptionDOM.innerHTML = allCertificates[index].description;

        flkty.next();
      }
    })

    closeDOM.addEventListener("click", () => {
      prevDOM.replaceWith(prevDOM.cloneNode(true));
      nextDOM.replaceWith(nextDOM.cloneNode(true));
      closeDOM.replaceWith(closeDOM.cloneNode(true));

      index = null;
      counter = null;
      modalDOM.classList.remove("modal-certificates--open")
      setTimeout(() => {
        imageDOM.src = "";
        descriptionDOM.innerHTML = "";            
      }, 300)
    })

    modalDOM.classList.add("modal-certificates--open");
  }


  const sliderDOM = document.querySelector(".certificates__slider");    

  allCertificates.forEach(item => {
    const slideDOM = document.createElement("div");
    const slideFrontLayerDOM = document.createElement("div");
    const certificateDOM = document.createElement("img");

    slideDOM.classList.add("certificates__slider-slide", "onhover-light");
    slideDOM.addEventListener("click", () => {
      renderModal(allCertificates.indexOf(item));
    });


    slideFrontLayerDOM.classList.add("front-layer")
    certificateDOM.src = item.url_mini;

    slideDOM.appendChild(slideFrontLayerDOM);
    slideDOM.appendChild(certificateDOM);

    sliderDOM.appendChild(slideDOM);

  });



  const flkty = new Flickity( ".certificates__slider", {
    pageDots: false,
    autoPlay: true
  });
}
renderCertificates();


