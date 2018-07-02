
changeTime();
setInterval(changeTime, 1000);

function changeTime()
{
    var x = new Date(); 
    var h = x.getHours(); 
    var m = x.getMinutes(); 
    var s = x.getSeconds(); 
    document.getElementById("second-hand").style.transform = "rotate("+timeshift(s)+"deg)";
    document.getElementById("min-hand").style.transform = "rotate("+timeshift(m)+"deg)";
    document.getElementById("hour-hand").style.transform = "rotate("+hourshift(h)+"deg)";
}

function hourshift(time)
{
    if(time>12)
    {
        time = time - 12;
    }
    return (time/12*360)+90;
}

function timeshift(time)
{
    return (time/60*360)+90;
}


