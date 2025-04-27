// Example of adding an event to each instrument for more interactivity
document.querySelectorAll('.instrument').forEach(instrument => {
    instrument.addEventListener('click', function() {
        alert('You clicked on ' + instrument.querySelector('h2').textContent);
    });
});
