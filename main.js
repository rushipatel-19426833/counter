// set initial count to 0
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      // decrease the count number if clicked on decrease button.
      count--;
    } else if (styles.contains("increase")) {
      // increase the count number if clicked on the increase button.
      count++;
    } else {
      // if increse and decrease button not clicked show counter as 0.
      count = 0;
    }
    if (count > 0) {
      // If the counter value is more than 0 change number to green.
      value.style.color = "green";
    }
    if (count < 0) {
      // If the counter value is less than 0 change the number to red.
      value.style.color = "red";
    }
    if (count === 0) {
      // If the counter value is equal to 0 than make the number black.
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
