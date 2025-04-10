// JavaScript for FAQ toggles
document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.faq-question');
  
  questions.forEach(question => {
      question.addEventListener('click', function() {
          // Toggle active class on the question
          this.classList.toggle('active');
          
          // Toggle active class on the answer
          const answer = this.nextElementSibling;
          answer.classList.toggle('active');
      });
  });
});