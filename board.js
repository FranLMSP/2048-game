class Board {
    constructor(width = 4, height = 4) {
        this.setSize(width, height)
        this.init()

        this.generateNumber()
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
        for(let y = 0; y < this.height; y++) {
            this.board.push([])
            for(let x = 0; x < this.width; x++) {
                this.board[y].push(0);
            }
        }
    }

    generateNumber(number = null) {
        if(number === null) {
            number = Math.floor(Math.random() * Math.floor(2)) ? 2 : 4
        }
        let x = 0
        let y = 0
        do {
            x = Math.floor(Math.random() * Math.floor(this.width))
            y = Math.floor(Math.random() * Math.floor(this.height))
        } while(this.board[y][x] != 0)

        this.board[y][x] = number
    }

    getFields() {
        return this.board
    }
}
