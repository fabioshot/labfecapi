const cargoTypes = `
    # Definição do tipo de cargo
    type Cargo {
        id: ID!
        descricao: String!
        createdAt: String!
        updatedAt: String!
    }

    input CargoCreateInput {
        descricao: String!
    }

    input CargoUpdateInput {
        descricao: String!
    }
    
`;

const cargoQueries = `
    cargos(first: Int, offset: Int): [ Cargo! ]!
    cargo(id: ID!): Cargo

`;

const cargoMutations = `
    createCargo(input: CargoCreateInput!): Cargo
    updateCargo(id: ID!, input: CargoUpdateInput!): Cargo
    deleteCargo(id: ID!): Boolean
`;

export {
    cargoTypes,
    cargoQueries,
    cargoMutations
}