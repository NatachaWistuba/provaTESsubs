console.clear();

import express from "express";
import { router } from "./config/routes";
import cors from "cors";
import { mongoose } from "./config/database";

const app = express( );

const db = mongoose;

app.use(cors( ));

app.use(express.json( ));

app.use(router);

app.listen(3000,( ) => {
    console.log("O servidor está rodando...");
})