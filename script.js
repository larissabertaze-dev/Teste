const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        answer.style.display =
            answer.style.display === "block" ? "none" : "block";
    });
});

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {

    const item = header.parentElement;

    item.classList.toggle('active');

  });
});
