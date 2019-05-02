class Draw {
    constructor() {

    }

    static drawBoard(field, xGenerated = null, yGenerated = null) {
        const table = document.getElementById('table')
        table.innerHTML = ''

        let drawFields = ''
        let classString = ''
        for(let y = 0; y < field.length; y++) {

            drawFields += '<tr>'

            for(let x = 0; x < field[y].length; x++) {
                if(x === xGenerated && y === yGenerated) {
                    classString = 'class="generated"'
                } else if(field[y][x] <= 1024) {
                    classString = 'class="background'+field[y][x]+'"'
                } else {
                    classString = 'class="background"'
                }

                drawFields += '<td '+classString+'>' + field[y][x] + '</td>'
            }

            drawFields += '</tr>'
        }

        table.innerHTML = drawFields
    }
}
