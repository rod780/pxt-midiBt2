#include "pxt.h"
#include "MicroBit.h" // Obligatoire pour utiliser uBit

namespace bleMidi {
    bool initialized = false;

    // L'attribut //% ci-dessous est STRICTEMENT obligatoire pour MakeCode
    //%
    void init() {
        if (initialized) return;

        // CODAL V2 initialise automatiquement la pile BLE et l'advertising.
        // Si vous devez instancier votre service GATT MIDI spécifique,
        // c'est ici qu'il faudra le déclarer (ex: new MicroBitMidiService(*uBit.ble);)

        initialized = true;
    }

    //%
    void sendNoteOn(int channel, int note, int velocity) {
        if (!initialized) init();

        // Neutralise proprement le warning "Unused parameter" 
        (void)channel;
        (void)note;
        (void)velocity;

        // Le code CODAL d'envoi du paquet MIDI sera intégré ici
    }

    //%
    void sendNoteOff(int channel, int note) {
        if (!initialized) init();

        // Neutralise proprement le warning "Unused parameter"
        (void)channel;
        (void)note;

        // Le code CODAL d'envoi du paquet MIDI sera intégré ici
    }
}
