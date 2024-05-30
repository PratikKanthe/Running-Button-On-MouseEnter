let btn = document.getElementById("btn");
let caller = document.getElementById("move");
let isMoving = true;
let caught = false;

function foo() {
  var randX = Math.floor(Math.random() * (window.innerWidth - 100));
  var randY = Math.floor(Math.random() * (window.innerHeight - 100));
  console.log([randX, randY]);
  caller.style.transition = "left 0.4s ease, top 0.4s ease";
  caller.style.left = randX + "px";
  caller.style.top = randY + "px";
}

caller.addEventListener("mouseenter", function () {
  if (isMoving) {
    foo();
  }
});

caller.addEventListener("click", function () {
  if (isMoving) {
    alert("You did it!");
    caught = true;
  } else {
    alert("Better Luck Next Time!");
  }
});

btn.addEventListener("click", function () {
  if (isMoving) {
    isMoving = false;
    caller.style.transition = "";
    btn.innerText = "Start";
  } else {
    isMoving = true;
    caught = false;
    btn.innerText = "Stop";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  foo();
});
