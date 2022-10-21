var dropdownLinks = document.querySelectorAll(".dropdown-link");
var navMenu = document.querySelector(".profile-wrapper");

// sidebar dropdown click function
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", (e) => {
    let dropdownParent = e.target.parentElement.parentElement;
    dropdownParent.classList.toggle("show");
    // console.log(dropdownParent)
  });
}

// // nav dropdown click function
// navMenu.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
// });
