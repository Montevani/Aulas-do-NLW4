import 'reflect-metadata';
import express from 'express';

const app = express();

import "./database"; //reconhece por padrão que o arquivo que precisa ser importado é o index


/**
 * GET => Busca
 * Post => Salvar
 * Put => Alterar
 * Delete => Deletar
 * Patch => Alteração específica
 */

    //http://localhost:3333/users

app.get("/", (resquest, response) => {
    return response.json({message:"Hello, Potion Seller. I need your strongest potions."});
});

// 1º param => Rota (recurso API)
// 2º param => request, response

app.post("/", (request, response) => {
    return response.json({message: "Os dados foram salvos com sucesso!"});
});

//As rotas podem ser iguais mas os métodos diferentes

app.listen(3333, () => console.log("Server is running!"));
