import { GraphQLResolveInfo } from "graphql";
import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { FuncionarioInstance } from "../../../models/FuncionarioModel";
import { Transaction } from "sequelize";
import { handlerError, throwError } from "../../../utils/utils";


export const funcionarioResolvers = {

    Query: {

        funcionarios: (parent, {first = 10, offset =0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Funcionario.findAll({
                limit: first,
                offset: offset
            });
        },
        funcionario: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Funcionario.findById(parseInt(id)).then((funcionario: FuncionarioInstance) => {
                throwError(!funcionario,`Funcionário não foi encontrada`);
                return funcionario;
            });
        },
        currentFuncionario: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Funcionario.findById(parseInt(id)).then((funcionario: FuncionarioInstance) => {
                throwError(!funcionario,`Funcionário não foi encontrada`);
                return funcionario;
              }).catch(handlerError);
            }
    },

    Mutation: {

        createFuncionario: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Funcionario.create(input, {transaction: t});
            }).catch(handlerError);
        },

        updateFuncionario: (parent, {input,id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
              return db.Funcionario.findById(parseInt(id)).then((funcionario: FuncionarioInstance) => {
                throwError(!funcionario,`Funcionário não foi encontrada`);
                return funcionario.update(input, {transaction: t});
              });
            }).catch(handlerError);
      
        },

        updateSenha:(parent, {input, id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
              return db.Funcionario.findById(parseInt(id)).then((funcionario: FuncionarioInstance) => {
                throwError(!funcionario, `Funcionário não foi encontrada`);
                return funcionario.update(input, {transaction: t}).then((funcionario: FuncionarioInstance) => !!funcionario)
              });
            }).catch(handlerError);
        },

        deleteFuncionario: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
              return db.Funcionario.findById(parseInt(id)).then((funcionario: FuncionarioInstance) => {
                throwError(!funcionario, `Funcionário não foi encontrada`) 
                return funcionario.destroy({transaction: t}).then((funcionario => !!funcionario));
              });
            }).catch(handlerError);
      
        },
        
    }
}