input.onGesture(Gesture.Shake, function () {
    Die += randint(1, 6)
    basic.showNumber(Die)
    basic.pause(200)
    basic.clearScreen()
})
let Die = 0
Die = 1
