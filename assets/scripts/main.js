// sidebar dropdown click function
var dropdownLinks = document.querySelectorAll(".dropdown-link");
for (let i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].addEventListener("click", (e) => {
    let dropdownParent = e.target.parentElement.parentElement;
    dropdownParent.classList.toggle("show");
  });
}

// sidebar hide / unhide
var toggleBtn = document.querySelector(".tgl-btn");
var sidebar = document.querySelector(".sidebar");
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("mini");
  toggleBtn.classList.toggle("mini");
});


// top-nav dropdown click function for responsive
var dropdownClick = document.querySelector(".profile-wrapper");
var navDrop = document.querySelector(".nav-drop-menu");
dropdownClick.addEventListener("click", () => {
  navDrop.classList.toggle("clicked");
});

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


// tab element is radio button active then highlight the text
var radioSwitch = document.querySelectorAll(".slider");
for (let i = 0; i < radioSwitch.length; i++) {
  radioSwitch[i].addEventListener("click", (e) => {
    let switchParent = e.target.parentElement.parentElement;
    switchParent.classList.toggle("checked");
  });
}
