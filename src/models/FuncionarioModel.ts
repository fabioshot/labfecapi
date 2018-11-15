import * as  Sequelize  from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { BaseModelInterface } from '../interfaces/BaseModelInterface';
import { ModelsInterface } from '../interfaces/ModelsInterface';

export interface FuncionarioAttributes {
    id?: number;
    nome?: string;
    cargo?: number;
    admissao?: string;
    saida?: string;
    observacao?: string;
    usuario?: string;
    senha?: string;
    bloqueado?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface FuncionarioInstance extends Sequelize.Instance<FuncionarioAttributes>, FuncionarioAttributes{
    isSenha(encodedPassword: string, senha: string): boolean;
} 

export interface FuncionarioModel extends BaseModelInterface, Sequelize.Model<FuncionarioInstance,FuncionarioAttributes> {

}

export default (sequelize: Sequelize.Sequelize, Datatypes: Sequelize.DataTypes): FuncionarioModel => {
    const Funcionario: FuncionarioModel = sequelize.define('Funcionario', {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey: true
        },
        nome: {
            type: Datatypes.STRING(100),
            allowNull: false
        },
        admissao: {
            type: Datatypes.DATE,
            allowNull: false
        },
        saida: {
            type: Datatypes.DATE
        },
        observacao: {
            type: Datatypes.TEXT
        },
        usuario: {
            type: Datatypes.STRING(50),
            allowNull: false,
            unique: true
        },
        senha: {
            type: Datatypes.STRING(100),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        bloqueado: {
            type: Datatypes.BOOLEAN
        }

},
{
    tableName: 'funcionario',
    hooks:{
        beforeCreate: (funcionario: FuncionarioInstance, options: Sequelize.CreateOptions): void => {
            const salt = genSaltSync();
            funcionario.senha = hashSync(funcionario.senha, salt);
        },

        beforeUpdate: (funcionario: FuncionarioInstance, options: Sequelize.CreateOptions): void => {
           if (funcionario.changed('senha')){
            const salt = genSaltSync();
            funcionario.senha = hashSync(funcionario.senha, salt);
           }
        }
    } 
});
 
    Funcionario.associate = (models: ModelsInterface ): void => {
        Funcionario.belongsTo(models.Cargo, {
            foreignKey: {
                allowNull: false,
                field: 'cargo',
                name: 'cargo'
            }
        });
     };

    Funcionario.prototype.isSenha = (encodePasswd: string, senha: string) =>{
    return compareSync(senha, encodePasswd);
}

return Funcionario;
}