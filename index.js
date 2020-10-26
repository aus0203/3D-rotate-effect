const card = document.querySelector(".product-card");
const container = document.querySelector(".container");
const dish = document.querySelector('.dish');
const intro = document.querySelector('.intro');
const sizeBar = document.querySelector(".size-bar");
const purchaseBar = document.querySelector('.purchase-bar')


/*Moving animation*/
card.addEventListener('mousemove', e =>{
    let xAxis = (window.innerWidth / 2 - e.pageX)/25;
    let yAxis = (window.innerHeight / 2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

/*Animate in*/
card.addEventListener("mouseenter", e=>{
    card.style.transition = 'none';
    dish.classList.add('pop-up-effect-forimg');
    intro.classList.add('pop-up-effect');
    sizeBar.classList.add('pop-up-effect');
    purchaseBar.classList.add('pop-up-effect');
})
/*Animate out*/
card.addEventListener("mouseleave", e =>{
    card.style.transition = 'all .5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    dish.classList.remove('pop-up-effect-forimg');
    intro.classList.remove('pop-up-effect');
    sizeBar.classList.remove('pop-up-effect');
    purchaseBar.classList.remove('pop-up-effect')
})