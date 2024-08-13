document.getElementById('toggleUnitsBtn').addEventListener('click', function(event) {
    event.preventDefault();
    var unitsSection = document.getElementById('unitsSection');
    if (unitsSection.style.display === 'none' || unitsSection.style.display === '') {
        unitsSection.style.display = 'block';
    } else {
        unitsSection.style.display = 'none';
    }
});