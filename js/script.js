var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



function salvarForm() {
    if (document.getElementById("name").value != "" && document.getElementById("email").value != "") {
        if (localStorage.cont) {
            localStorage.cont = Number(localStorage.cont) + 1;
        } else {
            localStorage.cont = 1;
        }

        dados = document.getElementById('name').value + ';' + document.getElementById('email').value;
        localStorage.setItem("Dados" + localStorage.cont, dados);
        alert("Prontinho! Você receberá as novidades por email ")

    } else {
        alert("Por favor, preencha os campos nome e email ")
    }


}