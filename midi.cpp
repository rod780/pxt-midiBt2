#include "pxt.h"
#include "MicroBit.h" // Obligatoire pour utiliser uBit

namespace bleMidi {
    bool initialized = false;

    //%
    void init() {
        if (initialized) return;

        // Note CODAL : Sous micro:bit V2, la pile logicielle MakeCode configure
        // et réveille automatiquement l'antenne radio/Bluetooth dès lors que 
        // la dépendance "bluetooth" est déclarée dans le pxt.json.

        initialized = true;
    }

    //%
    void sendNoteOn(int channel, int note, int velocity) {
        if (!initialized) init();

        // Sécurité CODAL : on vérifie que le Bluetooth est actif et qu'un client est connecté
        if (uBit.ble && uBit.ble->getConnected()) {
            
            // Le protocole MIDI utilise des canaux allant de 0 à 15.
            // Votre bloc MakeCode donnant de 1 à 16, on applique un décalage de -1.
            uint8_t midiStatus = 0x90 | ((channel - 1) & 0x0F);
            
            // Structure officielle obligatoire d'un paquet BLE-MIDI (5 octets) :
            // [Header (0x80), Timestamp_Low (0x80), Status, Note, Velocity]
            uint8_t packet[5] = {
                0x80, 
                0x80, 
                midiStatus, 
                (uint8_t)(note & 0x7F), 
                (uint8_t)(velocity & 0x7F)
            };

            // TODO: Brancher ici la notification vers votre caractéristique GATT MIDI customisée.
            // Exemple : monServiceMidiCharacteristic->notify(packet, 5);
        }
    }

    //%
    void sendNoteOff(int channel, int note) {
        if (!initialized) init();

        if (uBit.ble && uBit.ble->getConnected()) {
            
            uint8_t midiStatus = 0x80 | ((channel - 1) & 0x0F);
            
            // Pour un Note Off standard, la vélocité finale est mise à 0
            uint8_t packet[5] = {
                0x80, 
                0x80, 
                midiStatus, 
                (uint8_t)(note & 0x7F), 
                0x00
            };

            // TODO: Brancher ici la notification vers votre caractéristique GATT MIDI customisée.
            // Exemple : monServiceMidiCharacteristic->notify(packet, 5);
        }
    }
}
        (void)note;

        // Le code CODAL d'envoi du paquet MIDI sera intégré ici
    }
}
