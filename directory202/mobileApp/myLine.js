class MyLine {
    constructor(strokeColor, strokeWidth) {
        this.px = pwinMouseX
        this.py = pwinMouseY
        this.x = winMouseX
        this.y = winMouseY

        this.strokeColor = strokeColor
        this.strokeWidth = strokeWidth
    }
    show() {
        stroke(this.strokeColor)
        strokeWeight(this.strokeWidth)
        line(this.px, this.py, this.x, this.y)
    }
}
