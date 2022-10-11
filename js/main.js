    //NAVIGATOR MENU
const menuButton = document.querySelector(".header-nav--menu-button");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    body.classList.toggle("body_fixed");
});
const menuItemClick = () => {
    navMenu.classList.remove("nav-menu_visible");
    body.classList.remove("body_fixed");
    document.getElementById("btn-menu-checkbox").checked = false
};

//CERTIFICATES
const certificates = [];

class Certificate {
    constructor(
        {
            name,
            description,
            previewUrl,
            viewUrl,
        }
    ){
        this.name = name;
        this.description = description;
        this.previewUrl = previewUrl;
        this.viewUrl = viewUrl;
    }
}

const popupView = (cert) => {
    let certificateIndex = cert;
    let counter = certificateIndex + 1;

    const counterEl = document.getElementById("counter");
    const closeButton = document.getElementById("closeButton");
    const popupWindow = document.getElementById("popup-window");
    const image = document.getElementById("popup-img");
    const description = document.getElementById("certificate-description");
    const buttonPrev = document.getElementById("buttonPrev");
    const buttonNext = document.getElementById("buttonNext");

    popupWindow.style.display = "flex";
    setTimeout(() => {
        popupWindow.style.transform = "scale(1)";
        counterEl.innerHTML = `${counter} / ${certificates.length}`;
        image.src = certificates[certificateIndex].viewUrl;
        description.innerHTML = certificates[certificateIndex].description;
    
        buttonPrev.addEventListener("click", () => {
            buttonPrev.classList.add("__rotate-left");
            setTimeout(()=>{
                buttonPrev.classList.remove("__rotate-left");
            },400);

            if (certificateIndex > 0) {
                counterEl.innerHTML = "";
                image.src = "";
                description.innerHTML = "";
                certificateIndex--;
                counter--;
      
    
                counterEl.innerHTML = `${counter} / ${certificates.length}`;
                image.src = certificates[certificateIndex].viewUrl;
                description.innerHTML = certificates[certificateIndex].description;
            }
        })
        buttonNext.addEventListener("click", () => {
            buttonNext.classList.add("__rotate-right");
            setTimeout(()=>{
                buttonNext.classList.remove("__rotate-right");
            },400);
    
            if (certificateIndex >= 0 && certificateIndex < certificates.length - 1) {
                counterEl.innerHTML = "";
                image.src = "";
                description.innerHTML = ""; 
                certificateIndex++;
                counter++;
                
                counterEl.innerHTML = `${counter} / ${certificates.length}`;
                image.src = certificates[certificateIndex].viewUrl;
                description.innerHTML = certificates[certificateIndex].description;
            }
        })
        
        closeButton.addEventListener("click",() => {
            certificateIndex = undefined;
            popupWindow.style.transform = "scale(0)";
            setTimeout(() => {
                image.src = "";
                description.innerHTML = "";            
                popupWindow.style.display = "none";
            }, 400)
        })       
    },0)
}

const id0 = new Certificate ({
    name: "Curso de Frontend",
    description: "Теоритический курс по Frontend-разработке",
    viewUrl: "./assets/images/certificate-frontend.png",
    previewUrl: "./assets/images/certificate-frontend-mini.png"
})
certificates.push(id0);

const id1 = new Certificate ({
    name: "Curso Práctico de Frontend",
    description: "Практический курс по Frontend-разработке",
    viewUrl: "./assets/images/certificate-frontend-practic.png",
    previewUrl: "./assets/images/certificate-frontend-practic-mini.png"
})
certificates.push(id1);

const id2 = new Certificate ({
    name: "Curso de HTML y CSS",
    description: "Полный теоритический курс по HTML и CSS",
    viewUrl: "./assets/images/certificate-html-and-css.png",
    previewUrl: "./assets/images/certificate-html-and-css-mini.png"

})
certificates.push(id2);

const id3 = new Certificate ({
    name: "Curso Práctico de HTML y CSS",
    description: "Полный практический курс по HTML и CSS",
    viewUrl: "./assets/images/certificate-html-and-css-practic.png",
    previewUrl: "./assets/images/certificate-html-and-css-practic-mini.png",
})
certificates.push(id3);

const id4 = new Certificate ({
    name: "Curso de Responsive Design",
    description: "Курс по адаптивной верстке Mobile First",
    viewUrl: "./assets/images/certificate-responsive-mobile-first.png",
    previewUrl: "./assets/images/certificate-responsive-mobile-first-mini.png"
})
certificates.push(id4);

const id5 = new Certificate ({
    name: "Curso de la Terminal",
    description: "Курс по терминалу",
    viewUrl: "./assets/images/certificate-terminal.png",
    previewUrl: "./assets/images/certificate-terminal-mini.png"
})
certificates.push(id5);

const id6 = new Certificate ({
    name: "Curso de Git y GitHub",
    description: "Курс по Git и GitHub",
    viewUrl: "./assets/images/certificate-git-github.png",
    previewUrl: "./assets/images/certificate-git-github-mini.png"
})
certificates.push(id6);

