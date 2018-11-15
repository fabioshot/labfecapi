import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { AmostraInstance } from '../../../models/AmostraModel';
import { handlerError, throwError } from '../../../utils/utils';

export const amostraResolvers = {

  Query: {
      amostras: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Amostra.findAll({
          offset: offset
        }).catch(handlerError);

      },

      amostra: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Amostra.findById(parseInt(id)).then((amostra: AmostraInstance) => {
          throwError(!amostra, `Amostra com a ID ${id} não foi encontrada`);
          return amostra;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createAmostra: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Amostra.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateAmostra: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Amostra.findById(parseInt(id)).then((amostra: AmostraInstance) => {
            throwError(!amostra, `Amostra com a ID ${id} não foi encontrada`);
            return amostra.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteAmostra: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Amostra.findById(parseInt(id)).then((amostra: AmostraInstance) => {
          throwError(!amostra, `Amostra com a ID ${id} não foi encontrada`);
          return amostra.destroy({transaction: t}).then((amostra => !!amostra));
        }).catch(handlerError);
      });

    }
  }

};