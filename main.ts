let Esteban = 0
let Nave = 0
input.onButtonPressed(Button.A, function () {
    Esteban += 1
    if (Esteban < 4) {
        basic.showString("T")
        basic.showNumber(input.temperature())
    }
    for (let index = 0; index < 4; index++) {
    	
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
    for (let index = 0; index < 4; index++) {
        basic.showString(receivedString)
    }
})
input.onButtonPressed(Button.B, function () {
    Nave += 1
    if (Nave < 4) {
        basic.showString("L")
        basic.showNumber(input.lightLevel())
    }
    if (Nave == 4) {
        radio.sendString("Mario")
        basic.showIcon(IconNames.Heart)
    }
    if (Nave == 5) {
        radio.sendString("" + (input.temperature()))
        Nave = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
