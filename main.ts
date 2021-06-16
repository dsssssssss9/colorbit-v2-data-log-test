input.onButtonPressed(Button.A, function () {
    Logging = false
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Logging = true
})
let Logging = false
let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Green))
datalogger.setColumns(["Volume", "Light"])
Logging = false
loops.everyInterval(1000, function () {
    if (Logging) {
        basic.showIcon(IconNames.Heart)
        datalogger.logData([datalogger.createCV("Volume", input.soundLevel()), datalogger.createCV("Light", input.lightLevel())])
        basic.showIcon(IconNames.Heart)
    }
})
