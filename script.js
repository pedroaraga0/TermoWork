const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/feedback', (req, res) => {
    const { username, message } = req.body;
    // Armazenar feedback em um banco de dados ou arquivo
    console.log(`Feedback de ${username}: ${message}`);
    res.send('Feedback recebido com sucesso!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
