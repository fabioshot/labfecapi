import * as Sequelize from 'sequelize';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface ProdutoAttributes{
    id?: number;
    descricao?: string;
    embalagemid?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface ProdutoInstance extends Sequelize.Instance<ProdutoAttributes>{

}

export interface ProdutoModel extends BaseModelInterface, Sequelize.Model<ProdutoInstance, ProdutoAttributes>{

}

export default(sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): ProdutoModel => {
    const Produto: ProdutoModel = sequelize.define('Produto', {
        id: {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'produto'
    });

    Produto.associate = (models: ModelsInterface): void => {
        Produto.belongsTo(models.Embalagem, {
            foreignKey: {
                allowNull: false,
                field: 'embalagem',
                name: 'embalagem'
            }
        });
    }

    return Produto;
}