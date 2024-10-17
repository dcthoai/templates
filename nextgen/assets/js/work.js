const allCategoriesButton = document.getElementById('all-categories');
const categoriesButton = document.getElementById('categories');
const filterCategory = document.getElementById('filter');
const categories = filterCategory.querySelectorAll('.nav-filter__item');

allCategoriesButton.addEventListener('click', () => {
    allCategoriesButton.classList.add('active');
    categoriesButton.classList.remove('active');
    filterCategory.style.visibility = 'hidden';
});

categoriesButton.addEventListener('click', () => {
    categoriesButton.classList.add('active');
    allCategoriesButton.classList.remove('active');
    filterCategory.style.visibility = 'visible';
});

categories.forEach((button) => {
    button.addEventListener('click', () => {
        categories.forEach((btn) => {
            btn.classList.remove('active');
        });

        button.classList.add('active');
    });
});