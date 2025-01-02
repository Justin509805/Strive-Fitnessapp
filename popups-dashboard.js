document.querySelector('.add').addEventListener('click', () => {
    document.getElementById('popup').classList.add('show');
    document.querySelector('.overlay').classList.add('show');
  });
  
  document.getElementById('close-popup').addEventListener('click', () => {
    document.getElementById('popup').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show');
  });
  