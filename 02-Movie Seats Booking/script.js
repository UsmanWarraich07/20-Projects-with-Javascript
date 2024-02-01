const container = document.querySelector
('.container');
const seats = document.querySelectorAll
('.row .seat:not(.occupied)');
const count = document.getElementById
('count');
const totalPrice = document.getElementById
('total');
const selectMovies = document.getElementById
('movie');
let ticketPrice = +selectMovies.value;
//update movies evantlistener
selectMovies.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
})
//update count and totle
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  totalPrice.innerText = ticketPrice * selectedSeatsCount;
}
//seats EventListener
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
})