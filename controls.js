class Controls {
    constructor(board) {
        this.init(board)
    }

    init(board) {
        document.addEventListener('keydown', event => {

            switch(event.key) {
                case 'w':
                case 'ArrowUp':
                    board.move('up')
                    break
                case 's':
                case 'ArrowDown':
                    board.move('down')
                    break
                case 'a':
                case 'ArrowLeft':
                    board.move('left')
                    break
                case 'd':
                case 'ArrowRight':
                    board.move('right')
                    break
            }
        })
    }
}
