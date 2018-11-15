import { cargoMutations } from "./resources/cargo/cargo.schema";
import { funcionarioMutations } from "./resources/funcionario/funcionario.schema";
import { amostraMutations } from "./resources/amostra/amostra.schema";
import { analiseMutations } from "./resources/analise/analise.schema";
import { balancaMutations } from "./resources/balanca/balanca.schema";
import { calibragemMutations } from "./resources/calibragem/calibragem.schema";
import { dadosAnalisesMutations } from "./resources/dados/dados.schema";
import { embalagemMutations } from "./resources/embalagem/embalagem.schema";
import { marcaMutations } from "./resources/marca/marca.schema";
import { modeloMutations } from "./resources/modelo/modelo.schema";
import { produtoMutations } from "./resources/produto/produto.schema";

const Mutation = `
    type Mutation {
        ${amostraMutations}
        ${analiseMutations}
        ${balancaMutations}
        ${calibragemMutations}
        ${cargoMutations}
        ${dadosAnalisesMutations}
        ${embalagemMutations}
        ${funcionarioMutations}
        ${marcaMutations}
        ${modeloMutations}
        ${produtoMutations}
    }
`;

export {
    Mutation
}