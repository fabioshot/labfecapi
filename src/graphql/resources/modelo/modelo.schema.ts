const modeloTypes = `
    type Modelo {
        id: ID!
        descricao: String!
        createdAt: String!
        updatedAt: String!
        marca: Marca!
    }
    

    input ModeloInput {
        descricao: String!
        marca: Int!
    }
`;

const modeloQueries = `
    modelos(first: Int, offset: Int): [ Modelo! ]!
    modelo(id: ID!, input: ModeloInput!): Modelo
`;

const modeloMutations = `
    createModelo(input: ModeloInput!): Modelo
    updateModelo(id: ID!, input: ModeloInput!): Modelo
    deleteModelo(id: ID!): Boolean 
`;

export {
    modeloTypes,
    modeloQueries,
    modeloMutations
}
    
