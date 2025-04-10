// JavaScript for FAQ toggles
document.addEventListener('DOMContentLoaded', function() {
  // alert("BIG DISCLAIMER: THE INFO HERE REFLECTS US INTRESTES, SOME POINTS ARE EXAGGERATED, DO NOT USE THIS FOR ACADEMIC RESEARCH")
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
