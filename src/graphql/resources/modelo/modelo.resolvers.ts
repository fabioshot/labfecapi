import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { ModeloInstance } from '../../../models/ModeloModel';
import { handlerError, throwError } from '../../../utils/utils';

export const modeloResolvers = {

  Query: {
      modelos: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Modelo.findAll({
          offset: offset
        }).catch(handlerError);

      },

      modelo: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Modelo.findById(parseInt(id)).then((modelo: ModeloInstance) => {
          throwError(!modelo, `Modelo com a ID ${id} não foi encontrada`);
          return modelo;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createModelo: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Modelo.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateModelo: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Modelo.findById(parseInt(id)).then((modelo: ModeloInstance) => {
            throwError(!modelo, `Modelo com a ID ${id} não foi encontrada`);
            return modelo.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteModelo: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Modelo.findById(parseInt(id)).then((modelo: ModeloInstance) => {
          throwError(!modelo, `Modelo com a ID ${id} não foi encontrada`);
          return modelo.destroy({transaction: t}).then((modelo => !!modelo));
        }).catch(handlerError);
      });

    }
  }

};