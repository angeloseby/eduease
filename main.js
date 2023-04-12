// change navbar style on scroll

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');
        

        const icon = faq.querySelector('.faq__icon i');
        if(icon.className ==='uil uil-plus' ){
            icon.className = 'uil uil-minus'
        }else{
            icon.className ='uil uil-plus'
        }

    })
});

// show hide nav

const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closedBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closedBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none'
})

//close nav menu

const closeNav = ()=>{
    menu.style.display = 'none';
    closedBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block'
}

closedBtn.addEventListener('click',closeNav)
