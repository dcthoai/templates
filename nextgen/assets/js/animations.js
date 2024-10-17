
// Animation collapse accordion
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        accordionButtons.forEach((btn, i) => {
            if (i != index){
                btn.classList.remove('plus-rotate-icon-active');
                btn.classList.remove('circle-rotate-icon-active');
            }
        });

        button.classList.toggle('plus-rotate-icon-active');
        button.classList.toggle('circle-rotate-icon-active');
    })
});

// Animation move partners list by mouse move
const scrollWrapper = document.querySelector('.scroll-wrapper');

function getCurrentTranslateX(scrollWrapperContent){
    let transformStyle = window.getComputedStyle(scrollWrapperContent).getPropertyValue("transform");

    if (transformStyle && transformStyle !== 'none') {
        let transformMatrix = transformStyle.split('(')[1].split(')')[0].split(',');
        let translateX = parseInt(transformMatrix[4]);
        
        return translateX;
    } else {
        return 0;
    }
}

if (scrollWrapper){
    const scrollWrapperContent = scrollWrapper.querySelector('.scroll-wrapper__content');
    const minTranslateX = scrollWrapper.offsetWidth - scrollWrapperContent.offsetWidth;
    let mouseMoveX = 0;
    let isMouseDown = false;

    scrollWrapper.addEventListener("mousedown", function (event) {
        isMouseDown = true;
        mouseMoveX = event.clientX;
    });
    
    scrollWrapper.addEventListener("mouseup", function () {
        isMouseDown = false;
    });
    
    scrollWrapper.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });
    
    scrollWrapper.addEventListener("mousemove", function (e) {
        if(isMouseDown){
            let newMouseMoveX = e.clientX;
            let translateX = newMouseMoveX - mouseMoveX + getCurrentTranslateX(scrollWrapperContent);
    
            if (translateX >= minTranslateX && translateX <= 0) {
                scrollWrapperContent.style.transform = `translateX(${translateX}px)`;
            }

            mouseMoveX = newMouseMoveX;
        }
    });
}
// End: Animation scroll

// Change text color for header when scroll
const header = document.querySelector('header');
const banner = document.querySelector('.banner');
const bannerH = banner ? banner.offsetHeight : 0;

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    if (scrollY >= bannerH) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});