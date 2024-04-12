var accordionButtons = document.querySelectorAll('.accordion');

accordionButtons.forEach(function(button) {
    button.addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            var panel = this.nextElementSibling;
            panel.classList.toggle('show');
        }
    });
});