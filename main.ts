let x = 0
let y = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        x += 1
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        y += 1
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        x += -1
        led.plot(x, y)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        y += -1
        led.plot(x, y)
        basic.pause(100)
    }
})
