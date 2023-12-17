const sm = document.querySelector('#sm');
const menu = document.querySelector('#menu');

sm.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})