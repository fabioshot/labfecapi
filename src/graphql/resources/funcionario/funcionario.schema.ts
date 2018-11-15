const funcionarioTypes = `
    # Definição do tipo de funcionário  
    type Funcionario {
        id: ID!
        nome: String!
        admissao: String!
        saida: String
        observacao: String
        usuario: String!
        senha: String!
        bloqueado: Boolean
        createdAt: String!
        updatedAt: String!
        cargo: Cargo!
    }

    input FuncionarioCreateInput {
        nome: String!
        admissao: String!
        saida: String
        observacao: String
        usuario: String!
        senha: String!
        bloqueado: Boolean
        cargo: Int!
    }

    input FuncionarioUpdateInput {
        nome: String!
        admissao: String!
        saida: String
        observacao: String
        usuario: String!
        bloqueado: Boolean
        cargo: Int!
       
    }

    input FuncionarioUpdateSenhaInput {
        senha: String!
    }
    
`;

const funcionarioQueries = `
    funcionarios(first: Int, offset: Int): [ Funcionario! ]!
    funcionario(id: ID!): Cargo
    currentFuncionario: Funcionario

`;

const funcionarioMutations = `
    createFuncionario(input: FuncionarioCreateInput!): Funcionario
    updateFuncionario(id: ID!, input: FuncionarioUpdateInput!): Funcionario
    updateSenha(id: ID!, input: FuncionarioUpdateSenhaInput!): Boolean
    deleteFuncionario: Boolean
`;

export {
    funcionarioTypes,
    funcionarioQueries,
    funcionarioMutations
}