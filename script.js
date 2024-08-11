// Simple interaction: Display an alert when clicking on any section header
document.querySelectorAll('.section h2').forEach(header => {
    header.addEventListener('click', function() {
        alert('You clicked on: ' + this.innerText);
    });
});
