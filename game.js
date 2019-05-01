class Game {
    constructor(width = 4, height = 4) {
        this.board = new Board(width, height)
        this.controls = new Controls(this.board)

        Draw.drawBoard(this.board.getFields())
    }
}
