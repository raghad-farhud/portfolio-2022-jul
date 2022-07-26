let topArrow = document.querySelector(".top-arrow");
let downArrow = document.querySelector(".down-arrow");
let innerHeight = window.innerHeight;

topArrow.addEventListener("click", () => {
  window.scrollBy(0, -innerHeight);
})
downArrow.addEventListener("click", () => {
  window.scrollBy(0, innerHeight);
})

// slide effect

window.addEventListener('scroll' , slide);

function slide(){
    let slides = document.querySelectorAll('.slide');

    for (let i = 0; i < slides.length; i++){
        let windowHeight = window.innerHeight;
        let slideTop = slides[i].getBoundingClientRect().top;
        let slidePoint = 150 ;

        if ( slideTop < windowHeight - slidePoint){
          if (slides[i].classList.contains("slide-top")) {
            slides[i].classList.add('slide-top-active');
          } else {
            slides[i].classList.add('slide-right-left-active');
          }
        }
        else{
          if (slides[i].classList.contains("slide-top")) {
            slides[i].classList.remove('slide-top-active');
          } else {
            slides[i].classList.remove('slide-right-left-active');
          }
        }
    }
}