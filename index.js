setInterval( () => {
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    
    hrot = 30 * hour + minute / 2;
    mrot = 6 * minute;
    srot = 6 * second;

    var hr=document.getElementById("hours");
    var min=document.getElementById("minutes");
    var sec=document.getElementById("seconds");


    hr.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;

},1000);