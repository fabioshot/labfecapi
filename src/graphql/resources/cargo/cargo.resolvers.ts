import { GraphQLResolveInfo } from 'graphql';
import { Transaction } from 'sequelize';

import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { CargoInstance } from '../../../models/CargoModel';
import { handlerError, throwError } from '../../../utils/utils';

export const cargoResolvers = {

  Query: {
      cargos: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Cargo.findAll({
          limit: first,
          offset: offset
        }).catch(handlerError);

      },

      cargo: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.Cargo.findById(parseInt(id)).then((cargo: CargoInstance) => {
          throwError(!cargo, `Cargo com a ID ${id} não foi encontrada`);
          return cargo;
        }).catch(handlerError);
      }
  },

  Mutation: {

    createCargo: (parent, {input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Cargo.create(input, {transaction: t});
      }).catch(handlerError);
    },

    updateCargo: (parent, {id, input}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
        return db.sequelize.transaction((t: Transaction) => {
          return db.Cargo.findById(parseInt(id)).then((cargo: CargoInstance) => {
            throwError(!cargo, `Cargo com a ID ${id} não foi encontrada`);
            return cargo.update(input, {transaction: t});
        }).catch(handlerError);
      });
    },

    deleteCargo: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
      return db.sequelize.transaction((t: Transaction) => {
        return db.Cargo.findById(parseInt(id)).then((cargo: CargoInstance) => {
          throwError(!cargo, `Cargo com a ID ${id} não foi encontrada`);
          return cargo.destroy({transaction: t}).then((cargo => !!cargo));
        }).catch(handlerError);
      });

    }
  }

};