export default class Transform {
    static toJSON(data) {

        const tipoDeResgistro = data.substring(0, 1) ? parseInt(data.substring(0, 1)) : null;
        const indicadorFullDiario = data.substring(1, 2).trim() || null;
        const tipoAtualizacao = data.substring(2, 3).trim() || null;
        const cnpj = data.substring(3, 17).trim() || null;
        const identificadorMatrizFilial = data.substring(17, 18) ? parseInt(data.substring(17, 18)) : null;
        const razaoSocial = data.substring(18, 168).trim() || null;
        const nomeFantasia = data.substring(168, 223).trim() || null;
        const situacaoCadastral = data.substring(223, 225) ? parseInt(data.substring(223, 225)) : null;
        const dataSituacaoCadastral = data.substring(225, 233) ? this.toDate(data.substring(225, 233)) : null;
        const motivoSituacaoCadastral = data.substring(233, 235) ? parseInt(data.substring(233, 235)) : null;
        const nmCidadeExterior = data.substring(235, 290).trim() || null;
        const coPais = data.substring(290, 293).trim() || null;
        const nmPais = data.substring(293, 363).trim() || null;
        const codigoNaturezaJuridica = data.substring(363, 367) ? parseInt(data.substring(363, 367)) : null;
        const dataInicioAtivadade = data.substring(367, 375).trim() || null;
        const cnaeFiscal = data.substring(375, 382).trim() || null;
        const descricaoTipoLogradouro = data.substring(382, 402).trim() || null;
        const logradouro = data.substring(402, 462).trim() || null;
        const numero = data.substring(462, 468).trim() || null;
        const complemento = data.substring(468, 624).trim() || null;
        const bairro = data.substring(624, 674).trim() || null;
        const cep = data.substring(674, 682).trim() || null;
        const uf = data.substring(682, 684).trim() || null;
        const codigoMunicipio = data.substring(684, 688) ? parseInt(data.substring(684, 688)) : null;
        const municipio = data.substring(688, 738).trim() || null;
        const telefone1 = data.substring(738, 750).trim() || null;
        const telefone2 = data.substring(750, 762).trim() || null;
        const fax = data.substring(762, 774).trim() || null;
        const email = data.substring(774, 889).trim() || null;
        const qualificacaoDoResponsavel = data.substring(889, 891) ? parseInt(data.substring(889, 891)) : null;
        const capitalSocial = data.substring(891, 905) ? parseFloat(data.substring(891, 905)) : null;
        const porte = data.substring(905, 907) ? parseInt(data.substring(905, 907)) : null;
        const opcaoPeloSimples = data.substring(907, 908) ? parseInt(data.substring(907, 908)) : null;
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
            dataSituacaoCadastral: dataSituacaoCadastral ? this.toDate(dataSituacaoCadastral) : null,
            motivoSituacaoCadastral,
            nmCidadeExterior,
            coPais,
            nmPais,
            codigoNaturezaJuridica,
            dataInicioAtivadade: dataInicioAtivadade ? this.toDate(dataInicioAtivadade) : null,
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
            dataOpcaoPeloSimples: dataOpcaoPeloSimples ? this.toDate(dataOpcaoPeloSimples) : null,
            dataExclusaoDoSimples: dataExclusaoDoSimples ? this.toDate(dataExclusaoDoSimples) : null,
            MEI,
            situacaoEspecial,
            dataSituacaoEspecial: dataSituacaoEspecial ? this.toDate(dataSituacaoEspecial) : null
        }
    }

    static toDate(str) {
        if (!str) return null;
        try {
            const year = str.substring(0, 4);
            const month = str.substring(4, 6);
            const day = str.substring(6, 8);
            const date = new Date(`${year}-${month}-${day}`);
            if (isNaN(date.getTime()))
                return null;
            return date;
        } catch (e) {
            return null;
        }
    }
}