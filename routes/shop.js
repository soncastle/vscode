const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();
router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // if (req.url === '/favicon.ico') return res.status(204).end();
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));// 절대경로를 작성할 수 있게 해주지만 dirname으로 수동으로 구현 가능함!! / path : 생성 경로 이어붙이기 / join : 함수 인자 여러개 새그먼트를 이어붙여 마지막에 경로 출력 // __drname: 프로젝트 폴더의 전체 경로 - 절대 경로를 이 프로제트 폴더로 고정해 주는 전역변수
    // res.sendFile('./views/shop.html');
})

// router.get('/', (req, res, next) => { // path의 기본값 : / 왜냐, 경로는 /이거로 시작하니까~
//     console.log('gg3');
//     res.send('<h1>hi!!!</h1>')
// })

module.exports = router;
