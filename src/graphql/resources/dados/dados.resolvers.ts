import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { DadosAnalisesInstance } from '../../../models/DadosAnalisesModel';
import { handlerError, throwError } from '../../../utils/utils';

export const dadosAnalisesResolvers = {

  Query: {
      dadosAnalises: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.DadosAnalises.findAll({
          offset: offset
        }).catch(handlerError);

      },

      dadosAnalisesId: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.DadosAnalises.findById(parseInt(id)).then((dadosAnalises: DadosAnalisesInstance) => {
          throwError(!dadosAnalises, `DadosAnalises com a ID ${id} não foi encontrada`);
          return dadosAnalises;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createDadosAnalises: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.DadosAnalises.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateDadosAnalises: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.DadosAnalises.findById(parseInt(id)).then((dadosAnalises: DadosAnalisesInstance) => {
            throwError(!dadosAnalises, `DadosAnalises com a ID ${id} não foi encontrada`);
            return dadosAnalises.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteDadosAnalises: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.DadosAnalises.findById(parseInt(id)).then((dadosAnalises: DadosAnalisesInstance) => {
          throwError(!dadosAnalises, `DadosAnalises com a ID ${id} não foi encontrada`);
          return dadosAnalises.destroy({transaction: t}).then((dadosAnalises => !!dadosAnalises));
        }).catch(handlerError);
      });

    }
  }

};