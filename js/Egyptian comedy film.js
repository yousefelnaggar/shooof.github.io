function ya(){
  document.getElementById('demo2').style.display ="block";
    }
    function mo(){
      document.getElementById('demo3').style.display ="block";
    }
    function so(){
      document.getElementById('demo4').style.display ="block";
    }
    function oh(){
      document.getElementById('demo5').style.display ="block";
    }
    function messi(){
      document.getElementById('demo6').style.display ="block";
        }
        

function Readmore1(){
  var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}