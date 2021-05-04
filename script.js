//selectors
const slider = document.querySelectorAll('.photo1')


//event listeners
window.addEventListener('scroll', checkSlide)


// functions
function checkSlide(e){

      for(i=0; i< slider.length; i++){

       const slideInAt= (window.scrollY+ window.innerHeight)- slider[i].offsetHeight/2;
      console.log(slideInAt)
       const imageBottom = slider[i].offsetTop + slider[i].offsetHeight;
       const isHalfShown = slideInAt>slider[i].offsetTop;
       const isNotScrolledPast = window.scrollY<imageBottom;

       if(isHalfShown && isNotScrolledPast){
           slider[i].classList.remove('active')
       }else{
           slider[i].classList.add('active')
       }
}
}