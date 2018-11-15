import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface CalibragemAttributes {
    id?: number;
    funcionario?: number;
    balanca?: number;
    data?: string;
    hora?: string;
    peso1?: number;
    peso2?: number;
    peso3?: number;
    peso4?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface CalibragemInstance extends Sequelize.Instance<CalibragemAttributes> {}

export interface CalibragemModel extends BaseModelInterface, Sequelize.Model<CalibragemInstance, CalibragemAttributes> {}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): CalibragemModel => {
    const Calibragem : CalibragemModel = sequelize.define('Calibragem', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        data: {
            type: DataTypes.DATE,
            allowNull:false
        },
        hora: {
            type: DataTypes.TIME,
            allowNull: false
        },
        peso1: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        peso2: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        peso3: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        peso4: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    },
    {
        tableName: 'calibragem'
    });

    Calibragem.associate = (models: ModelsInterface): void => {
        Calibragem.belongsTo(models.Balanca, {
            foreignKey: {
                allowNull: false,
                field: 'balanca',
                name: 'balanca'
            }
        });

        Calibragem.belongsTo(models.Funcionario, {
            foreignKey: {
                allowNull: false,
                field: 'funcionario',
                name: 'funcionario'
            }
        });
    };

    return Calibragem;
};