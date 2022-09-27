// analog clock 
const deg = 6;

const hr =document.querySelector('#time__hr');
const min =document.querySelector('#time__min');
const sec =document.querySelector('#time__sec');

setInterval(() => {
    let day = new Date();
    let hrs = day.getHours() * 30;
    let mins = day.getMinutes() * deg;
    let secs = day.getSeconds() * deg;


    hr.style.transform = `rotateZ(${(hrs)+ (mins/12)}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    sec.style.transform = `rotateZ(${secs}deg)`;
});

// digital clock 

const displayTime = () => {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.querySelector('#session');

    //24hrs clock
    // if(hrs >=12){
    //     session.innerHTML = 'PM';  
    // }else{
    //     session.innerHTML = 'AM';  
    // }

    //12hrs clock
    if(hrs > 12){
        hrs = hrs -12;
    }
    
    document.querySelector('#hours').innerHTML = hrs;
    document.querySelector('#minutes').innerHTML = min;
    document.querySelector('#seconds').innerHTML = sec;
    document.querySelector('#date').innerHTML = dateTime.toDateString();
}

setInterval(displayTime, 10);