const id7 = new Certificate ({
    name: "Curso Básico de JavaScript",
    description: "Базовый теоритический курс по JavaScript",
    viewUrl: "./assets/images/certificate-basic-js.png",
    previewUrl: "./assets/images/certificate-basic-js-mini.png"
})
certificates.push(id7);

const id8 = new Certificate ({
    name: "Curso Básico Práctico de JavaScript",
    description: "Базовый практический курс по JavaScript",
    viewUrl: "./assets/images/certificate-basic-js-practic.png",
    previewUrl: "./assets/images/certificate-basic-js-practic-mini.png"
})
certificates.push(id8);

const id9 = new Certificate ({
    name: "Curso de Closures y Scope",
    description: " Курс по Closures y Scope",
    viewUrl: "./assets/images/certificate-scope.png",
    previewUrl: "./assets/images/certificate-scope-mini.png"
})
certificates.push(id9);

const id10 = new Certificate ({
    name: "Curso de Ingeniería de Softwares",
    description: "Курс по Software Engineering",
    viewUrl: "./assets/images/certificate-software-engineering.png",
    previewUrl: "./assets/images/certificate-software-engineering-mini.png" 
})
certificates.push(id10);

const id11 = new Certificate ({
    name: "Curso Básico de JS Orientado a Objetos",
    description: "Базовый теоритический курс по ООП с JavaScript",
    viewUrl: "./assets/images/certificate-basic-js-OOP.png",
    previewUrl: "./assets/images/certificate-basic-js-OOP-mini.png"
})
certificates.push(id11);

const id12 = new Certificate ({
    name: "Curso Intermedio de JS Orientado a Objetos",
    description: "Средний теоритический курс по ООП с JavaScript",
    viewUrl: "./assets/images/certificate-middle-js-OOP.png",
    previewUrl: "./assets/images/certificate-middle-js-OOP-mini.png"
})
certificates.push(id12);

const id13 = new Certificate ({
    name: "Curso de Manipulación de Arrays",
    description: "Курс по управлению Arrays",
    viewUrl: "./assets/images/certificate-arrays.png",
    previewUrl: "./assets/images/certificate-arrays-mini.png"
})
certificates.push(id13);

const id14 = new Certificate ({
    name: "Curso de Asincronismo en JavaScript",
    description: "Курс по асинхронности в JavaScript",
    viewUrl: "./assets/images/certificate-async-js.png",
    previewUrl: "./assets/images/certificate-async-js-mini.png"
})
certificates.push(id14);

const id15 = new Certificate ({
    name: "Curso de Diseño Web con Flexbox y CSS Grid",
    description: "Курс по веб-дизайн c Flexbox и CSS Grid",
    viewUrl: "./assets/images/certificate-flexbox-css-grid.png",
    previewUrl: "./assets/images/certificate-flexbox-css-grid-mini.png"
})
certificates.push(id15);

const id16 = new Certificate ({
    name: "Curso de Transformaciones y Transiciones",
    description: "Курс по transform и transition",
    viewUrl: "./assets/images/certificate-transform-transition.png",
    previewUrl: "./assets/images/certificate-transform-transition-mini.png"
})
certificates.push(id16);

const id17 = new Certificate ({
    name: "Curso de Ecmascript",
    description: "Курс по Ecmascript",
    viewUrl: "./assets/images/certificate-ecmascript.png",
    previewUrl: "./assets/images/certificate-ecmascript-mini.png"
})
certificates.push(id17);

const id18 = new Certificate ({
    name: "Curso de consumo de API REST con JavaScript",
    description: "Курс по API REST с JavaScript",
    viewUrl: "./assets/images/certificate-api-rest.png",
    previewUrl: "./assets/images/certificate-api-rest-mini.png",
})
certificates.push(id18);

const id19 = new Certificate ({
    name: "Curso de Fundamentos de TypeScript",
    description: "Курс основы TypeScript",
    viewUrl: "./assets/images/certificate-typescript.png",
    previewUrl: "./assets/images/certificate-typescript-mini.png"
})
certificates.push(id19);

const id20 = new Certificate ({
    name: "Curso de Vue.js: Introducción y fundamentos",
    description: "Курс основы Vue.js",
    viewUrl: "./assets/images/certificate-vue.png",
    previewUrl: "./assets/images/certificate-vue-mini.png"
})
certificates.push(id20);


const renderCertificates = () => {
    const certificatesSlider = document.querySelector(".carousel");    
    for (let i = 0; i < certificates.length; i++) {
        const certificateContainer = document.createElement("div");
        const certificate = document.createElement("span");

        certificate.classList.add("carousel-cell");
        certificate.style.backgroundImage = `url(${certificates[i].previewUrl})`;
        certificate.addEventListener("click", () => {
            popupView(i);
        })

        certificateContainer.appendChild(certificate);
        certificatesSlider.appendChild(certificateContainer);
    }
}
renderCertificates();