import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface AnaliseAttributes{
    id?: number;
    data?: string;
    hora?: string;
    turno?: string;
    funcionario?: number;
    acidez?: number;
    viscosidade?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface AnaliseInstance extends Sequelize.Instance<AnaliseAttributes>, AnaliseAttributes{

}

export interface AnaliseModel extends BaseModelInterface, Sequelize.Model<AnaliseInstance, AnaliseAttributes>{

}

export default ( sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): AnaliseModel => {
    const Analise: AnaliseModel = sequelize.define('Analise', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        hora: {
            type: DataTypes.TIME,
            allowNull: false
        },
        turno: {
            type: DataTypes.STRING,
            allowNull: false
        },
        acidez: {
            type: DataTypes.DOUBLE
        },
        viscosidade: {
            type: DataTypes.DOUBLE
        }
    },
    {
        tableName: 'analise'
    });

    Analise.associate = (models: ModelsInterface): void => {
        Analise.belongsTo(models.Produto, {
            foreignKey: {
                allowNull: false,
                field: 'funcionario',
                name: 'funcionario'
            }
        });
    }

    return Analise;
}
