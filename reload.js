let count = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert(++count);
  });
});

window.addEventListener("load", () => {
    count = 0;
});