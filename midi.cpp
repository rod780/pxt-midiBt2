#include "pxt.h"
#include "MicroBitConfig.h"

namespace bleMidi {
    bool initialized = false;

    void init() {
        if (initialized) return;

        #if MICROBIT_CODAL
            // Réveille l'antenne publicitaire Bluetooth de la V2
            uBit.bleManager.advertise();
        #endif

        initialized = true;
    }

    void sendNoteOn(int channel, int note, int velocity) {
        if (!initialized) init();

        // Élimine de manière standard le warning "Unused parameter" qui fait planter MakeCode
        (void)channel;
        (void)note;
        (void)velocity;

        #if MICROBIT_CODAL
            // Le tampon d'exécution sera branché ici après validation de la structure
        #endif
    }

    void sendNoteOff(int channel, int note) {
        if (!initialized) init();

        // Élimine de manière standard le warning "Unused parameter" qui fait planter MakeCode
        (void)channel;
        (void)note;

        #if MICROBIT_CODAL
            // Le tampon d'exécution sera branché ici après validation de la structure
        #endif
    }
}