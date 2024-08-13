document.addEventListener("DOMContentLoaded", function() {
    // Ação para abrir as unidades ao clicar em "Nossas Unidades"
    const unidadesButton = document.getElementById("unidadesButton");
    const unitsSection = document.getElementById("unitsSection");

    unidadesButton.addEventListener("click", function() {
        if (unitsSection.style.display === "none") {
            unitsSection.style.display = "block";
        } else {
            unitsSection.style.display = "none";
        }
    });

    // Ação para redirecionar ao WhatsApp ao clicar no botão
    const whatsappButton = document.getElementById("whatsappButton");

    whatsappButton.addEventListener("click", function() {
        // Substitua o número de telefone pelo seu número de WhatsApp (código do país + número)
        const phoneNumber = "556696160020"; // Exemplo: +55 11 99999-9999
        const message = "Olá, gostaria de mais informações!";
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Redireciona para o link do WhatsApp
        window.location.href = whatsappLink;
    });

    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000); // Muda o slide a cada 2 segundos

    // Inicializa o carousel
    showSlide(currentSlide);
});