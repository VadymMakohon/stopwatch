let timeBegan = null; // did the clock start?
let timeStopped = null; // at what time was the timer stopped?
let stoppedDuration = 0; // how long was the timer stopped?
let startInterval = null; // this is needed to stop the startInterval() method
let flag = false; // to control the start/stop of the timer

const time = document.querySelector("#time")
const startBtn = document.querySelector("#start")
const resetBtn = document.querySelector("#reset")

let hour = document.querySelector("#hour")
let minute = document.querySelector("#minute")
let second = document.querySelector("#second")
let millisecond = document.querySelector("#millisecond")


startBtn.addEventListener("click", () => {
    if (!flag) {
        start()
        flag = true
        startBtn.innerHTML = "Pause"
    } else {
        stop()
        flag = false
        startBtn.innerHTML = "Start"
    }
})

resetBtn.addEventListener("click", () => {
    reset()
    startBtn.innerHTML = "Start"
})