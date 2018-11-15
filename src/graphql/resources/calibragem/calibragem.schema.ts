const calibragemTypes = `
    type Calibragem {
        id: ID!
        data: String!
        hora: String!
        peso1: Float!
        peso2: Float!
        peso3: Float!
        peso4: Float!
        createdAt: String!
        updatedAt: String!
        balanca: Balanca!
        funcionario: Funcionario!
    }

    input CalibragemInput {
        data: String!
        hora: String!
        peso1: Float!
        peso2: Float!
        peso3: Float!
        peso4: Float!
        balanca: Int!
        funcionario: Int!
    }
`;

const calibragemQueries = `
    calibragens(first: Int, offset: Int): Calibragem
    calibragem(id: ID!): Calibragem
`;

const calibragemMutations = `
    createCalibragem(input: CalibragemInput): Calibragem
    updateCalibragem(id: ID!, input: CalibragemInput!): Calibragem
    deleteCalibragem(id: ID!): Boolean
`;

export {
    calibragemTypes,
    calibragemQueries,
    calibragemMutations
}