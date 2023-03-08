let headerElement = document.querySelector('.sidebar');
let mobibleMenu = document.querySelector('.mobile-menu-btn');
let headerHeight = 55;

mobibleMenu.onclick = function () {
    if (headerElement.clientHeight === headerHeight) {
        headerElement.style.height = 'auto';
    } else {
        headerElement.style.height = null;
    }
}