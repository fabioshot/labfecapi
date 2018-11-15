import * as express from "express";
import * as graphqlHTTP from 'express-graphql';

import schema from "./graphql/schema";
import { graphql } from "graphql";

import db from './models'




class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this,this.middleware();
    }

    private middleware(): void {
        this.express.use('/labfecapi',
        
            (req, res, next) => {
                req['context'] = {};
                req['context'].db = db;
                next();
            },
        
            graphqlHTTP((req) => ({
                schema: schema,
                graphiql: process.env.NODE_ENV === "development",
                context: req['context']
            }))
    
        );
    }
}
export default new App().express;