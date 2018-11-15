import * as  Sequelize  from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface CargoAttributes {
    id?: number;
    cargo?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface CargoInstance extends Sequelize.Instance<CargoAttributes> {

}

export interface CargoModel extends BaseModelInterface, Sequelize.Model<CargoInstance,CargoAttributes > {
    
}

export default (sequelize: Sequelize.Sequelize, Datatypes: Sequelize.DataTypes): CargoModel => {
    const Cargo: CargoModel = sequelize.define('Cargo', {
        id : {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey: true
        },
        descricao: {
            type: Datatypes.STRING(100),
            allowNull: false
        }
    },
    {
         tableName: 'cargo'
    });
    return Cargo;
}