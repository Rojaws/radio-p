let Esteban = 0
let Nave = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("T")
    Esteban += 1
    for (let index = 0; index < 4; index++) {
        basic.showNumber(input.temperature())
    }
    if (Esteban == 4) {
        radio.sendString("Russ")
        Esteban = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("C")
    for (let index = 0; index < 4; index++) {
        basic.showNumber(input.compassHeading())
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("L")
    Nave += 1
    for (let index = 0; index < 4; index++) {
        basic.showNumber(input.lightLevel())
    }
    if (Nave == 4) {
        radio.sendString("Mario")
    }
    if (Nave == 5) {
        radio.sendString("" + (input.temperature()))
        Nave = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
