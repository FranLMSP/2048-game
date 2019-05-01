class Game {
    constructor(width = 4, height = 4) {
        this.board = new Board(width, height)

        Draw.drawBoard(this.board.getFields())
    }
}
