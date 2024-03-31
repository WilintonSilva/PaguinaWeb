const searchInput = document.querySelector('.container input');
const container = document.querySelector('.container');

searchInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        container.classList.add('expanded');
    } else {
        container.classList.remove('expanded');
    }
});
