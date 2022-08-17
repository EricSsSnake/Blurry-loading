let sum = 0;

const percentage = setInterval(() => {
  sum++;
  const message = sum + "%";
  if (sum == 100) {
    stop();
  }
  document.getElementById("percentage").innerHTML = message;
  console.log(sum);
}, 25);

function stop() {
  clearInterval(percentage);
}
