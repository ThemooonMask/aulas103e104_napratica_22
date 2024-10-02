let timer = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(timer)
})
input.onButtonPressed(Button.B, function () {
    timer = 0
})
function Sinalizar () {
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
        Sinalizar()
        timer += 1
        music.ringTone(523)
        basic.pause(100)
        music.stopAllSounds()
    }
})
