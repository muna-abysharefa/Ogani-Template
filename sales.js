function calculatewindow(){
    let windowwidth = window.innerWidth;
 
 if(windowwidth > 996){
   
     document.querySelector('.desktop-nav-group').style.display='flex';
     document.querySelector('.mobile-nav-group').style.display='none';
 }
 
 else{
 
     document.querySelector('.desktop-nav-group').style.display='none';
     document.querySelector('.mobile-nav-group').style.display='flex';
 }
  
 }
 
 calculatewindow();

window.addEventListener('resize',calculatewindow);

var sidetoggle = document.querySelectorAll('.side-nav-toggle');

var showcategories = document.querySelectorAll('button[class="show-ul"]');

for(let el of sidetoggle){
    el.addEventListener('click',handleToggleMenu);
}

for(let el of showcategories){
    el.addEventListener('click',ShowCategories);
}


function handleToggleMenu(){
    if(document.querySelector('aside').classList.contains('show')){
        document.querySelector('aside').classList.remove('show');
        document.querySelector('.aside-shade').classList.remove('show');
        document.body.classList.remove('no-scroll');

    }
    else{
        document.querySelector('aside').classList.add('show');
        document.querySelector('.aside-shade').classList.add('show');
        document.body.classList.add('no-scroll');
    }
}

ShowCategories();

function ShowCategories(){
    var arrowCategories = document.querySelector('ul.show-ul');
    if(arrowCategories.classList.contains('show')){
        arrowCategories.classList.remove('show');
        }
    else
    {
        arrowCategories.classList.add('show');
       
    }

}


   

