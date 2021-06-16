let colorbit_51bit = colorbit.initColorBit(DigitalPin.P2, BitColorMode.RGB)
colorbit_51bit.setBrightness(32)
colorbit_51bit.clear()
colorbit_51bit.showColorIcon(ColorIcon.ChristmasTree, colorbit.colors(BitColors.Blue))
basic.forever(function () {
	
})
