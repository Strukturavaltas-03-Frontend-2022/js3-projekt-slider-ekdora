import imgDetails from './images.js';

const slideShowContainer = document.querySelector('.slideshow-container');
const bottomPager = document.querySelector('.bottom-pager');
const nrOfImgs = imgDetails.length;
let slideIndex = 1;

const createSlide = (imgDetail, idx) => {
    const slide = document.createElement('div');
    slide.classList.add('slide', 'fade');

    const slideCounter = document.createElement('div');
    slideCounter.classList.add('numbertext');
    slideCounter.innerHTML = `${idx + 1} / ${nrOfImgs}`
    slide.appendChild(slideCounter);

    const slideImg = document.createElement('img');
    slideImg.src = imgDetail.src;
    slideImg.alt = imgDetail.alt;
    slide.appendChild(slideImg);

    const slideDesc = document.createElement('div');
    slideDesc.classList.add('text');
    slideDesc.innerHTML = imgDetail.alt;
    slide.appendChild(slideDesc);

    slideShowContainer.appendChild(slide);
};

const createPager = () => {
    const leftPager = document.createElement('a');
    leftPager.classList.add('prev');
    leftPager.innerHTML = '❮';
    leftPager.onclick = () => changeSlide(-1);

    const rightPager = document.createElement('a');
    rightPager.classList.add('next');
    rightPager.innerHTML = '❯';
    rightPager.onclick = () => changeSlide(1);

    slideShowContainer.appendChild(leftPager);
    slideShowContainer.appendChild(rightPager);
};

const createBottomPager = () => {
    for (let i = 0; i < nrOfImgs; i++) {
        const spanElement = document.createElement('span');
        spanElement.classList.add('dot');
        spanElement.onclick = () => goToSlide(i + 1);
        bottomPager.appendChild(spanElement);
    }
};

imgDetails.forEach((imgDetail, idx) => {
    createSlide(imgDetail, idx);
});
createPager();
createBottomPager();

showSlide(slideIndex);

function changeSlide(direction) {
    showSlide(slideIndex += direction);
}

function goToSlide(num) {
    showSlide(slideIndex = num);
}

function showSlide(num) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (num > slides.length) {
        slideIndex = 1;
    }
    if (num < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

export { changeSlide, goToSlide };