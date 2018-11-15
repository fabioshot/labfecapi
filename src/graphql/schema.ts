import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { Query } from './query';
import { Mutation } from './mutation';

import { cargoTypes } from './resources/cargo/cargo.schema';
import { funcionarioTypes } from './resources/funcionario/funcionario.schema';
import { amostraTypes } from './resources/amostra/amostra.schema';
import { analiseTypes } from './resources/analise/analise.schema';
import { balancaTypes } from './resources/balanca/balanca.schema';
import { calibragemTypes } from './resources/calibragem/calibragem.schema';
import { dadosAnalisesTypes } from './resources/dados/dados.schema';
import { embalagemTypes } from './resources/embalagem/embalagem.schema';
import { marcaTypes } from './resources/marca/marca.schema';
import { modeloTypes } from './resources/modelo/modelo.schema';
import { produtoTypes } from './resources/produto/produto.schema';

import { amostraResolvers } from './resources/amostra/amostra.resolvers';
import { analiseResolvers } from './resources/analise/analise.resolvers';
import { balancaResolvers } from './resources/balanca/balanca.resolvers';
import { calibragemResolvers } from './resources/calibragem/calibragem.resolvers';
import { cargoResolvers } from './resources/cargo/cargo.resolvers';
import { dadosAnalisesResolvers } from './resources/dados/dados.resolvers';
import { embalagemResolvers } from './resources/embalagem/embalagem.resolvers';
import { funcionarioResolvers } from './resources/funcionario/funcionario.resolvers';
import { marcaResolvers } from './resources/marca/marca.resolvers';
import { modeloResolvers } from './resources/modelo/modelo.resolvers';
import { produtoResolvers } from './resources/produto/poduto.resolvers';

const resolvers = merge(
    amostraResolvers,
    analiseResolvers,
    balancaResolvers,
    calibragemResolvers,
    cargoResolvers,
    dadosAnalisesResolvers,
    embalagemResolvers,
    funcionarioResolvers,
    marcaResolvers,
    modeloResolvers,
    produtoResolvers    
);
    


const SchemaDefinition = `
    type Schema{
        query: Query
        mutation: Mutation
    }
`;

export default makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        Query,
        Mutation,
        amostraTypes,
        analiseTypes,
        balancaTypes,
        calibragemTypes,
        cargoTypes,
        dadosAnalisesTypes,
        embalagemTypes,
        funcionarioTypes,
        marcaTypes,
        modeloTypes,
        produtoTypes,
        
    ],
    resolvers
});