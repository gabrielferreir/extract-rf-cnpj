const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

async function extract() {
    console.log('---------Script iniciado---------');

    const instream = fs.createReadStream(`files/xba`);
    const outstream = new stream();
    const rl = readline.createInterface(instream, outstream);

    rl.on('line', line => {
        const json = extractOne(line);
        if (json.tipoDeResgistro === '1') {
            console.log(json);
            save(json);
        }
    });

    rl.on('close', () => {
        // const filter = all.filter(item => item.tipoDeResgistro !== '6' && item.tipoDeResgistro !== '2')
        // console.log(filter.length);
        // generateExcel(filter);
        console.log('---------Concluido---------\'');
    });
}

function extractOne(data) {

    const tipoDeResgistro = data.substring(0, 1).trim();
    const indicadorFullDiario = data.substring(1, 2).trim() || null;
    const tipoAtualizacao = data.substring(2, 3).trim() || null;
    const cnpj = data.substring(3, 17).trim() || null;
    const identificadorMatrizFilial = data.substring(17, 18).trim() || null;
    const razaoSocial = data.substring(18, 168).trim() || null;
    const nomeFantasia = data.substring(168, 223).trim() || null;
    const situacaoCadastral = data.substring(223, 225).trim() || null;
    const dataSituacaoCadastral = data.substring(225, 233).trim() || null;
    const motivoSituacaoCadastral = data.substring(233, 235).trim() || null;
    const nmCidadeExterior = data.substring(235, 290).trim() || null;
    const coPais = data.substring(290, 293).trim() || null;
    const nmPais = data.substring(293, 363).trim() || null;
    const codigoNaturezaJuridica = data.substring(363, 367).trim() || null;
    const dataInicioAtivadade = data.substring(367, 375).trim() || null;
    const cnaeFiscal = data.substring(375, 382).trim() || null;
    const descricaoTipoLogradouro = data.substring(382, 402).trim() || null;
    const logradouro = data.substring(402, 462).trim() || null;
    const numero = data.substring(462, 468).trim() || null;
    const complemento = data.substring(468, 624).trim() || null;
    const bairro = data.substring(624, 674).trim() || null;
    const cep = data.substring(674, 682).trim() || null;
    const uf = data.substring(682, 684).trim() || null;
    const codigoMunicipio = data.substring(684, 688).trim() || null;
    const municipio = data.substring(688, 738).trim() || null;
    const telefone1 = data.substring(738, 750).trim() || null;
    const telefone2 = data.substring(750, 762).trim() || null;
    const fax = data.substring(762, 774).trim() || null;
    const email = data.substring(774, 889).trim() || null;
    const qualificacaoDoResponsavel = data.substring(889, 891).trim() || null;
    const capitalSocial = data.substring(891, 905).trim() || null;
    const porte = data.substring(905, 907).trim() || null;
    const opcaoPeloSimples = data.substring(907, 908).trim() || null;
    const dataOpcaoPeloSimples = data.substring(908, 916).trim() || null;
    const dataExclusaoDoSimples = data.substring(916, 924).trim() || null;
    const MEI = data.substring(924, 925).trim() || null;
    const situacaoEspecial = data.substring(925, 948).trim() || null;
    const dataSituacaoEspecial = data.substring(948, 956).trim() || null;
    return {
        tipoDeResgistro,
        indicadorFullDiario,
        tipoAtualizacao,
        cnpj,
        identificadorMatrizFilial,
        razaoSocial,
        nomeFantasia,
        situacaoCadastral,
        dataSituacaoCadastral: dataSituacaoCadastral ? toDate(dataSituacaoCadastral) : null,
        motivoSituacaoCadastral,
        nmCidadeExterior,
        coPais,
        nmPais,
        codigoNaturezaJuridica,
        dataInicioAtivadade: dataInicioAtivadade ? toDate(dataInicioAtivadade) : null,
        cnaeFiscal,
        descricaoTipoLogradouro,
        logradouro,
        numero,
        complemento,
        bairro,
        cep,
        uf,
        codigoMunicipio,
        municipio,
        telefone1,
        telefone2,
        fax,
        email,
        qualificacaoDoResponsavel,
        capitalSocial,
        porte,
        opcaoPeloSimples,
        dataOpcaoPeloSimples: dataOpcaoPeloSimples ? toDate(dataOpcaoPeloSimples) : null,
        dataExclusaoDoSimples: dataExclusaoDoSimples ? toDate(dataExclusaoDoSimples) : null,
        MEI,
        situacaoEspecial,
        dataSituacaoEspecial: dataSituacaoEspecial ? toDate(dataSituacaoEspecial) : null
    }
}

function toDate(str) {
    if (!str) return null;
    try {
        const year = str.substring(0, 4);
        const month = str.substring(4, 6);
        const day = str.substring(6, 8);
        return new Date(`${year}-${month}-${day}`);
    } catch (e) {
        return null;
    }
}

function save(json) {
    const Empresa = mongoose.model('Empresa', Schema({}, {strict: false}));
    const empresa = new Empresa(json);
    console.log(empresa);
    empresa.save();
}

const mongoenv = {
    host: 'localhost',
    port: '27017',
    db: 'dados-publicos',
    user: undefined,
    pass: undefined
};

console.log(`mongodb://${mongoenv.host}:${mongoenv.port}/${mongoenv.db}`);
mongoose.connect(`mongodb://${mongoenv.host}:${mongoenv.port}/${mongoenv.db}`, {useNewUrlParser: true});

const mongoConnection = mongoose.connection;

mongoConnection.on('error', err => {
    console.log(err.message);
});

mongoConnection.once('open', function () {
    console.log('Conectado com sucesso! (Mongo)');
    extract();
});
