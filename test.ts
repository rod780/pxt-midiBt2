// Collez le script de test directement ici dans test.ts
bleMidi.init()
let noteActive = false

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !noteActive) {
        bleMidi.sendNoteOn(1, 60, 127)
        noteActive = true
    } 
    else if (!input.buttonIsPressed(Button.A) && noteActive) {
        bleMidi.sendNoteOff(1, 60)
        noteActive = false
    }
    basic.pause(5)
})
