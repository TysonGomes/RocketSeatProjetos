import state from "./state.js";
import * as elements from './elements.js'
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function updateDisplay(minutes,seconds){
  minutes=minutes ?? state.minutes  
  seconds= seconds ?? state.seconds

  elements.minutes.textContent=String(minutes).padStart(2,"0")
  elements.seconds.textContent=String(seconds).padStart(2,"0")
}

export function countDonw(){
    clearTimeout(state.countdownID)
    if (!state.isRunning){
        return
    }
    
    let minutes=Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    seconds--
    if(seconds<0){
        seconds=59
        minutes--
    }
    if(minutes<0){
        reset()
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes,seconds)
    state.countdownID=setTimeout(()=>countDonw(),1000)
}

export function plusFive(){
    let minutes =Number(elements.minutes.textContent)
    let seconds =Number(elements.seconds.textContent)
    minutes= minutes>55? 60:minutes+5
    seconds= minutes>59? 0:seconds
    updateDisplay(minutes,seconds)
}

export function minusFive(){
    let minutes =Number(elements.minutes.textContent)
    let seconds =Number(elements.seconds.textContent)
    minutes= minutes<5? minutes:minutes-5
    seconds= minutes>59? 0:seconds
    updateDisplay(minutes,seconds)
}