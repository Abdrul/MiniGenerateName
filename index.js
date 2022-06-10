// Get element on DOM

const btn = document.querySelector(".btn");
const span = document.querySelector(".display-name");
const container = document.querySelector(".container");

const arrayNames = ["John", "Sylvain", "Kain", "Sofiane", "Henry"];



btn.addEventListener("click", () => {
    //De base je veux pas ajouter l'animation sur mon btn
    span.classList.remove('test-class');

    //Ici je rajoute l'animation et je mets le bout code pour generer un nom aleatoires pour ne pas 
    //avoir de conflit de temps entre l'apparition du nom et l'animation
    setTimeout(() => {
        const randomName = arrayNames[Math.floor(Math.random() * arrayNames.length)];
        span.innerText = randomName;
        span.classList.add("test-class");
    }, 0);
});

