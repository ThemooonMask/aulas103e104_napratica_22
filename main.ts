let contador = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(contador)
})
input.onButtonPressed(Button.B, function () {
    contador = 0
})
function sinalizar () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        sinalizar()
        contador += 1
        music.ringTone(262)
        basic.pause(8)
        music.stopAllSounds()
    }
})
