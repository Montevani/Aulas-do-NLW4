import 'reflect-metadata';
import express from 'express';
import "./database"; //reconhece por padrão que o arquivo que precisa ser importado é o index
import { router } from "./routes";
import { createConnection } from 'typeorm';

createConnection();
const app = express();

/**
 * GET => Busca
 * Post => Salvar
 * Put => Alterar
 * Delete => Deletar
 * Patch => Alteração específica
 */
//http://localhost:3333/users

app.use(express.json());
app.use(router);

export { app };