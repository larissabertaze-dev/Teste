const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

<script>

const btns = document.querySelectorAll('.acc-btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;

    content.style.display =
      content.style.display === 'block' ? 'none' : 'block';
  });
});

</script>