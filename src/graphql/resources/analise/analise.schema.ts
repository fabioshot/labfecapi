const analiseTypes = `
    type Analise {
        id: ID!
        data: String!
        hora: String!
        turno: String!
        acidez: Float
        viscosidade: Float
        createdAt: String!
        updatedAt: String!
        funcionario: Funcionario!
    }

    input AnaliseInput{
        data: String!
        hora: String!
        turno: String!
        funcionario: Int!
    }

    input AnaliseFechamentoInput {
        acidez: Float
        viscosidade: Float
    }    
`;

const analiseQueries = `
    analises(first: Int, offset: Int): [ Analise! ]!
    analise(id: ID!): Analise
`;

const analiseMutations = `
    createAnalise(input: AnaliseInput!): Analise
    updateAnalise(id: ID!, input: AnaliseInput!): Analise
    updateAnaliseFechamento(id: ID!, input: AnaliseFechamentoInput!): Analise
    deleteAnalise(id: ID!): Boolean
`;

export {
    analiseTypes,
    analiseQueries,
    analiseMutations
}
    