class Board {
    constructor(width = 4, height = 4) {
        this.setSize(width, height)
        this.init()

        this.generateNumber(null, true)
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

        this.moved = false
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

    generateNumber(number = null, force = false) {
        if(force || this.moved) {

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
    }

    getFields() {
        return this.board
    }

    /*

    TODO OPTIMIZATION

    move(direction) {

        const breaker = (number, finish, increasing) => {
            if(increasing) {
                return number < finish
            } else {
                return number >= 0
            }
        }

        let xMultiplier = 1; // TODO (for optimization)
        let yMultiplier = 1;
        let xStart = 0;
        let yStart = 0;
        switch(direction) {
            case 'up':
                yStart = this.height - 1
                yMultiplier = -1
                break
            case 'down':
                break
            case 'left':
                xStart = -1
                xMultiplier = -1
                break
            case 'right':
                break
            default:
                console.error("Illegal move")

        }
        let y = yStart
        let x = xStart

        let remember = [[0,0]]

        for(y; breaker(y, this.height, yMultiplier > 0 ? true : false); y += yMultiplier) {
            for(x; breaker(x, this.width, xMultiplier > 0 ? true : false); x += xMultiplier) {

                if(this.board[y][x] != 0) {
                    if(y)
                }



            }
        }
    }

    */

    move(direction) {

        switch(direction) {
            case 'up':
                this.moveUp()
                break
            case 'down':
                this.moveDown()
                break
            case 'left':
                break
            case 'right':
                break
            default:
                console.error("Illegal move")

        }

        this.generateNumber()
    }

    moveDown() {
        let last = this.height -1
        this.moved = false

        for(let x = 0; x < this.width; x++) {
            last = this.height -1
            for(let y = this.height - 2 ; y >= 0; y--) {

                if(this.board[y][x] != 0) {
                    if(this.board[last][x] == 0 || this.board[y][x] == this.board[last][x]) {
                        this.board[last][x] += this.board[y][x]
                        if(last > 1) {
                            last--
                        }

                        this.board[y][x] = 0
                        this.moved = true
                    } else {
                        while(this.board[last][x] != 0 && last > y) {
                            last--
                            if(this.board[last][x] == 0) {
                                this.board[last][x] = this.board[y][x]
                                this.board[y][x] = 0
                                this.moved = true
                            }
                        }
                    }
                }

            }
        }
    }

    moveUp() {
        let last = 0
        this.moved = false

        for(let x = 0; x < this.width; x++) {
            last = 0
            for(let y = 1 ; y < this.height; y++) {

                if(this.board[y][x] != 0) {
                    if(this.board[last][x] == 0 || this.board[y][x] == this.board[last][x]) {
                        this.board[last][x] += this.board[y][x]
                        if(last < this.height-1) {
                            last++
                        }

                        this.board[y][x] = 0
                        this.moved = true
                    } else {
                        while(this.board[last][x] != 0 && last < y) {
                            last++
                            if(this.board[last][x] == 0) {
                                this.board[last][x] = this.board[y][x]
                                this.board[y][x] = 0
                                this.moved = true
                            }
                        }
                    }
                }

            }
        }
    }

}
