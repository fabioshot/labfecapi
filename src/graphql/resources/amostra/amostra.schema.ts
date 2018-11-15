const amostraTypes = `
    type Amostra {
        id: ID!
        tipo: String!
        datafab: String!
        horafab: String!
        lote: String!
        createdAt: String!
        updatedAt: String!
        produto: [ Produto! ]!
    }

    input AmostraInput {
        tipo: String!
        datafab: String!
        horafab: String!
        lote: String!
        produto: Int!
    }

`;

const amostraQueries = `
    amostras(first: Int, offset: Int): [Amostra!]!
    amostra(id: ID!): Amostra
`;

const amostraMutations = `
    createAmostra(input: AmostraInput!): Amostra
    updateAmostra(id: ID, input: AmostraInput!): Amostra
    deleteAmostra(id: ID!): Boolean
`;

export {
    amostraTypes,
    amostraQueries,
    amostraMutations
}