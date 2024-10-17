const buttonTables = document.querySelectorAll('.quote .quote__detail-table.mobile .table__header-item');
const tableContent = document.querySelector('.quote .quote__detail-table .table-mobile .table-wrap');
const table = document.querySelector('.quote .quote__detail-table .table-mobile');


console.log(table);

buttonTables[0].addEventListener('click', () => {
    buttonTables[0].classList.add('active');
    buttonTables[1].classList.remove('active');
    buttonTables[2].classList.remove('active');

    table.style.transform = `translateX(0)`;
});

buttonTables[1].addEventListener('click', () => {
    buttonTables[0].classList.remove('active');
    buttonTables[1].classList.add('active');
    buttonTables[2].classList.remove('active');

    const tableContentWidth = tableContent.offsetWidth;
    table.style.transform = `translateX(-${tableContentWidth}px)`;
});

buttonTables[2].addEventListener('click', () => {
    buttonTables[0].classList.remove('active');
    buttonTables[1].classList.remove('active');
    buttonTables[2].classList.add('active');

    const tableContentWidth = tableContent.offsetWidth;
    table.style.transform = `translateX(-${2 * tableContentWidth}px)`;
});