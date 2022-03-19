const clock = document.getElementById("clock")
function updateClock() {
    const currentTime = new Date();
    clock.innerText = currentTime.toTimeString();
}

function startInterval(func, delay) {
    func();
    setInterval(func, delay);
  }
  
  startInterval(updateClock, 1000);