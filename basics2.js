let openRegister = document.querySelector('#register');
let registerForm = document.querySelector('.register');

let closeRegisterForm = document.querySelector('.close_button');
openRegister.onclick = () => {
    registerForm.classList.add('active');
}

closeRegisterForm.onclick = () => {
    registerForm.classList.remove('active');
}


let items = document.querySelectorAll('.item');
const observer = new IntersectionObserver((entries,observe) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('item_show');
        }
    })
},{
    root:null,
    rootMargin:'-200px',
    threshold:0.7
})
items.forEach((item) => {
    observer.observe(item);
})
// window.addEventListener('scroll',() => {
//     observer.observe(items);
// })