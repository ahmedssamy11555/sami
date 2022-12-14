const formBtns = document.querySelectorAll("[data-target-form]")
const contactOverlay = document.querySelector(".contact__overlay")
const closeBtns = document.querySelectorAll("[data-close-btn]")

formBtns.forEach(button => {
    button.addEventListener('click', () => {
        const targetFrom = document.querySelector(button.dataset.targetForm);
        openFrom(targetFrom); 
    })
})

closeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest('.contact')
        closeFrom(form); 
    })
})
closeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const form = button.closest('.navbar')
        closeFrom(form); 
    })
})

contactOverlay.addEventListener('click', () => {
    const forms = document.querySelectorAll(".contact.active")
    forms.forEach(form => {
        closeFrom(form)
        
    })
})




function openFrom(targetFrom){
    if (targetFrom == null) return
    targetFrom.classList.add("active")
    contactOverlay.classList.add("active")
    
}
function closeFrom(targetFrom){
    if (targetFrom == null) return
    targetFrom.classList.remove("active")
    contactOverlay.classList.remove("active")
    
}

let pages = document.querySelectorAll("nav a");
pages.forEach(page => {
    if (page.href === window.location.href){
        page.setAttribute("aria-current", "page")
    }
})

