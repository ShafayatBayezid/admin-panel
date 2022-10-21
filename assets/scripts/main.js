var dropdownLinks = document.querySelectorAll(".dropdown-link");

// sidebar dropdown click function
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", (e) => {
    let dropdownParent = e.target.parentElement.parentElement;
    dropdownParent.classList.toggle("show");
    // console.log(dropdownParent)
  });
}

// // nav dropdown click function
// var navMenu = document.querySelector(".profile-wrapper");
// navMenu.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
// });

// navigation tab panel
var tabLists = document.querySelectorAll("ul.nav-tabs > li");
function onTabClick(tabClickEvent) {
  for (var i = 0; i < tabLists.length; i++) {
    tabLists[i].classList.remove("active");
  }
  var clickedTab = tabClickEvent.currentTarget;
  clickedTab.classList.add("active");
  tabClickEvent.preventDefault();
  var myContentPanes = document.querySelectorAll(".tab-pane");
  for (i = 0; i < myContentPanes.length; i++) {
    myContentPanes[i].classList.remove("active");
  }
  var anchorReference = tabClickEvent.target;
  var activePaneId = anchorReference.getAttribute("href");
  var activePane = document.querySelector(activePaneId);
  activePane.classList.add("active");
}
for (i = 0; i < tabLists.length; i++) {
  tabLists[i].addEventListener("click", onTabClick);
}


// sidebar hide / unhide
var togg = document.querySelector(".tgl-btn");
var sidebar = document.querySelector(".sidebar");
togg.addEventListener('click', ()=>{
  sidebar.classList.toggle("mini");
  togg.classList.toggle("mini");
})

// tab element is radio button active then highlight the text 
var radioSwitch = document.querySelectorAll(".slider");

for (let i = 0; i < radioSwitch.length; i++) {
  radioSwitch[i].addEventListener("click", (e) => {
    let switchParent = e.target.parentElement.parentElement;
    switchParent.classList.toggle("checked");
    console.log(switchParent)
  });
}