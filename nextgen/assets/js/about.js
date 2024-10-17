
const staffs = document.querySelectorAll('.staff .staff__content .staff__content-item');

staffs.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        button.classList.toggle('plus-rotate-icon-active');
    });
});