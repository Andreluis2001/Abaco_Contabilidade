const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Home'});
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.render('cadastroequipamento', {title: 'Cadastro de Equipamento'});
});

router.get('/cad', (req, res) => {
  res.render('cadastroequipamento', {title: 'Cadastro de Equipamento'});
});

module.exports = router;