const card = document.querySelector(".product-card");
const sizeButtons = document.querySelectorAll(".sizeButton")

function rotateCard(element) {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 10;
    element.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
}

function enterCard(element) {
    element.style.transition = 'none';
    const dishes = document.querySelectorAll(`#${element.id} .dish`);
    dishes[0].classList.add('pop-up-effect-forimg');
    const intros = document.querySelectorAll(`#${element.id} .intro`);
    intros[0].classList.add('pop-up-effect');
    const sideBars = document.querySelectorAll(`#${element.id} .size-bar`);
    sideBars[0].classList.add('pop-up-effect');
    const purchasBars = document.querySelectorAll(`#${element.id} .purchase-bar`);
    purchasBars[0].classList.add('pop-up-effect');

}

function leaveCard(element) {
    element.style.transition = 'all .3s ease';
    element.style.transform = `rotateY(0deg) rotateX(0deg)`;
    const dishes = document.querySelectorAll(`#${element.id} .dish`);
    dishes[0].classList.remove('pop-up-effect-forimg');
    const intros = document.querySelectorAll(`#${element.id} .intro`);
    intros[0].classList.remove('pop-up-effect');
    const sideBars = document.querySelectorAll(`#${element.id} .size-bar`);
    sideBars[0].classList.remove('pop-up-effect');
    const purchasBars = document.querySelectorAll(`#${element.id} .purchase-bar`);
    purchasBars[0].classList.remove('pop-up-effect');
}
