// Script de test de l'extension BLE-MIDI
bleMidi.init()
let noteActive = false

basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !noteActive) {
        bleMidi.sendNoteOn(1, 60, 127) // Envoie un Do4 (Note 60)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        noteActive = true
    }
    else if (!input.buttonIsPressed(Button.A) && noteActive) {
        bleMidi.sendNoteOff(1, 60)
        basic.clearScreen()
        noteActive = false
    }
    basic.pause(10) // Un poil plus de pause soulage le processeur
})
