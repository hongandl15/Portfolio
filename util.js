function reveal() {
    var reveals = document.querySelectorAll(".reveal"); 
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150; 
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
window.addEventListener("scroll", reveal);

function Myfunction(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    if (user == 
        //************************************************************************************ */
        "hongaan" && 
        //************************************************************************************ ************************************************************************************* *
        pass == 
        "hongandl15"){
        window.location.href = "home.html";
    }
    else document.getElementById("test").innerHTML = "Wrong user name or password";
}
