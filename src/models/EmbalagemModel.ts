import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface EmbalagemAttributes{
    id?: number;
    descricao?: string;
    peso?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface EmbalagemInstance extends Sequelize.Instance<EmbalagemAttributes> {

}

export interface EmbalagemModel extends BaseModelInterface, Sequelize.Model<EmbalagemInstance, EmbalagemAttributes>{

}

export default(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): EmbalagemModel => {
    const Embalagem: EmbalagemModel = sequelize.define('Embalagem', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull:false
        },
        peso: {
            type: DataTypes.DOUBLE
        }
    },
    {
       tableName: 'embalagem' 
    });
    return Embalagem;
}