const embalagemTypes = `
    type Embalagem {
        id: ID!
        descricao: String!
        peso: Float!
        createdAt: String!
        updatedAt: String!        
    }

    input EmbalagemInput {
        descricao: String!
        peso: Float!
    }
`;
const embalagemQueries = `
    embalagens(first: Int, offset: Int): [ Embalagem! ]
    embalagem(id: ID!): Embalagem
`;

const embalagemMutations = `
    createEmbalagem(input: EmbalagemInput!): Embalagem
    updateEmbalagem(id: ID!, input: EmbalagemInput!): Embalagem
    deleteEmbalagem(id: ID!): Boolean
`;

export {
    embalagemTypes,
    embalagemQueries,
    embalagemMutations
}