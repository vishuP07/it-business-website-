function showMore() {
  let cards = document.querySelectorAll('.extra-card');

  cards.forEach(function(card) {
    card.classList.remove('d-none');
  });
}
function showMore() {
  let cards = document.querySelectorAll('.extra-card');
  let btn = document.querySelector('.view-btn');

  cards.forEach(function(card) {
    card.classList.toggle('d-none');
  });

  if (btn.innerText === "View More") {
    btn.innerText = "View Less";
  } else {
    btn.innerText = "View More";
  }
}
