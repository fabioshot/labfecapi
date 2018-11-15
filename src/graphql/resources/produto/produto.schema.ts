const produtoTypes = `
    type Produto {
        id: ID!
        descricao: String!
        createdAt: String!
        updatedAt: String!
        embalagem: Embalagem
    }

        input ProdutoInput {
            descricao: String!
            embalagem: Int!
        }
    
`;

const produtoQueries = `
    produtos(first: Int, offset: Int): [Produto!]!
    produto(id: ID!): Produto
`;

const produtoMutations = `
    createProduto(input: ProdutoInput!): Produto
    updateProduto(id: ID!, input: ProdutoInput!): Produto
    deleteProduto(id:ID!): Boolean
`;

export {
    produtoTypes,
    produtoQueries,
    produtoMutations
}