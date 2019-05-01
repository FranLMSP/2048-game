class Draw {
    constructor() {

    }

    static drawBoard(field) {
        const table = document.getElementById('table')
        table.innerHTML = ''

        console.log(field)

        let drawFields = ''
        for(let y = 0; y < field.length; y++) {

            drawFields += '<tr>'

            for(let x = 0; x < field[y].length; x++) {
                drawFields += '<td>' + field[y][x] + '</td>'
            }

            drawFields += '</tr>'
        }

        console.log(drawFields)

        table.innerHTML = drawFields
    }
}
