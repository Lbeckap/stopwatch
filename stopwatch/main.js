//4 functions: start, stop, reset, displaytime

let state = "new"; //new, running, stopped
let interval;
let starttime;
let stoptime;

function start() {
    console.log('start');
    if (state === "running") {
        return;
    }

    interval = setInterval(displayTime, 100); //increase milliseconds by 100

    if (state === "new") {
        starttime = Date.now();
    }

    else {
        starttime += (Date.now() - stoptime);
    }
    state = "running";

    displayTime();
}

function stop() {
    console.log('stop');
    if (state === "stop" || state === "new") {
        return;
    }

    stoptime = Date.now();
    
    state = "stopped";

    clearInterval(interval);
}

function reset() {
    console.log('reset');
    
        stoptime = Date.now();
        starttime = Date.now();

        if (state === "running") {
            clearInterval(interval);

        }

        state = "new";
        
        displayTime();
    
}

function displayTime() {
    let now = Date.now() - starttime;
    let hours = Math.floor(now / (60 * 60 * 1000));
    let minutes = Math.floor((now / (60 * 1000)) % 60);
    let seconds = Math.floor((now / 1000) % 60);
    let milliseconds = now % 1000;

    let timeString = hours.toString().padStart(2, '0') 
    + ':' + minutes.toString().padStart(2, '0')
    + ':' + seconds.toString().padStart(2, '0')
    + '.' + milliseconds.toString().padStart(3, '0');

    document.getElementById("time").textContent = timeString;
}
