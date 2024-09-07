const slides =document.querySelectorAll(".slide")
//console.log(slides);
var counter=0;
slides.forEach((slide,index)=>{
  slide.style.left=`${index * 100}%`
}
)
 const gonext= ()=>{
  counter++
  slideimg()
 }
 const goprev= ()=>{
  counter--
  slideimg()
 }



const slideimg=()=>{
  slides.forEach(
    (slide)=>{
      slide.style.transform =`translateX(-${counter * 100}%)`
    }
  )
}