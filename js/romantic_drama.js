

window.alert("welcome to our website ,click ok to continue"); const ratingStars = [...document.getElementsByClassName("rating__star")];



function showClickTime(){
    var Digital=new Date()
  var hours=Digital.getHours()
  var minutes=Digital.getMinutes()
  var seconds=Digital.getSeconds()
  var clockd="AM" 


  if (hours>12){
   clockd="PM"
   hours=hours-12
  }
  if (hours==0)
   hours=12
  if (minutes<=9)
   minutes="0"+minutes
  if (seconds<=9)
   seconds="0"+seconds
   var clocktime=hours+":"+minutes+":"+seconds+" "+clockd
   clockSpan.innerHTML="<b style='font-size:40;color:white;'>"+clocktime+"</b>"
   setTimeout("showClickTime()",1000)
}
window.onload=showClickTime;

  
  
  

