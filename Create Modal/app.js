var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconColse = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.modal__footer');

function toggleModal(){
    modal.classList.toggle('hide');
}

btnOpen.addEventListener('click',toggleModal);
btnClose.addEventListener('click',toggleModal);
iconColse.addEventListener('click',toggleModal);
modal.addEventListener('click',function(e){
    if(e.target == e.currentTarget){
        toggleModal();
    }
});


