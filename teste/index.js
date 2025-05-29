const express = require('express');
const routes = require('./src/routes/protected_routes/routes');
const path = require('path');

const app = express();


app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, './src/public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Frontend server is running on http://localhost:3000');
});