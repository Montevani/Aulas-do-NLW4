import 'reflect-metadata';
import express from 'express';
const app = express();
import "./database"; //reconhece por padrão que o arquivo que precisa ser importado é o index
import { router } from "./routes";

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

app.listen(3333, () => console.log("Server is running!"));
