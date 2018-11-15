import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { EmbalagemInstance } from '../../../models/EmbalagemModel';
import { handlerError, throwError } from '../../../utils/utils';

export const embalagemResolvers = {

  Query: {
      embalagens: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Embalagem.findAll({
          offset: offset
        }).catch(handlerError);

      },

      embalagem: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Embalagem.findById(parseInt(id)).then((embalagem: EmbalagemInstance) => {
          throwError(!embalagem, `Embalagem com a ID ${id} não foi encontrada`);
          return embalagem;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createEmbalagem: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Embalagem.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateEmbalagem: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Embalagem.findById(parseInt(id)).then((embalagem: EmbalagemInstance) => {
            throwError(!embalagem, `Embalagem com a ID ${id} não foi encontrada`);
            return embalagem.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteEmbalagem: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Embalagem.findById(parseInt(id)).then((embalagem: EmbalagemInstance) => {
          throwError(!embalagem, `Embalagem com a ID ${id} não foi encontrada`);
          return embalagem.destroy({transaction: t}).then((embalagem => !!embalagem));
        }).catch(handlerError);
      });

    }
  }

};