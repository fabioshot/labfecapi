import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { MarcaInstance } from '../../../models/MarcaModel';
import { handlerError, throwError } from '../../../utils/utils';

export const marcaResolvers = {

  Query: {
      marcas: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Marca.findAll({
          offset: offset
        }).catch(handlerError);

      },

      marca: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Marca.findById(parseInt(id)).then((marca: MarcaInstance) => {
          throwError(!marca, `Marca com a ID ${id} não foi encontrada`);
          return marca;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createMarca: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Marca.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateMarca: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Marca.findById(parseInt(id)).then((marca: MarcaInstance) => {
            throwError(!marca, `Marca com a ID ${id} não foi encontrada`);
            return marca.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteMarca: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Marca.findById(parseInt(id)).then((marca: MarcaInstance) => {
          throwError(!marca, `Marca com a ID ${id} não foi encontrada`);
          return marca.destroy({transaction: t}).then((marca => !!marca));
        }).catch(handlerError);
      });

    }
  }

};