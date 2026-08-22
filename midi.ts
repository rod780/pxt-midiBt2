//% color="#4C1D95" icon="\uf001" block="Bluetooth MIDI V2"
namespace bleMidi {
    
    //% block="initialiser le service BLE-MIDI"
    //% shim=bleMidi::init
    export function init(): void {
        return;
    }

    //% block="envoyer Note On canal %channel note %note velocite %velocity"
    //% channel.min=1 channel.max=16 note.min=0 note.max=127 velocity.min=0 velocity.max=127
    //% shim=bleMidi::sendNoteOn
    export function sendNoteOn(channel: number, note: number, velocity: number): void {
        return;
    }

    //% block="envoyer Note Off canal %channel note %note"
    //% channel.min=1 channel.max=16 note.min=0 note.max=127
    //% shim=bleMidi::sendNoteOff
    export function sendNoteOff(channel: number, note: number): void {
        return;
    }
}
