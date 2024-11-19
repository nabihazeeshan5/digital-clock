
let hr = document.querySelector('#hrs');
let min = document.querySelector('#min'); 
let sec = document.querySelector('#sec');

// setInterval(() =>{
//  let day = new Date();
// let hh = day.getHours() * 30;
// let mn = day.getMinutes() * 6;
// let ss = day.getSeconds() * 6; 

// hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
//  mn.style.transform = `rotateZ(${mm}deg)`;
//  ss.style.transform = `rotateZ(${ss}deg)`;

// })

// let day = new Date();
// let hh = day.getHours() * 30;
// let mn = day.getMinutes() * 6;
// let ss = day.getSeconds() * 6; 

// hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
//  mn.style.transform = `rotateZ(${mm}deg)`;
//  ss.style.transform = `rotateZ(${ss}deg)`;

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + mn / 12}deg)`;
    min.style.transform = `rotateZ(${mn}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    // DIGITAL CLOCK
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let am = h >= 12 ? "PM" : "AM";

    if (h > 12) h -= 12;

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hour.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    AMPM.innerHTML = am;
}, 1000);


 // DIGITAL CLOCK  CODE
 let hour = document.getElementById('hour');
 let minutes = document.getElementById('minutes');  
 let seconds = document.getElementById('seconds');
 let AMpm = document.getElementById('AMPM');

 let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

 var am = h >= 12 ? 'pm' : 'AM';

 // convert 24 hrs Clock to 12 hrs Clock

 if(h > 12){
     h=h -12;
 }

 // add 0 before single digit Number

 h = (h < 10) ? "0" + h : h;
 m = (m < 10) ? "0" + m : m;
 s = (s < 10) ? "0" + s : s

 hour.innerHTML = h;
 minutes.innerHTML = m;
 seconds.innerHTML = s;
 ampm.innerHTML = am;