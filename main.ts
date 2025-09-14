let A = 0
input.onButtonPressed(Button.A, function () {
    A = 1
})
function hund () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # # # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        `)
    basic.showLeds(`
        . # . . .
        # # # # .
        . # # # .
        . # . # .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    A = 0
})
function smil () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
    if (A == 1) {
        smil()
    } else {
        hund()
    }
})
