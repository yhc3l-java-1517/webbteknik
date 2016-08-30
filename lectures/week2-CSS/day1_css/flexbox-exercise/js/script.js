document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.nav-menu').addEventListener('click', toggleMobileMenu);
});

function toggleMobileMenu (){
  document.querySelector('.nav-list').classList.toggle('nav-open');
};
