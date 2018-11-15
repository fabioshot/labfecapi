import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { CalibragemInstance } from '../../../models/CalibragemModel';
import { handlerError, throwError } from '../../../utils/utils';

export const calibragemResolvers = {

  Query: {
      calibragens: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Calibragem.findAll({
          offset: offset
        }).catch(handlerError);

      },

      calibragem: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Calibragem.findById(parseInt(id)).then((calibragem: CalibragemInstance) => {
          throwError(!calibragem, `Calibragem com a ID ${id} não foi encontrada`);
          return calibragem;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createCalibragem: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Calibragem.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateCalibragem: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Calibragem.findById(parseInt(id)).then((calibragem: CalibragemInstance) => {
            throwError(!calibragem, `Calibragem com a ID ${id} não foi encontrada`);
            return calibragem.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteCalibragem: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Calibragem.findById(parseInt(id)).then((calibragem: CalibragemInstance) => {
          throwError(!calibragem, `Calibragem com a ID ${id} não foi encontrada`);
          return calibragem.destroy({transaction: t}).then((calibragem => !!calibragem));
        }).catch(handlerError);
      });

    }
  }

};