import * as Sequelize from 'sequelize';

import { ModelsInterface } from '../interfaces/ModelsInterface';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface MarcaAttributes {
    id?: number;
    descricao?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface MarcaInstance extends Sequelize.Instance<MarcaAttributes> {

}

export interface MarcaModel extends BaseModelInterface, Sequelize.Model<MarcaInstance, MarcaAttributes> {

}

export default(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes) : MarcaModel => {
    const Marca: MarcaModel = sequelize.define('Marca', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'marca'
    });

    return Marca;
}

