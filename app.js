const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //미들웨어 등록 - 수동으로 해야했던 요청본문분석 수행

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
});

// const server = http.createServer(app);
// server.listen(3000); //서버 바로 농료하지 않고 계속 열어놓을 수 있도록 하는 것!

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