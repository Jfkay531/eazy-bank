const navSlide = ()=>{
    const burger =document.querySelector ('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    const intro = document.querySelector ('.col2 img')
    burger.addEventListener('click', ()=>{

        // nav pane toggle
        nav.classList.toggle('nav-active');
        
        // toggle burger background
        // burgerDiv.classList.toggle('burger-cancel');
        

        
        // remove intro image
        intro.classList.toggle('intro-off')
        

        // animate links
        navLinks.forEach ( (link, index) => {

            if (link.style.animation){
                link.style.animation =''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index/7 +0.3}s`
            }


        })
    })

}

navSlide()