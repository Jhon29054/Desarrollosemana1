const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});

app.get('/producto', (req, res) => {
    res.render('producto');
});

app.get('/marcas', (req, res) => {
    res.render('marcas');
});

app.get('/equipo', (req, res) => {
    res.render('equipo');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

