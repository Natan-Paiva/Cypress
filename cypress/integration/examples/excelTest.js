const ExcelJs = require("exceljs")

async function writeExcel(search, newValue, moveToPrice, filePath) {
    const workbook = new ExcelJs.Workbook()
    await workbook.xlsx.readFile(filePath)
    const worksheet = workbook.getWorksheet('Sheet1')
    
    const position = await readExcel(worksheet, search)

    const cell = worksheet.getCell(position.row, position.col+moveToPrice)
    cell.value = newValue
    await workbook.xlsx.writeFile(filePath)
}

async function readExcel(worksheet, search) {
    let position = {row: 0, col: 0}

    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            //console.log(cell.value)
            if (cell.value === search) {
                console.log(rowNumber + " " + colNumber)
                position.row = rowNumber
                position.col = colNumber
            }
        })
    })
    return position
}

//writeExcel("Mango", "Manga", 'C:/Users/Natan/Documents/excelJSUtil/exceltest.xlsx')

//change price
writeExcel("Iphone", 500000, 2,  'C:/Users/Natan/Documents/excelJSUtil/exceltest.xlsx')
