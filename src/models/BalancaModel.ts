import * as  Sequelize  from 'sequelize';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface BalancaAttributes {
    id?: number;
    equipamento?: string;
    identificação?: string;
    modelo?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface BalancaInstance extends Sequelize.Instance<BalancaAttributes> {

}

export interface BalancaModel extends BaseModelInterface, Sequelize.Model<BalancaInstance,BalancaAttributes > {
    
}

export default (sequelize: Sequelize.Sequelize, Datatypes: Sequelize.DataTypes): BalancaModel => {
    const Balanca: BalancaModel = sequelize.define('Balanca', {
        id : {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey: true
        },
        equipamento: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        identificacao: {
            type: Datatypes.STRING(100),
            allowNull: false
        
        }        
    },
    {
        tableName: 'balanca'       
    });

    Balanca.associate = (models: ModelsInterface): void => {
        Balanca.belongsTo(models.Modelo, {
            foreignKey: {
                allowNull: false,
                field: 'modelo',
                name: 'modelo'
            }
        });
    }
    return Balanca;
};