import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { ProdutoInstance } from '../../../models/ProdutoModel';
import { handlerError, throwError } from '../../../utils/utils';

export const produtoResolvers = {

  Query: {
      produtos: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Produto.findAll({
          offset: offset
        }).catch(handlerError);

      },

      produto: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Produto.findById(parseInt(id)).then((produto: ProdutoInstance) => {
          throwError(!produto, `Produto com a ID ${id} não foi encontrada`);
          return produto;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createProduto: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Produto.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateProduto: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Produto.findById(parseInt(id)).then((produto: ProdutoInstance) => {
            throwError(!produto, `Produto com a ID ${id} não foi encontrada`);
            return produto.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteProduto: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Produto.findById(parseInt(id)).then((produto: ProdutoInstance) => {
          throwError(!produto, `Produto com a ID ${id} não foi encontrada`);
          return produto.destroy({transaction: t}).then((produto => !!produto));
        }).catch(handlerError);
      });

    }
  }

};