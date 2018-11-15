import { AmostraModel } from "../models/AmostraModel";
import { AnaliseModel } from "../models/AnaliseModel";
import { BalancaModel } from "../models/BalancaModel";
import { CalibragemModel } from "../models/CalibragemModel";
import { CargoModel } from "../models/CargoModel";
import { DadosAnalisesModel } from "../models/DadosAnalisesModel";
import { EmbalagemModel } from "../models/EmbalagemModel";
import { FuncionarioModel } from "../models/FuncionarioModel";
import { MarcaModel } from "../models/MarcaModel";
import { ModeloModel } from "../models/ModeloModel";
import { ProdutoModel } from "../models/ProdutoModel";

export interface ModelsInterface {

    Amostra: AmostraModel;
    Analise: AnaliseModel;
    Balanca: BalancaModel;
    Calibragem: CalibragemModel;
    Cargo: CargoModel;
    DadosAnalises: DadosAnalisesModel;
    Embalagem: EmbalagemModel;
    Funcionario: FuncionarioModel;
    Marca: MarcaModel;
    Modelo: ModeloModel;
    Produto: ProdutoModel;
}