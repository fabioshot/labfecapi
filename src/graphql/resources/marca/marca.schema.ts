const marcaTypes = `
        type Marca{
            id: ID!
            descricao: String!
            createdAt: String!
            updateAt: String!
    }
   

    input MarcaInput{
        descricao: String!
    }
`;

const marcaQueries = `
    marcas(first: Int, offset: Int): [ Marca! ]!
    marca(id: ID!): Marca
`;

const marcaMutations = `
    createMarca(input: MarcaInput!): Marca
    updateMarca(id: ID!, input: MarcaInput!): Marca
    deleteMarca(id: ID!): Boolean
`;

export {
    marcaTypes,
    marcaQueries,
    marcaMutations
}