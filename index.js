counter = 0

var inc = document.getElementById("inc");
var dec = document.getElementById("dec");
var rst = document.getElementById("rst");
var cnt = document.getElementById("counter")

inc.addEventListener("click", () => {
  counter += 1;
  cnt.innerHTML = counter;
})

dec.addEventListener("click", () => {
  counter -= 1;
  cnt.innerHTML = counter;
})

rst.addEventListener("click", () => {
  counter = 0;
  cnt.innerHTML = counter;
})
