window.onload = function () {
    let toggler = document.getElementById('toggler');
    let nav_bar = document.getElementById('navbar-collaspe')
    let collaspe = true;

    toggler.addEventListener('click', () => {
        if(collaspe){
            nav_bar.style.display= "flex";
            collaspe = false;
        }else{
            nav_bar.style.display= "none";
            collaspe = true;
        }
    })
}