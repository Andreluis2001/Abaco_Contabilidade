const express = require('express');
const routes = require('./src/routes/routes');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './src/public')));
app.use('/', routes);
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Frontend server is running on http://localhost:3000');
});