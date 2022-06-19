document.getElementById("JShere").innerHTML = "JS is running";
var xhr = new XMLHttpRequest();
xhr.open("GET", "/srv", true);
xhr.send();
xhr.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
  if (xhr.readyState == 4 && xhr.status == 200) {
    document.getElementById("ReqAnswer").innerHTML = xhr.responseText;
  }
}
