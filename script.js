
let beats = {
    "65": {
        beat: new Beat("./Piano Chord 331.mp3"),
        button: new Button("#FFFF00", 65)
    },
    "83": {
        beat: new Beat("./Piano Chord 209.mp3"),
        button: new Button("#FFFF00", 83)
    },
    "68": {
        beat: new Beat("./Piano Chord 208.mp3"),
        button: new Button("#FFFF00", 68)
    },
    "70": {
        beat: new Beat("./Drum Sticks Hit 3.mp3"),
        button: new Button("#FFFF00", 70)
    },
    "71": {
        beat: new Beat("./Drum Snare Roll.mp3"),
        button: new Button("#FFFF00", 71)
    },
    "72": {
        beat: new Beat("./PREL Musical 57.mp3"),
        button: new Button("#FFFF00", 72)
    },
    "74": {
        beat: new Beat("./Cymbal Suspended 2.mp3"),
        button: new Button("#FFFF00", 74)
    },
    "75": {
        beat: new Beat("./Musical Compos 33.mp3"),
        button: new Button("#FFFF00", 75)
    },
    "76": {
        beat: new Beat("./Musical Orches 4.mp3"),
        button: new Button("#FFFF00", 76)
    }
}

triggerBeat = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
    }

}

const myBeat = document.querySelectorAll(".button");
console.log(myBeat);

myBeat.forEach(beat => {console.log(beat.id)})

myBeat.forEach(beat => beat.addEventListener('click', () => {
    let keyPress = beats[beat.id];
        keyPress.beat.play();
        keyPress.button.select();
        setTimeout(()=> {keyPress.button.deselect()},100)
}));

const end = (event) => {
    let keyCode = event.keyCode;
    if (keyCode in beats){
        let keyPress = beats[keyCode];
        keyPress.button.deselect();
    }

}

// document.addEventListener('keyup', end);

document.addEventListener('keydown', triggerBeat)