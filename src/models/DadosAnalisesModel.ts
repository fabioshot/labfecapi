import * as Sequelize from 'sequelize';
import { ModelsInterface } from '../interfaces/ModelsInterface';
import { BaseModelInterface } from '../interfaces/BaseModelInterface';

export interface DadosAnalisesAttributes{
    id?:number;
    amostra?: number;
    analises?: number;
    umidade?: string;
    phagua?: number;
    fatoracido?: number;
    polpa?: number;
    pontospreto?: number;
    vazamento?: number;
    cor?: string;
}

export interface DadosAnalisesInstance extends Sequelize.Instance<DadosAnalisesAttributes> {

}

export interface DadosAnalisesModel extends BaseModelInterface, Sequelize.Model<DadosAnalisesInstance, DadosAnalisesAttributes>{

}

export default (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): DadosAnalisesModel => {
    const DadosAnalises: DadosAnalisesModel = sequelize.define('DadosAnalises', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        umidade: {
            type: DataTypes.STRING           
        },
        phagua: {
            type: DataTypes.DOUBLE            
        },
        fatoracido: {
            type: DataTypes.DOUBLE
        },
        polpa: {
            type: DataTypes.DOUBLE
        },
        pontospreto: {
            type: DataTypes.INTEGER
        },
        vazamento: {
            type: DataTypes.DOUBLE
        },
        cor: {
            type: DataTypes.STRING
        }        
    },
    {
        tableName: 'dadosanalises'
    });

    DadosAnalises.associate = (models: ModelsInterface): void => {
        DadosAnalises.belongsTo(models.Amostra, {
            foreignKey: {
                allowNull: false,
                field: 'amostra',
                name: 'amostra'
            }
        });

        DadosAnalises.belongsTo(models.Analise, {
            foreignKey: {
                allowNull: false,
                field: 'analise',
                name: 'analise'
            }
        });
    };

    return DadosAnalises;
}