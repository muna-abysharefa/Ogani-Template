const query = window.location.search.slice(1).split('&'); 

const queryobj = {};

if(query[0].length > 0){
    for(let i = 0; i < query.length; i++){
        var keys = query[i].split('=');
        queryobj[keys[0]]=keys[1];
        Scrollpage();
    }
}

if (!queryobj.page) {
    queryobj.page = 'about';
}

document.getElementById(queryobj.page).style.display = 'block';
document.getElementById(queryobj.page + '-link').classList.add('active');

function Scrollpage(){
    window.scrollTo({
        top:document.querySelector('.hero-image').offsetTop,
        behavior:"smooth"
    })
}