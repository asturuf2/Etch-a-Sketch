const container = document.querySelector("#container")

const grid = (number) => {
    for (let i = 0; i < number; i++){
        const row = document.createElement('div')
        row.classList.add('row')
        container.appendChild(row)

        for (let v = 0; v < number; v++){
            const heightAndWidth = 960 / number
            const column = document.createElement('div')
            column.classList.add('column')
            column.style.width = `${heightAndWidth}px`
            column.style.height = `${heightAndWidth}px`
            row.appendChild(column)
        }
    }
}

grid(16)

