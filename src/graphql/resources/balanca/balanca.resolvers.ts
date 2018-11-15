import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { BalancaInstance } from '../../../models/BalancaModel';
import { handlerError, throwError } from '../../../utils/utils';

export const balancaResolvers = {

  Query: {
      balancas: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Balanca.findAll({
          offset: offset
        }).catch(handlerError);

      },

      balanca: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Balanca.findById(parseInt(id)).then((balanca: BalancaInstance) => {
          throwError(!balanca, `Balanca com a ID ${id} não foi encontrada`);
          return balanca;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createBalanca: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Balanca.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateBalanca: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Balanca.findById(parseInt(id)).then((balanca: BalancaInstance) => {
            throwError(!balanca, `Balanca com a ID ${id} não foi encontrada`);
            return balanca.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteBalanca: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Balanca.findById(parseInt(id)).then((balanca: BalancaInstance) => {
          throwError(!balanca, `Balanca com a ID ${id} não foi encontrada`);
          return balanca.destroy({transaction: t}).then((balanca => !!balanca));
        }).catch(handlerError);
      });

    }
  }

};