$(function(){
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';
  
      // Fechar todos os outros
      document.querySelectorAll('.faq-answer').forEach(item => item.style.display = 'none');
  
      // Alternar o estado atual
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
  