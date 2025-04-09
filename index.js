console.log("script running........")
document.querySelector('.cross').style.display='none'
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');  
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'   
        }, 500);
    }
})

document.querySelector('.cross').style.display='none'
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebars').classList.toggle('sidebargos');  
    if(document.querySelector('.sidebars').classList.contains('sidebargos')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.ham').style.display='none'
        setTimeout(() => {
            document.querySelector('.cross').style.display='inline'   
        }, 500);
    }
})