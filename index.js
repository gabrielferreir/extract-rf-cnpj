const fs = require('fs');
const excel = require('excel4node');
const readline = require('readline');
const stream = require('stream');
const all = [];

async function extract() {
    console.log('---------Script iniciado---------');

    const instream = fs.createReadStream(`files/xaa`);
    const outstream = new stream();
    const rl = readline.createInterface(instream, outstream);

    rl.on('line', line => {
        all.push(extractOne(line));
    });

    rl.on('close', () => {
        const filter = all.filter(item => item.tipoDeResgistro !== '6' && item.tipoDeResgistro !== '2')
        console.log(filter.length);
        generateExcel(filter);
    })


    // const cnpjs = content.split('\n').map(item => {
    //     return extractOne(item);
    // }).filter(item => item.tipoDeResgistro !== '6' && item.tipoDeResgistro !== '2');
    //
    // generateExcel(cnpjs);

    console.log('---------Concluido---------\'');
}

function extractOne(data) {

    const tipoDeResgistro = data.substring(0, 1).trim();
    const indicadorFullDiario = data.substring(1, 2).trim();
    const tipoAtualizacao = data.substring(2, 3).trim();
    const cnpj = data.substring(3, 17).trim();
    const identificadorMatrizFilial = data.substring(17, 18).trim();
    const razaoSocial = data.substring(18, 168).trim();
    const nomeFantasia = data.substring(168, 223).trim();
    const situacaoCadastral = data.substring(223, 225).trim();
    const dataSituacaoCadastral = data.substring(225, 233).trim();
    const motivoSituacaoCadastral = data.substring(233, 235).trim();
    const nmCidadeExterior = data.substring(235, 290).trim();
    const coPais = data.substring(290, 293).trim();
    const nmPais = data.substring(293, 363).trim();
    const codigoNaturezaJuridica = data.substring(363, 367).trim();
    const dataInicioAtivadade = data.substring(367, 375).trim();
    const cnaeFiscal = data.substring(375, 382).trim();
    const descricaoTipoLogradouro = data.substring(382, 402).trim();
    const logradouro = data.substring(402, 462).trim();
    const numero = data.substring(462, 468).trim();
    const complemento = data.substring(468, 624).trim();
    const bairro = data.substring(624, 674).trim();
    const cep = data.substring(674, 682).trim();
    const uf = data.substring(682, 684).trim();
    const codigoMunicipio = data.substring(684, 688).trim();
    const municipio = data.substring(688, 738).trim();
    return {
        tipoDeResgistro,
        indicadorFullDiario,
        tipoAtualizacao,
        cnpj,
        identificadorMatrizFilial,
        razaoSocial,
        nomeFantasia,
        situacaoCadastral,
        dataSituacaoCadastral,
        motivoSituacaoCadastral,
        nmCidadeExterior,
        coPais,
        nmPais,
        codigoNaturezaJuridica,
        dataInicioAtivadade,
        cnaeFiscal,
        descricaoTipoLogradouro,
        logradouro,
        numero,
        complemento,
        bairro,
        cep,
        uf,
        codigoMunicipio,
        municipio
    }
}

async function generateExcel(cnpjs) {
    const workbook = new excel.Workbook();

    const worksheet = workbook.addWorksheet('Sheet 1');

    worksheet.cell(1, 1).string('tipoDeResgistro');
    worksheet.cell(1, 2).string('indicadorFullDiario');
    worksheet.cell(1, 3).string('tipoAtualizacao');
    worksheet.cell(1, 4).string('cnpj');
    worksheet.cell(1, 5).string('identificadorMatrizFilial');
    worksheet.cell(1, 6).string('razaoSocial');
    worksheet.cell(1, 7).string('nomeFantasia');
    worksheet.cell(1, 8).string('situacaoCadastral');
    worksheet.cell(1, 9).string('dataSituacaoCadastral');
    worksheet.cell(1, 10).string('motivoSituacaoCadastral');
    worksheet.cell(1, 11).string('nmCidadeExterior');
    worksheet.cell(1, 12).string('coPais');
    worksheet.cell(1, 13).string('nmPais');
    worksheet.cell(1, 14).string('codigoNaturezaJuridica');
    worksheet.cell(1, 15).string('dataInicioAtivadade');
    worksheet.cell(1, 16).string('cnaeFiscal');
    worksheet.cell(1, 17).string('descricaoTipoLogradouro');
    worksheet.cell(1, 18).string('logradouro');
    worksheet.cell(1, 19).string('numero');
    worksheet.cell(1, 20).string('complemento');
    worksheet.cell(1, 21).string('bairro');
    worksheet.cell(1, 22).string('cep');
    worksheet.cell(1, 23).string('uf');
    worksheet.cell(1, 24).string('codigoMunicipio');
    worksheet.cell(1, 25).string('municipio');

    cnpjs.forEach((item, index) => {
        worksheet.cell(index + 2, 1).string(item.tipoDeResgistro);
        worksheet.cell(index + 2, 2).string(item.indicadorFullDiario);
        worksheet.cell(index + 2, 3).string(item.tipoAtualizacao);
        worksheet.cell(index + 2, 4).string(item.cnpj);
        worksheet.cell(index + 2, 5).string(item.identificadorMatrizFilial);
        worksheet.cell(index + 2, 6).string(item.razaoSocial);
        worksheet.cell(index + 2, 7).string(item.nomeFantasia);
        worksheet.cell(index + 2, 8).string(item.situacaoCadastral);
        worksheet.cell(index + 2, 9).string(item.dataSituacaoCadastral);
        worksheet.cell(index + 2, 10).string(item.motivoSituacaoCadastral);
        worksheet.cell(index + 2, 11).string(item.nmCidadeExterior);
        worksheet.cell(index + 2, 12).string(item.coPais);
        worksheet.cell(index + 2, 13).string(item.nmPais);
        worksheet.cell(index + 2, 14).string(item.codigoNaturezaJuridica);
        worksheet.cell(index + 2, 15).string(item.dataInicioAtivadade);
        worksheet.cell(index + 2, 16).string(item.cnaeFiscal);
        worksheet.cell(index + 2, 17).string(item.descricaoTipoLogradouro);
        worksheet.cell(index + 2, 18).string(item.logradouro);
        worksheet.cell(index + 2, 19).string(item.numero);
        worksheet.cell(index + 2, 20).string(item.complemento);
        worksheet.cell(index + 2, 21).string(item.bairro);
        worksheet.cell(index + 2, 22).string(item.cep);
        worksheet.cell(index + 2, 23).string(item.uf);
        worksheet.cell(index + 2, 24).string(item.codigoMunicipio);
        worksheet.cell(index + 2, 25).string(item.municipio);
    });

    workbook.write('xaa.xlsx');

}

extract();
