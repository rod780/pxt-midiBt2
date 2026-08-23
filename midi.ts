//% color="#4C1D95" icon="\uf001" block="Bluetooth MIDI V2"
namespace bleMidi {
    
    //% block="initialiser le service BLE-MIDI"
    //% shim=bleMidi::initBleMidi
    export function initBleMidi(): void {
        return; // Strictement vide pour ne pas interférer avec le Bluetooth natif
    }

    //% block="envoyer Note On canal %channel note %note velocite %velocity"
    //% channel.min=1 channel.max=16 note.min=0 note.max=127 velocity.min=0 velocity.max=127
    //% shim=bleMidi::sendMidiNoteOn
    export function sendMidiNoteOn(channel: number, note: number, velocity: number): void {
        return;
    }

    //% block="envoyer Note Off canal %channel note %note"
    //% channel.min=1 channel.max=16 note.min=0 note.max=127
    //% shim=bleMidi::sendMidiNoteOff
    export function sendMidiNoteOff(channel: number, note: number): void {
        return;
    }
}
