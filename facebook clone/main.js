//popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
})

var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
  container: 'body'
})
//gender select
if (window.location.pathname === '/')
{
  const radiobtn1=document.querySelector("#flexRadioDefault1")
  const radiobtn2=document.querySelector("#flexRadioDefault2")
  const radiobtn3=document.querySelector("#flexRadioDefault3")
  const genderselect = document.querySelector("#genderselect")

  radiobtn1.addEventListener("change",()=>{
    genderselect.classList.add('d-none')

  })
  
  radiobtn2.addEventListener("change",()=>{
    genderselect.classList.add('d-noned')

  })
  radiobtn3.addEventListener("change",()=>{
    genderselect.classList.add('d-noned')

  })
  



}