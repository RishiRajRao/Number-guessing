var count = 0;
function verifyNumber() {
  count++;
  let randomNum = Math.floor(Math.random() * 100) + 1;
  const inputEle = document.querySelector('input[type="text"]').value;
  if (randomNum !== inputEle)
    alert(`wrong choice with differennce of ${Math.abs(randomNum - inputEle)}`);
  if (count === 10) {
    alert(`You lost the game! start again`);
    count = 0;
  }
  // console.log(inputEle, randomNum);
}
const btnEle = document.querySelector('input[type="submit"]');
const inpuEle = document.querySelector('input[type="text"]');
btnEle.addEventListener("click", verifyNumber);
inpuEle.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    verifyNumber();
  }
});

// verifyNumber();
