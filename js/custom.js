$(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach((question) => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none"; // Fecha a resposta
            } else {
                // Fecha todas as respostas antes de abrir outra
                faqQuestions.forEach((item) => {
                    if (item.nextElementSibling) {
                        item.nextElementSibling.style.display = "none";
                    }
                });
                answer.style.display = "block"; // Abre a resposta clicada
            }
        });
    });
});
