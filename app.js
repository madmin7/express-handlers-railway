import express from 'express';
const app = express();
import * as url from 'url';
import hbs from 'hbs';

import * as dotenv from 'dotenv'; 
dotenv.config()


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const port = process.env.PORT;

app.set('view engine', 'hbs');

//handlebars
hbs.registerPartials( __dirname + '/views/partials');

//middleware || Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
      nombre: 'Marcelo Gareis',
      titulo: 'Curso de node '
    });
});

app.get('/generic', (req, res) => {
    res.render('home', {
      nombre: 'Marcelo Gareis',
      titulo: 'Curso de node '
    });
});

app.get('/elements', (req, res) => {
    res.render('home', {
      nombre: 'Marcelo Gareis',
      titulo: 'Curso de node '
    });
});

app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html');
});

app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html');
});

app.get('*', (req, res) => {
  res.sendFile( __dirname + '/public/404.html');
});


app.listen(port, ()=> {
    console.log(`Esta app esta escuchando en http://localhost:${ port }`);
});