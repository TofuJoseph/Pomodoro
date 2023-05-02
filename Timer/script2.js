
// variables

let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')
let longTittle = document.getElementById('break')

let workTime = 1
let breakTime = 1
let longTime = 15

let seconds = "00"

// display
window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime;
    document.getElementById('seconds').innerHTML = seconds;

    workTittle.classList.add('active');
}

// start timer
function start() {

    // change button
    document.getElementById('start').style.display = "none"
    document.getElementById('reset').style.display = "block"



    // change the time
    seconds = 3;

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1;
    let longMinutes = longTime - 1;
    
    breakCount = 0;

    // countdown
    let timerFunction = () => {
        // change the display
        document.getElementById('minutes').innerHTML = workMinutes;
        document.getElementById('seconds').innerHTML = seconds;

        // start
        seconds = seconds - 1;

        if(seconds === 0) {
            workMinutes--;
            if(workMinutes === -1) {
              if(breakCount % 2 === 0) { // regular break
                workMinutes = breakMinutes;
                breakCount++;

                if(breakCount % 4 === 0) { // long break after 4 regular breaks
                  workMinutes = longBreakMinutes;
                  breakCount = 0; // reset break count

                  // change the panel
                  workTittle.classList.remove('active');
                  longBreakTittle.classList.add('active');

                } else {
                  // change the panel
                  workTittle.classList.remove('active');
                  breakTittle.classList.add('active');
                }

              } else { // back to work
                workMinutes = sessionMinutes;
                breakCount++;
                
                // change the panel
                breakTittle.classList.remove('active');
                workTittle.classList.add('active');
              }
            }
            seconds = 3;
          }
          

      


    }

    // start countdown
    setInterval(timerFunction, 1000); // 1000 = 1

}