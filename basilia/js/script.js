const hamBtn = document.querySelector('#ham-menu');
const asideMenu = document.querySelector('.aside-menu');
const item = document.querySelector('.item');

function showMenu(){
    asideMenu.classList.toggle('active');
    if(asideMenu.classList.contains('active')){
        hamBtn.style.transform='rotate(180deg)';
    }
    else{
        hamBtn.style.transform='rotate(0deg)';
    }
};

function hideMenu(){
    asideMenu.classList.remove('active');
    console.log('chowam');
};

hamBtn.addEventListener('click', showMenu);
item.addEventListener('click', hideMenu);
