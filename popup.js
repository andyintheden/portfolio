function openPopup(popupID,event){
    if (event) event.preventDefault();
    document.getElementById(popupID).style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closePopup(popupID){
    document.getElementById(popupID).style.display = 'none';
    document.body.style.overflow = 'auto';
}
document.addEventListener('click', function(event) {
    if (event.target.matches('[onclick*="openPopup"]')) {
        return;
    }

    const popup = document.getElementById('popup1');
    const popupContent = popup.querySelector('.popup-content');
    
    if (popup.style.display !== 'none') {
        if (!popupContent.contains(event.target)) {
            closePopup('popup1');
        }
    }
});

document.addEventListener('click', function(event) {
    if (event.target.matches('[onclick*="openPopup"]')) {
        return;
    }

    const popup = document.getElementById('popup2');
    const popupContent = popup.querySelector('.popup-content');
    
    if (popup.style.display !== 'none') {
        if (!popupContent.contains(event.target)) {
            closePopup('popup2');
        }
    }
});

