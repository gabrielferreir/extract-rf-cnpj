import * as fs from 'fs';
import * as readline from 'readline';
import {createConnection} from 'typeorm';
import RegisterRepository from "../repository/register";
import Transform from "../helpers/transform";
import {Register} from "../entity/Register";

export default class RegisterController {
    async readFile(path) {

        const instream = fs.createReadStream(path);
        const rl = readline.createInterface({
            input: instream
        });

        const registerRepository = new RegisterRepository();

        const conn = await createConnection();
        console.log('Conectado com sucesso! (DB)');

        rl.on('line', async line => {
            const json = Transform.toJSON(line);
            if (json.tipoDeResgistro == 1 && json.situacaoCadastral === 2) {
                const register = new Register(
                    json.tipoDeResgistro,
                    json.indicadorFullDiario,
                    json.tipoAtualizacao,
                    json.cnpj,
                    json.identificadorMatrizFilial,
                    json.razaoSocial,
                    json.nomeFantasia,
                    json.situacaoCadastral,
                    json.dataSituacaoCadastral,
                    json.motivoSituacaoCadastral,
                    json.nmCidadeExterior,
                    json.coPais,
                    json.nmPais,
                    json.codigoNaturezaJuridica,
                    json.dataInicioAtivadade,
                    json.cnaeFiscal,
                    json.descricaoTipoLogradouro,
                    json.logradouro,
                    json.numero,
                    json.complemento,
                    json.bairro,
                    json.cep,
                    json.uf,
                    json.codigoMunicipio,
                    json.municipio,
                    json.telefone1,
                    json.telefone2,
                    json.fax,
                    json.email,
                    json.qualificacaoDoResponsavel,
                    json.capitalSocial,
                    json.porte,
                    json.opcaoPeloSimples,
                    json.dataOpcaoPeloSimples,
                    json.dataExclusaoDoSimples,
                    json.MEI,
                    json.situacaoEspecial,
                    json.dataSituacaoEspecial
                );
                try {
                    await registerRepository.create(register);
                } catch (e) {
                    fs.appendFileSync('log.txt', `${e.message} | ${JSON.stringify(json)} \n`);
                }
            }
        });

        rl.on('close', () => {
            console.log('---------Concluido---------');
        });

    }
}