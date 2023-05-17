function openCountDown() {
    const timeend = new Date('September, 22 2023 09:00');
    const today = new Date();
 
    const diff = timeend - today;
   
    
    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;
    
    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;
    
   

    const displayHour = Math.floor((diff % msInDay)/ msInHour);
    document.querySelector(".hours").textContent = displayHour;
  

    const displayMinute = Math.floor((diff % msInHour)/ msInMinute);
    document.querySelector(".minutes").textContent=displayMinute;
  

    const displaySecond = Math.floor((diff % msInMinute)/ msInSecond);
    document.querySelector(".seconds").textContent=displaySecond;
    

     if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timeID);
     openOpen();
}

}

let timeID = setInterval(openCountDown, 1000);
function  openOpen() {
    const heading = document.querySelector("#par");
    heading.textContent = "We are finally open!"
    heading.classList.add("open");
}
