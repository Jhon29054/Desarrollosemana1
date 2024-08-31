const express = require('express');
const path = require('path');

const app = express();

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de carpeta pública para archivos estáticos (CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Definición de rutas
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

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

