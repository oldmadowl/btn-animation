const btn = document.querySelector('.present-btn');



btn.addEventListener('click', () => {
  btn.classList.add('present-btn--clicked');
})

 
const svgLength = document.getElementById('present-path').getTotalLength();
