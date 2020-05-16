const toggelMenu = document.getElementById('toggle-menu')
const sideBar = document.getElementById('sidebar')

toggelMenu.addEventListener('click', (e)=>{
    //si de le d click l toggle menu o si el padre del que se da click es el toggle-menu
    if(e.target.id == 'toggle-menu' || e.target.parentElement.id== 'toggle-menu'){
        //si no tiene la clase se la pone y si tiene se l quita
        sideBar.classList.toggle('show')
        toggelMenu.classList.toggle('show')
    }
})