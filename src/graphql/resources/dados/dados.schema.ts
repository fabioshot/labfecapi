const dadosAnalisesTypes = `
    type DadosAnalises {
        id: ID!
        umidade: String!
        phagua: Float!
        fatoracido: Float!
        polpa: Float!
        pontospreto: Int!
        vazamento: Float!
        cor: String!
        createdAt: String!
        updatedAt: String!
        amostra: Amostra!
        analise: Analise!
    }

    input DadosAnalisesInput {
        umidade: String!
        phagua: Float!
        fatoracido: Float!
        polpa: Float!
        pontospreto: Int!
        vazamento: Float!
        cor: String!
        amostra: Int!
        analise: Int! 
    }
`;

const dadosAnalisesQueries = `
    dadosAnalises(amostraId: ID!, produtoID: ID!, first: Int, offset: Int):  [ DadosAnalises! ]
    dadosAnalisesId(id: ID!): DadosAnalises 
`;

const dadosAnalisesMutations = `
    createDadosAnalises(input: DadosAnalisesInput!): DadosAnalises
    updateDadosAnalises(id: ID!, input: DadosAnalisesInput!): DadosAnalises
    deleteDadosAnalises(id: ID!): Boolean
`;

export {
    dadosAnalisesTypes,
    dadosAnalisesQueries,
    dadosAnalisesMutations
}