const balancaTypes = `
    type Balanca {
        id: ID!
        equipamento: String!
        identificacao: String!
        createdAt: String!
        updatedAt: String!
        modelo: Modelo!
    }

    input BalancaInput {
        equipamento: String!
        identificacao: String!
        modelo: Int!
    }
`;

const balancaQueries = `
    balancas(first: Int, offset: Int): [ Balanca! ]!
    balanca(id: ID!): Balanca
`;

const balancaMutations = `
    createBalanca(input: BalancaInput!): Balanca
    updateBalanca(id: ID!, input: BalancaInput!): Balanca
    deleteBalanca(id: ID!): Boolean
`;

export {
    balancaTypes,
    balancaQueries,
    balancaMutations
}
