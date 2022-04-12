input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.X, 11)
            basic.pause(200)
            Sprite.change(LedSpriteProperty.Y, 2)
            Sprite.change(LedSpriteProperty.X, 1)
            basic.pause(200)
            Sprite.change(LedSpriteProperty.X, 1)
            basic.pause(200)
            Sprite.change(LedSpriteProperty.X, 1)
        }
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})
