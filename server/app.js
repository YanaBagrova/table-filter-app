const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 3001;

const homeRoute = require('./routes/home.route');

app.use(express.json());
app.use(require('morgan')('dev'));
app.use(require('cors')({
  origin: 'http://localhost:3000/',
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use('/', homeRoute);

app.listen(PORT, () => {
  console.log('Сервер слушает порт', PORT);
});
