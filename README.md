<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - NestJS API com Prisma</title>
</head>
<body>
<h1>NestJS API com Prisma</h1>

<p>Este projeto é uma API construída com NestJS e Prisma.</p>

<h3>Passos para Rodar a Aplicação</h3>
<ol>
    <li><strong>Clone o Repositório</strong>:
        <pre><code>git clone https://github.com/karinamzk/nestjs_api.git
cd nestjs_api
</code></pre>
    </li>
    <li><strong>Instale as Dependências</strong>:
        <pre><code>npm install</code></pre>
    </li>
    <li><strong>Configure o Banco de Dados</strong>:
        <p>Crie um arquivo <code>.env</code> na raiz do projeto com as seguintes variáveis de ambiente:</p>
        <pre><code>DATABASE_URL="mysql://usuario:senha@localhost:3306/meubanco"
        </code></pre>
        <p>Substitua <code>usuario</code>, <code>senha</code>, <code>localhost</code>, <code>3306</code> e <code>meubanco</code> com as suas configurações de banco de dados.</p>
    </li>
    <li><strong>Execute as Migrações</strong>:
        <pre><code>npx prisma migrate dev --name init</code></pre>
    </li>
    <li><strong>Inicie a Aplicação</strong>:
        <pre><code>npm run start</code></pre>
    </li>
</ol>

<h2>Testes</h2>

<h3>Insomnia</h3>
<p>O projeto inclui uma coleção de testes para o Insomnia.</p>

<ol>
    <li><strong>Importe o Projeto do Insomnia</strong>:
        <ul>
            <li>Abra o Insomnia.</li>
            <li>Vá em <code>Import/Export</code> &gt; <code>Import Data</code> &gt; <code>From File</code>.</li>
            <li>Selecione o arquivo <code>insomnia_project.json</code> disponível <a href="./docs/insomnia_project">aqui</a>.</li>
        </ul>
    </li>
    <li><strong>Execute os Testes</strong>:
        <ul>
            <li>Selecione a coleção importada.</li>
            <li>Execute as requisições para verificar os endpoints da API.</li>
        </ul>
    </li>
</ol>

</body>
</html>
