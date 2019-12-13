controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    rocky.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    randomsprites.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let rocky: Sprite = null
let randomsprites: Sprite = null
randomsprites = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f 1 1 1 1 1 f . . . . 
. . . . f 1 1 1 1 1 1 f . . f . 
f f . f 1 1 f 1 1 f 1 1 f . f . 
. f f f 1 1 1 1 1 1 1 1 f . f . 
. . . . f 1 1 1 f f f 1 f . f . 
. . . . . f 1 f 1 1 f f f . f . 
. . . . . . f 1 f f 1 f f f f . 
. . . . . . f 1 1 1 1 f . . . . 
. . . . . . . f 1 1 1 f . . . . 
. . . . . . . . f 1 1 f . . . . 
. . . . . . . . . f 1 f . . . . 
. . . . . . . . . . f . . . . . 
. . . . . . . . . . f . . . . . 
`, SpriteKind.Player)
randomsprites.setPosition(82, 44)
rocky = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b b . . . . . . 
. . . . . . b d b b b . . . . . 
. . . . . b d d b b b b . . . . 
. . . . . b d b b b b b . . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.splash("this is my rocky game")
forever(function () {
	
})
