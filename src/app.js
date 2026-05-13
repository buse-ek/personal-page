const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let slideIndices = {};

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

document.addEventListener('DOMContentLoaded', () => {
    const goalItems = document.querySelectorAll('.goal-item');

    goalItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all goal items
            goalItems.forEach(el => {
                if (el !== item) { // Ensure that the clicked item is not affected
                    el.classList.remove('active');
                }
            });

            // Toggle 'active' class on the clicked goal item
            item.classList.toggle('active');
        });
    });
});


function showSlides(slider, index) {
    const slidesEl = slider.querySelector('.slides');
    const slidesArray = Array.from(slidesEl.getElementsByClassName('slide'));
    if (index >= slidesArray.length) index = 0;
    else if (index < 0) index = slidesArray.length - 1;
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
    return index;
}

function moveSlide(n, btn) {
    const slider = btn.closest('.image-slider');
    const id = Array.from(document.querySelectorAll('.image-slider')).indexOf(slider);
    if (slideIndices[id] === undefined) slideIndices[id] = 0;
    slideIndices[id] += n;
    slideIndices[id] = showSlides(slider, slideIndices[id]);
}