const xl = require('excel4node');
const fs = require('fs');

const wb = new xl.Workbook();

const ws = wb.addWorksheet('Sheet 1');

const buf = fs.readFileSync('pesquisas/7739099.txt', "utf8").toString();

// console.log(buf);

ws.cell(1, 1).string('Cidade');
ws.cell(1, 2).string('UF');
ws.cell(1, 3).string('Quantidade');

const json = JSON.parse(buf);

json.forEach((item, index) => {
    ws.cell(index + 2, 1).string(item._id.municipio.toString());
    ws.cell(index + 2, 2).string(item._id.uf.toString());
    ws.cell(index + 2, 3).string(item.count.toString());
});

wb.write('pesquisas-excel/7739099.xlsx');