function openPage(pageName, elmnt, color) {
  var i, tablinks;
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = "tablink";
  }
  document.getElementById(pageName).style.display = "block";
  
  name = "active";
  let arr = elmnt.className.split(" ");
  if (arr.indexOf(name) == -1) {
    elmnt.className += " " + name;
  }
}

window.openPage = openPage;
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();