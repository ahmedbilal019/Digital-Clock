const hourEle = document.getElementById("hours");
const minuteEle = document.getElementById("minutes");
const secondEle = document.getElementById("seconds");
let ampmEle = document.getElementById("ampm");
updateClock();
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h >= 12 && h < 24) {
        if (h > 12) {
            h = h - 12;
        }
        ampm = "PM";
    }
    else {
        if (h == 24) {
            h = 12; 
        } else if (h < 12) {
           
        }
        ampm = "AM";
    }
    if (h < 10) {
        h = "0" + h;

    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    hourEle.innerText = h;
    minuteEle.innerText = m;
    secondEle.innerText = s;
    ampmEle.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}


