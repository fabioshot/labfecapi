import { cargoQueries } from "./resources/cargo/cargo.schema";
import { funcionarioQueries } from "./resources/funcionario/funcionario.schema";
import { amostraQueries } from "./resources/amostra/amostra.schema";
import { analiseQueries } from "./resources/analise/analise.schema";
import { balancaQueries } from "./resources/balanca/balanca.schema";
import { calibragemQueries } from "./resources/calibragem/calibragem.schema";
import { dadosAnalisesQueries } from "./resources/dados/dados.schema";
import { embalagemQueries } from "./resources/embalagem/embalagem.schema";
import { marcaQueries } from "./resources/marca/marca.schema";
import { modeloQueries } from "./resources/modelo/modelo.schema";
import { produtoQueries } from "./resources/produto/produto.schema";

const Query = `
    type Query{
        ${amostraQueries}
        ${analiseQueries}
        ${balancaQueries}
        ${calibragemQueries}
        ${cargoQueries}
        ${dadosAnalisesQueries}
        ${embalagemQueries}
        ${funcionarioQueries}
        ${marcaQueries}
        ${modeloQueries}
        ${produtoQueries}
    }
`;

export {
    Query
}