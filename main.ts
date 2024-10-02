let Passos = 0
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 1500) {
        Passos += 1
        basic.showNumber(Passos)
    } else if (Passos == 15) {
        music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # . .
            . . . # .
            . . . . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Rabbit)
        basic.pause(100)
        basic.clearScreen()
        Passos = 0
    }
})
