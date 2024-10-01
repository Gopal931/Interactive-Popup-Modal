const popupContainer = document.querySelector('.popup-container');

window.addEventListener("load", function() {
   setTimeout(()=> {
    popupContainer.style.display = 'block';
   }, 1000); 
});

document.querySelector('.close-btn').addEventListener('click', ()=> {
  popupContainer.style.display = 'none';
});




