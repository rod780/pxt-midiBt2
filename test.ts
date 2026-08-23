// Script de test de l'extension BLE-MIDI V2
bleMidi.initBleMidi()
let noteActive = false

basic.forever(function () {
    // Si on appuie sur le bouton A et qu'aucune note n'est en cours
    if (input.buttonIsPressed(Button.A) && !noteActive) {
        
        // Appel de la fonction renommée pour envoyer un Do4 (Note 60)
        bleMidi.sendMidiNoteOn(1, 60, 127) 
        
        // Affichage d'une flèche vers le haut pour matérialiser le signal Note On
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        noteActive = true
    }
    // Si on relâche le bouton A alors qu'une note était active
    else if (!input.buttonIsPressed(Button.A) && noteActive) {
        
        // Appel de la fonction renommée pour couper le son
        bleMidi.sendMidiNoteOff(1, 60)
        
        // Efface l'écran LED pour confirmer l'arrêt de la note (Note Off)
        basic.clearScreen()
        noteActive = false
    }
    
    // Petite pause de sécurité pour soulager le processeur de la carte
    basic.pause(10) 
})
