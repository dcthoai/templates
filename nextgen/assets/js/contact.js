const selectServiceBtn = document.getElementById('category-service-btn');
const serviceName = selectServiceBtn.querySelector('#service-select');
const boxService = document.getElementById('box-service');
const listService = boxService.querySelectorAll('.services__item');

function openServiceForm(){
    boxService.style.display = 'block';
    selectServiceBtn.classList.add('plus-rotate-icon-active');

    setTimeout(() => {
        boxService.classList.add('active');
    }, 100);
}

function closeServiceForm(){
    boxService.classList.remove('active');
    selectServiceBtn.classList.remove('plus-rotate-icon-active');

    setTimeout(() => {
        boxService.style.display = 'none';
    }, 500);
}

selectServiceBtn.addEventListener('click', () => {
    if (selectServiceBtn.classList.contains('plus-rotate-icon-active')){
        closeServiceForm();
    } else {
        openServiceForm();
    }
});

listService.forEach((button, index) => {
    button.addEventListener('click', () => {
        let value = button.innerText.trim();

        serviceName.innerText = value;
        closeServiceForm();
    });
});