document.getElementById('unitsBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    const unitsSection = document.getElementById('unitsSection');
    if (unitsSection.style.display === 'none' || unitsSection.style.display === '') {
        unitsSection.style.display = 'block'; // Mostra as unidades
    } else {
        unitsSection.style.display = 'none'; // Esconde as unidades
    }
});