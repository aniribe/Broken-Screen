document.addEventListener("click", function(e) {
  let body = document.querySelector("body");
  let audio = document.getElementById("audio");
  let broken = document.createElement("span");

  let x = e.offsetX;
  let y = e.offsetY;

  broken.style.left = x + "px";
  broken.style.top = y + "px";

  body.appendChild(broken);
  audio.play();
});
