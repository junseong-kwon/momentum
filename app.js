const h1 = document.querySelector("div.hello:first-child h1");

function hangleTitleClick() {
  console.log("mouse click!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function hangleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function hangleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function hangleWindowCopy() {
  alert("copier!");
}

function hangleWindowPaste() {
  alert("paste!!!!");
}

function hangleWindowOffline() {
  alert("SoS no WIFI");
}

function hangleWindowOnline() {
  alert("Good WIFI");
}

h1.addEventListener("click", hangleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", hangleMouseLeave);

window.addEventListener("resize", hangleWindowResize);
window.addEventListener("copy", hangleWindowCopy);
window.addEventListener("paste", hangleWindowPaste);
window.addEventListener("offline", hangleWindowOffline);
window.addEventListener("online", hangleWindowOnline);
