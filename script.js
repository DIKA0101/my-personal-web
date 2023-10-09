// text berganti
let typingEffect = new Typed(".multiText", {
  strings: ["Coders", "Students", "UI/UX Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500,
});

let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tabLinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
 
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
