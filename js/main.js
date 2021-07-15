document.querySelector(".burger button").addEventListener("click", () => {
  $("nav .options").slideToggle(1000);
})

// let sources = [];
// document.querySelectorAll("img").forEach((v) => {
//   sources.push(v.src);
// })

// let links = [];

// sources.forEach((v, i) => {
//   let newLink = document.createElement("a");
//   newLink.href = v;
//   newLink.target = "_blank"
//   newLink.style.display = "block";
//   newLink.textContent = i;
//   links.push(newLink);
// })

// links.forEach((v, i) => {
//   document.querySelector("body").appendChild(v);
// })

// links.forEach((v) => {
//   v.addEventListener("click", () => {
//     v.remove();
//   })
// })