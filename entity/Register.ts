import {Entity, Column, PrimaryColumn} from "typeorm";

@Entity()
export class Register {

    constructor(
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
        municipio,
        telefone1,
        telefone2,
        fax,
        email,
        qualificacaoDoResponsavel,
        capitalSocial,
        porte,
        opcaoPeloSimples,
        dataOpcaoPeloSimples,
        dataExclusaoDoSimples,
        MEI,
        situacaoEspecial,
        dataSituacaoEspecial
    ) {
        this.tipoDeResgistro = tipoDeResgistro;
        this.indicadorFullDiario = indicadorFullDiario;
        this.tipoAtualizacao = tipoAtualizacao;
        this.cnpj = cnpj;
        this.identificadorMatrizFilial = identificadorMatrizFilial;
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.situacaoCadastral = situacaoCadastral;
        this.dataSituacaoCadastral = dataSituacaoCadastral;
        this.motivoSituacaoCadastral = motivoSituacaoCadastral;
        this.nmCidadeExterior = nmCidadeExterior;
        this.coPais = coPais;
        this.nmPais = nmPais;
        this.codigoNaturezaJuridica = codigoNaturezaJuridica;
        this.dataInicioAtivadade = dataInicioAtivadade;
        this.cnaeFiscal = cnaeFiscal;
        this.descricaoTipoLogradouro = descricaoTipoLogradouro;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.cep = cep;
        this.uf = uf;
        this.codigoMunicipio = codigoMunicipio;
        this.municipio = municipio;
        this.telefone1 = telefone1;
        this.telefone2 = telefone2;
        this.fax = fax;
        this.email = email;
        this.qualificacaoDoResponsavel = qualificacaoDoResponsavel;
        this.capitalSocial = capitalSocial;
        this.porte = porte;
        this.opcaoPeloSimples = opcaoPeloSimples;
        this.dataOpcaoPeloSimples = dataOpcaoPeloSimples;
        this.dataExclusaoDoSimples = dataExclusaoDoSimples;
        this.MEI = MEI;
        this.situacaoEspecial = situacaoEspecial;
        this.dataSituacaoEspecial = dataSituacaoEspecial;
    }

    @Column({nullable: true})
    tipoDeResgistro: number;

    @Column({nullable: true})
    indicadorFullDiario: String;

    @Column({nullable: true})
    tipoAtualizacao: String;

    @PrimaryColumn()
    cnpj: String;

    @Column({nullable: true})
    identificadorMatrizFilial: number;

    @Column()
    razaoSocial: String;

    @Column({nullable: true})
    nomeFantasia: String;

    @Column({nullable: true})
    situacaoCadastral: number;

    @Column({nullable: true})
    dataSituacaoCadastral: Date;

    @Column({nullable: true})
    motivoSituacaoCadastral: number;

    @Column({nullable: true})
    nmCidadeExterior: String;

    @Column({nullable: true})
    coPais: String;

    @Column({nullable: true})
    nmPais: String;

    @Column({nullable: true})
    codigoNaturezaJuridica: number;

    @Column({nullable: true})
    dataInicioAtivadade: Date;

    @Column({nullable: true})
    cnaeFiscal: String;

    @Column({nullable: true})
    descricaoTipoLogradouro: String;

    @Column({nullable: true})
    logradouro: String;

    @Column({nullable: true})
    numero: String;

    @Column({nullable: true})
    complemento: String;

    @Column({nullable: true})
    bairro: String;

    @Column({nullable: true})
    cep: String;

    @Column({nullable: true})
    uf: String;

    @Column({nullable: true})
    codigoMunicipio: String;

    @Column({nullable: true})
    municipio: String;

    @Column({nullable: true})
    telefone1: String;

    @Column({nullable: true})
    telefone2: String;

    @Column({nullable: true})
    fax: String;

    @Column({nullable: true})
    email: String;

    @Column({nullable: true})
    qualificacaoDoResponsavel: number;

    @Column({nullable: true})
    capitalSocial: number;

    @Column({nullable: true})
    porte: number;

    @Column({nullable: true})
    opcaoPeloSimples: number;

    @Column({nullable: true})
    dataOpcaoPeloSimples: String;

    @Column({nullable: true})
    dataExclusaoDoSimples: String;

    @Column({nullable: true})
    MEI: String;

    @Column({nullable: true})
    situacaoEspecial: String;

    @Column({nullable: true})
    dataSituacaoEspecial: String;

}