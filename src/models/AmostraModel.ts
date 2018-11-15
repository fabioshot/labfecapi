import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface AmostraAttributes{
    id?: number;
    tipo?: string;
    datafab?: string;
    horafab?: string;
    lote?: string;
    produto?: number;
    createdAt?: number;
    updatedAt?: number;
};

export interface AmostraInstance extends Sequelize.Instance<AmostraAttributes>{

};

export interface AmostraModel extends BaseModelInterface, Sequelize.Model<AmostraInstance, AmostraAttributes>{

};

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AmostraModel => {
    const Amostra: AmostraModel = sequelize.define('Amostra', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull:false
        },
        datafab: {
            type: DataTypes.DATE,
            allowNull: false
        },
        horafab: {
            type: DataTypes.TIME,
            allowNull: false
        },
        lote: {
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    {
        tableName: 'amostra'
    });

    Amostra.associate = (models: ModelsInterface): void => {
        Amostra.belongsTo(models.Produto, {
            foreignKey: {
                allowNull: false,
                field: 'produto',
                name: 'produto'
            }
        });
    };
    return Amostra;
};