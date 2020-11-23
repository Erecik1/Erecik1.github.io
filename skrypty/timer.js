function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    setTimeout(showTime, 1000);
    
}
showTime();