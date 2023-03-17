

let date;
let hrs;
let mins;
let secs;

let printableHrs;
let printableMins;
let printableSecs;
let ampm;

let hrsRotation;
let minsRotation;
let secondsRotation;
//     console.log(`${hrs}:${mins}:${seconds}`);
//     index++;
// }

const hrHand = document.getElementById("clock-hr");
const minHand = document.getElementById("clock-min");
const secHand = document.getElementById("clock-sec");
const AMorPM = document.getElementById("AMorPM");
setInterval(() => {
    date = new Date();
    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();
    
    if (hrs >= 12) {
        ampm = "PM";
        hrs-=12;
    }
    else {
        ampm = "AM";
    }
    printableHrs = hrs <= 9 ? "0" + hrs : hrs;
    printableMins = mins <= 9 ? "0" + mins : mins;
    printableSecs = secs <= 9 ? "0" + secs : secs;
  
    
    AMorPM.innerText = `${printableHrs}:${printableMins}:${printableSecs} ${ampm}`;
    
    console.log(AMorPM.innerText);
    // seconds/60 >> +1 degree max (not a full minute jump)
    // seconds/10 >> + 6 degree max (full minute jump)
    secHand.style.transform = `translate(-50%, -100%) rotate(${secs*6}deg)`;
    minHand.style.transform = `translate(-50%, -100%) rotate(${mins*6+secs/10}deg)`;
    hrHand.style.transform = `translate(-50%, -100%) rotate(${hrs*30+mins/2+secs/120}deg)`
}, 1000);


        const collection = document.getElementsByClassName("static-indicator");
        let degreeRotation = 0;
        let index = 0;
        const translateAmount = 32;
        for (const indicator of collection) {
            if (indicator.innerText == "6") { 
               indicator.style.transform = `translate(-50%, -50%) rotate(0deg) translateY(${translateAmount}vh)`;
            }   
            // else if (index%5 == 0) {
            //     indicator.style.transform = `translate(-50%, -50%) rotate(${degreeRotation}deg) translateY(-${translateAmount}vh)`;
            // }
            else {
                indicator.style.transform = `translate(-50%, -50%) rotate(${degreeRotation}deg) translateY(-${translateAmount}vh)`;
            }
          //  } 
            degreeRotation+=6;
            index++;
        }
