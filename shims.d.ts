// Auto-generated. Do not edit.
declare namespace bleMidi {

    /**
     * Initialise le service BLE-MIDI
     */
    //% shim=bleMidi::init
    function init(): void;

    /**
     * Envoie une note MIDI active (Note On)
     */
    //% shim=bleMidi::sendNoteOn
    function sendNoteOn(channel: int32, note: int32, velocity: int32): void;

    /**
     * Envoie une fin de note MIDI (Note Off)
     */
    //% shim=bleMidi::sendNoteOff
    function sendNoteOff(channel: int32, note: int32): void;
}
