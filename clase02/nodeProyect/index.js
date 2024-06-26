const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/operaciones', (req, res) => {
  res.sendFile(__dirname + '/public/operaciones.html');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
