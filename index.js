const express = require("express");
const app = express();

// Rota inicial
app.get("/", function (req, res) {
    res.send(`
        <h1>Bem-vindo à Loja do Meu Projeto!</h1>
        <p>Projeto de Desenvolvimento de Software em Nuvem</p>
        <ul>
            <li><a href="/produtos">Ver produtos</a></li>
            <li><a href="/sobre">Sobre a equipe</a></li>
            <li><a href="/consulta/teclado">Consultar um item</a></li>
            <li><a href="/cadastro/mouse">Cadastrar um produto</a></li>
        </ul>
    `);
});

// Rota de produtos
app.get("/produtos", function (req, res) {
    res.send(`
        <h1>Lista de Produtos</h1>
        <ul>
            <li>Notebook</li>
            <li>Teclado</li>
            <li>Mouse</li>
        </ul>
        <a href="/">Voltar</a>
    `);
});

// Nova rota: sobre
app.get("/sobre", function (req, res) {
    res.send(`
        <h1>Sobre a Equipe</h1>
        <p>Integrantes: Nikolas Vianna De Carvalho</p>
        <p>Disciplina: Desenvolvimento de Software em Nuvem</p>
        <a href="/">Voltar</a>
    `);
});

// Rota com parâmetro
app.get("/consulta/:parametro", function (req, res) {
    res.send("<h1>Resultado da consulta: " + req.params.parametro + "</h1><a href='/'>Voltar</a>");
});

// Rota com parâmetro opcional (sintaxe Express 5)
app.get("/cadastro{/:nome}", function (req, res) {
    const nome = req.params.nome;
    if (nome) {
        res.send("<h1>Produto " + nome + " criado!</h1><a href='/'>Voltar</a>");
    } else {
        res.send("<h1>Produto criado!</h1><a href='/'>Voltar</a>");
    }
});

// Inicia o servidor (usa a porta da nuvem, ou 3000 localmente)
const porta = process.env.PORT ?? 3000;
app.listen(porta, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar.");
    } else {
        console.log("Servidor iniciado na porta " + porta);
    }
});