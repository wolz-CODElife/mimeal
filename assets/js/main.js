let generateBtn = document.getElementById('generate');
let mealList = document.querySelector('.meal');
let resetBtn = document.querySelector('.btn-outline');

generateBtn.addEventListener('click', (e) => {
  console.log('clicked');
  e.preventDefault();
  mealList.classList.toggle('active');
  resetBtn.classList.add('active');
})