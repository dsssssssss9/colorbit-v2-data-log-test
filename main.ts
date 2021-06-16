input.onButtonPressed(Button.A, function () {
    Logging = false
    colorbit_51bit.showColorIcon(ColorIcon.No, colorbit.colors(BitColors.Red))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Logging = true
})
let Logging = false
let colorbit_51bit: colorbit.Strip = null
colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Yellow))
datalogger.setColumns(["Volume", "Light"])
Logging = false
loops.everyInterval(200, function () {
    if (Logging) {
        colorbit_51bit.showColorIcon(ColorIcon.Heart, colorbit.colors(BitColors.Red))
        datalogger.logData([datalogger.createCV("Volume", input.soundLevel()), datalogger.createCV("Light", input.lightLevel())])
        colorbit_51bit.clear()
    }
})
