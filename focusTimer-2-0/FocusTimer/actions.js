import state from './state.js'
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'


export function toggleRunning(){
    state.isRunning=document.documentElement.classList.toggle('running')
    timer.countDonw()
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning= false
    document.documentElement.classList.remove('running','music-on')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
    stopAudio()
}

export function set(){
    elements.minutes.setAttribute('contenteditable',true)
    elements.minutes.focus()
    sounds.buttonPressAudio.play()
}
export function stopAudio(){

    sounds.coffeeAudio.pause()
    sounds.fireAudio.pause()
    sounds.florestAudio.pause()
    sounds.rainAudio.pause()
}
export function toggleMusic(audio){
    
    stopAudio()
    
    state.isMute= document.documentElement.classList.toggle('music-on')
    if(state.isMute){
        sounds[audio].play()
        
        return
    }
    sounds.bgAudio.pause()
    //console.log(state.isMute)
}   

export function plusFive(){
    timer.plusFive()
}

export function minusFive(){
    timer.minusFive()
}
export function cleanClass(){
     const hmtlClass = document.documentElement
     hmtlClass.className= ''
}

export function rainMode(){
   
    if(!document.querySelector('html').classList.contains('rain')){
        //sounds.bgAudio.pause()
        document.querySelector('html').classList.remove('music-on')
    }

    document.querySelector('html').classList.remove('fire','florest','coffee')
    document.querySelector('html').classList.toggle('rain');
    toggleMusic('rainAudio')
    //toggleMusic('rainAudio')
    /*state.isMute= document.documentElement.classList.toggle('music-on')
    if(state.isMute){
        sounds.rainAudio.play()
        return
    }
    sounds.rainAudio.pause()*/
}

export function fireMode(){
    if(!document.querySelector('html').classList.contains('fire')){
        //sounds.bgAudio.pause()
        document.querySelector('html').classList.remove('music-on')
    }
    document.querySelector('html').classList.remove('rain','florest','coffee','music-on')
    document.querySelector('html').classList.toggle('fire')
   // document.querySelector('html').classList.remove('florest','rain','coffee')
   
   toggleMusic('fireAudio')
}   

export function florestMode(){
    if(!document.querySelector('html').classList.contains('florest')){
        //sounds.bgAudio.pause()
        document.querySelector('html').classList.remove('music-on')
    }
    document.querySelector('html').classList.toggle('florest')
    document.querySelector('html').classList.remove('rain','fire','coffee')
    
    toggleMusic('florestAudio')

}

export function coffeeMode(){
    if(!document.querySelector('html').classList.contains('coffee')){
        //sounds.bgAudio.pause()
        document.querySelector('html').classList.remove('music-on')
    }
    
    document.querySelector('html').classList.remove('rain','fire','florest')

    document.querySelector('html').classList.toggle('coffee')
    
    
    toggleMusic('coffeeAudio')
}