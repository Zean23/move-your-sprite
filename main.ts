input.onGesture(Gesture.LogoUp, function () {
    SPRITE.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    SPRITE.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    SPRITE.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    SPRITE.change(LedSpriteProperty.Y, -1)
})
let SPRITE: game.LedSprite = null
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
SPRITE = game.createSprite(2, 2)
basic.forever(function () {
	
})
