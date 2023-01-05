import http from 'http';


http.createServer( (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    
    res.write('Hola mundo');
    res.end();
})
.listen( 3000 );
console.log('Escuchando en el puerto: 3000' );