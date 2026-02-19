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