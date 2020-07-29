
let generateBtn = document.getElementById('generate');
let mealList = document.querySelector('.meal');
let resetBtn = document.querySelector('.btn-outline');

// Aos Js for Scroll Animation
AOS.init();

// Add button onclick event

generateBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mealList.classList.toggle('active');
  resetBtn.classList.add('active');

  if(!(mealList.classList.contains('active'))){
    resetBtn.classList.remove('active');
  }
})