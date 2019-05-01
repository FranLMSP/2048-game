class Board {
    constructor(width = 4, height = 4) {
        this.setSize(width, height)
        this.init()
    }

    setSize(width, height) {
        if(width <= 0 || height <= 0) {
            console.error('The size of the board must be higher than 0')
            this.width = 4
            this.height = 4
            return false
        }

        this.width = width
        this.height = height
    }

    init() {
        this.board = []
        for(let x = 0; x < this.width; x++) {
            this.board.push([])
            for(let y = 0; y < this.height; y++) {
                this.board[x].push(0);
            }
        }
    }
}
