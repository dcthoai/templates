const popupNotify = document.getElementById('notify');   // Notification box
const popupNotifyTitle = document.getElementById('notify-title');
const popupNotifyMessage = document.getElementById('notify-message');
const popupNotifyCloseButton = document.getElementById('notify-close-button');  // Button to close notify
let closeNotifyTimeOut;

function openPopupNotify(title, message, status) {
    popupNotify.style.animation = 'appearNotify 0.75s ease forwards'; // Add appear animation
    popupNotify.className = '';     // Remove all class of popup wrapper
    popupNotify.classList.add(status);      // Type of notification: notify, success, warning, error
    popupNotifyTitle.innerHTML = title;
    popupNotifyMessage.innerHTML = message;

    closeNotifyTimeOut = setTimeout(() => {     // Auto hide notification after 5 seconds
        closePopupNotify();
    }, 5000);
}

function closePopupNotify() {
    popupNotify.style.animation = 'hideNotify 0.75s ease forwards';

    // Wait hidden effect to finish (0.75s) before remove all properties off popup
    setTimeout(() => {
        popupNotify.style.animation = '';
        popupNotify.className = '';
        popupNotifyTitle.innerHTML = '';
        popupNotifyMessage.innerHTML = '';

        clearTimeout(closeNotifyTimeOut);
    }, 750);
}

popupNotifyCloseButton.addEventListener('click', () => {
    const closeIcon = popupNotifyCloseButton.querySelector('i.fa-xmark');
    closeIcon.style.animation = 'closeNotify 0.5s ease forwards';   // Add animation for close button
    
    closePopupNotify();

    setTimeout(function () {
        closeIcon.style.animation = '';     // Remove animation when popup is close
    }, 500);
});

function openPopupConfirm(title, message, status, callback) {
    popupNotify.style.animation = 'appearNotify 0.75s ease forwards';   // Add animation appear for popup when open
    popupNotify.className = '';
    popupNotify.classList.add(status);
    popupNotify.classList.add('option');    // Enable class for popup confirm type
    popupNotifyTitle.innerHTML = title;
    popupNotifyMessage.innerHTML = message;

    const confirmButton = popupNotify.querySelector('#ok');
    const cancelButton = popupNotify.querySelector('#cancel');

    confirmButton.addEventListener('click', function () {
        callback(true);     // Return true if user click on OK button
    });

    cancelButton.addEventListener('click', function () {
        closePopupNotify();
        callback(false);    // Return false and close popup if user click on cancel button
    })
}

// Loading animation
function openLoadingAnimation(){
    loadingAnimation.style.display = 'block';
    
    setTimeout(function(){
		closeLoadingAnimation();    // Minimum appearance time is 1s
	}, 1000);
}

function closeLoadingAnimation(){
    loadingAnimation.style.display = 'none';
}