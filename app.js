const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// const adminRoutes = require('./routes/admin');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminRoutes);
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);






// const http = require('http');
// const fs = require('fs');



// const server = http.createServer((req,res) => {
//     const url = req.url;
    
//     fs.writeFileSync('message.txt', 'DUMMY');
//     res.statusCode = 302;
//     res.setHeader('Location', '/');
//     return res.end();

//     const body = [];
//     req.on('data', (chunk) => {
//         body.push(chunk)
//     })

//     req.on('end', () => {
//         const parseBody = Buffer.concat(body).toString();
//         console.log(parseBody);
//     })
//     if (url === '/'){

//     }
//     console.log(req);
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>'); 
//     res.write('</html>'); 
// }); // 화살표 함수 이렇게 해도 같음! createServer의 콜백함수라고 부름

// server.listen(3000); 