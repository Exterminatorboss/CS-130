/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const toggle = document.querySelector("#dyslexia-toggle")



const toggleEventHandler = (ev) => {
  document.body.classList.toggle("dyslexia-mode")
}

toggle.addEventListener('click', toggleEventHandler)