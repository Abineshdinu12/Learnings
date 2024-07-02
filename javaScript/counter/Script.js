let count = 0;

y;
function updateCounter() {
  const counterElement = document.getElementById("counter");
  counterElement.textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}

updateCounter();
