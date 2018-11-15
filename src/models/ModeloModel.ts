import * as Sequelize from  'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ModeloAttributes {
    id?: number;
    descricao?: string;
    marca?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ModeloInstance extends Sequelize.Instance<ModeloAttributes> {

}

export interface ModeloModel extends BaseModelInterface, Sequelize.Model<ModeloInstance, ModeloAttributes>{

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ModeloModel => {
    const Modelo: ModeloModel = 
        sequelize.define('Modelo', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: DataTypes.STRING(100),
                allowNull:false
            }
    },
    {
        tableName: 'modelo'
    });

    Modelo.associate = (models: ModelsInterface): void => {
        Modelo.belongsTo(models.Marca, {
            foreignKey: {
                allowNull: false,
                field: 'marca',
                name: 'marca'
            }
        });
    }

    return Modelo;
}

