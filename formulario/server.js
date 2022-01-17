const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/jogadores', (req, resp) => {
  console.log(req.body);
  resp.send('<h1>Cadastro efetuado com sucesso</h1>');
});

app.listen(3003);
