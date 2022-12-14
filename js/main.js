"use strict"

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
  const url = "../data/certificates.json";
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

    const setArrowsDisabledStyle = () => {
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
    setArrowsDisabledStyle();
    
    counterDOM.innerText = `${counter} / ${allCertificates.length}`;

    imageDOM.src = allCertificates[index].url;
    descriptionDOM.innerText = allCertificates[index].description;

    const prev = () => {
      if (index > 0) {
        counterDOM.innerText = "";
        imageDOM.src = "";
        descriptionDOM.innerText = "";

        index--;
        counter--;

        setArrowsDisabledStyle();

        counterDOM.innerText = `${counter} / ${allCertificates.length}`;
        imageDOM.src = allCertificates[index].url;
        descriptionDOM.innerText = allCertificates[index].description;
        
        flkty.previous();
      }
    }
    prevDOM.addEventListener("click", () => prev())

    const next = () => {
      if (index >= 0 && index < allCertificates.length - 1) {
        counterDOM.innerText = "";
        imageDOM.src = "";
        descriptionDOM.innerText = ""; 
        index++;
        counter++;
        
        setArrowsDisabledStyle();

        counterDOM.innerText = `${counter} / ${allCertificates.length}`;
        imageDOM.src = allCertificates[index].url;
        descriptionDOM.innerText = allCertificates[index].description;

        flkty.next();
      }
    }
    nextDOM.addEventListener("click", () => next())


    const swipeHandler = () => {
      let touchStartX, touchEndX;

      imageDOM.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
      })

      imageDOM.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;

        if ((touchStartX - touchEndX  > 100) || (touchEndX - touchStartX  > 100)) {
          
          if(touchStartX > touchEndX) next()
          else prev();  
        }
      })
    }
    swipeHandler();


    const close = () => {
      imageDOM.replaceWith(imageDOM.cloneNode(true));
      prevDOM.replaceWith(prevDOM.cloneNode(true));
      nextDOM.replaceWith(nextDOM.cloneNode(true));
      closeDOM.replaceWith(closeDOM.cloneNode(true));

      index = null;
      counter = null;
      modalDOM.classList.remove("modal-certificates--open")
      setTimeout(() => {
        imageDOM.src = "";
        descriptionDOM.innerText = "";            
      }, 300)
    }
    closeDOM.addEventListener("click", () => close())
    
    modalDOM.classList.add("modal-certificates--open");
  }


  const sliderDOM = document.querySelector(".certificates__slider");    

  allCertificates.forEach(item => {
    const slideDOM = document.createElement("div");
    const darkFrontLayerDOM = document.createElement("div");
    const certificateDOM = document.createElement("img");

    slideDOM.classList.add("certificates__slider-slide", "onhover-light");
    slideDOM.addEventListener("click", () => {
      renderModal(allCertificates.indexOf(item));
    });


    darkFrontLayerDOM.classList.add("front-layer")
    certificateDOM.src = item.url;

    slideDOM.appendChild(darkFrontLayerDOM);
    slideDOM.appendChild(certificateDOM);

    sliderDOM.appendChild(slideDOM);

  });



  const flkty = new Flickity( ".certificates__slider", {
    pageDots: false,
    autoPlay: true
  });
}
renderCertificates();


//MY WORKS
const renderWorks = async () => {
  const url = "../data/works.json";
  const res = await fetch(url);
  const allWorks = await res.json();

  const worksWrapperDOM = document.querySelector(".works__wrapper");
  
  allWorks.forEach(item => {
    const workDOM = document.createElement("div");
    const imgLinkDOM = document.createElement("a");
    const darkFrontLayerDOM = document.createElement("div");
    const infoDOM = document.createElement("div");
    const titleDOM = document.createElement("h6");
    const listDOM = document.createElement("ul");
    const linkDOM = document.createElement("a");
  
    workDOM.classList.add("works__work");
    const index = allWorks.indexOf(item);
    if (index % 2 !== 0) workDOM.classList.add("reverse");
    imgLinkDOM.classList.add("works__work-img-link","onhover-light");
    darkFrontLayerDOM.classList.add("front-layer");
    infoDOM.classList.add("works__work-info");
    titleDOM.classList.add("works__work-info-title");
    listDOM.classList.add("works__work-info-list");
    linkDOM.classList.add("works__work-info-link","renlincode-link");

    imgLinkDOM.style.backgroundImage = `url(${item.backgroundUrl})`;
    imgLinkDOM.href = item.deployAddress;
    imgLinkDOM.target = "_blank";
    imgLinkDOM.rel = "noopener noreferrer";
    titleDOM.innerText = item.title;
    linkDOM.href = item.repoAddress;
    linkDOM.target = "_blank";
    linkDOM.rel = "noopener noreferrer";
    linkDOM.innerText = "???????????????????? ??????????????????????";

    item.features.forEach(i => {
      const listItemDOM = document.createElement("li");
      listItemDOM.innerText = i;
      listDOM.appendChild(listItemDOM);
    })

    imgLinkDOM.appendChild(darkFrontLayerDOM);
    infoDOM.appendChild(titleDOM);
    infoDOM.appendChild(listDOM);
    infoDOM.appendChild(linkDOM);
    workDOM.appendChild(imgLinkDOM);
    workDOM.appendChild(infoDOM);

    worksWrapperDOM.appendChild(workDOM);
  })
}
renderWorks();


//PROYECTS
const renderProyects = async () => {
  const url = "../data/proyects.json";
  const res = await fetch(url);
  const allProyects = await res.json();

  const proyectsWrapperDOM = document.querySelector(".proyects__wrapper");
  
  allProyects.forEach(item => {
    const proyectDOM = document.createElement("div");
    const imgLinkDOM = document.createElement("a");
    const darkFrontLayerDOM = document.createElement("div");
    const infoDOM = document.createElement("div");
    const titleDOM = document.createElement("h6");
    const listTitleDOM = document.createElement("p");
    const listDOM = document.createElement("ul");
  
    proyectDOM.classList.add("proyects__proyect");
    imgLinkDOM.classList.add("proyects__proyect-img-link","onhover-light");
    darkFrontLayerDOM.classList.add("front-layer");
    infoDOM.classList.add("proyects__proyect-info");
    titleDOM.classList.add("proyects__proyect-info-title");
    listTitleDOM.classList.add("proyects__proyect-info-list-title");
    listDOM.classList.add("proyects__proyect-info-list");

    imgLinkDOM.style.backgroundImage = `url(${item.backgroundUrl})`;
    imgLinkDOM.href = item.deployAddress;
    imgLinkDOM.target = "_blank";
    imgLinkDOM.rel = "noopener noreferrer";
    titleDOM.innerText = item.title;
    listTitleDOM.innerText = "?????? ?????????? ?? ???? ??????????????:";
    item.features.forEach(i => {
      const listItemDOM = document.createElement("li");
      listItemDOM.innerText = i;
      listDOM.appendChild(listItemDOM);
    })

    imgLinkDOM.appendChild(darkFrontLayerDOM);
    infoDOM.appendChild(titleDOM);
    infoDOM.appendChild(listTitleDOM);
    infoDOM.appendChild(listDOM);
    proyectDOM.appendChild(imgLinkDOM);
    proyectDOM.appendChild(infoDOM);

    proyectsWrapperDOM.appendChild(proyectDOM);
  })
}
renderProyects();