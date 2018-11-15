import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { AnaliseInstance } from '../../../models/AnaliseModel';
import { handlerError, throwError } from '../../../utils/utils';

export const analiseResolvers = {

  Query: {
      analises: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Analise.findAll({
          offset: offset
        }).catch(handlerError);

      },

      analise: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Analise.findById(parseInt(id)).then((analise: AnaliseInstance) => {
          throwError(!analise, `Analise com a ID ${id} não foi encontrada`);
          return analise;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createAnalise: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Analise.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateAnalise: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Analise.findById(parseInt(id)).then((analise: AnaliseInstance) => {
            throwError(!analise, `Analise com a ID ${id} não foi encontrada`);
            return analise.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteAnalise: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Analise.findById(parseInt(id)).then((analise: AnaliseInstance) => {
          throwError(!analise, `Analise com a ID ${id} não foi encontrada`);
          return analise.destroy({transaction: t}).then((analise => !!analise));
        }).catch(handlerError);
      });

    }
  }

};