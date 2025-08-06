const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.url === '/favicon.ico') return res.status(204).end();
    console.log('gg1');
    next();
})

router.get('/', (req, res, next) => { // path의 기본값 : / 왜냐, 경로는 /이거로 시작하니까~
    console.log('gg3');
    res.send('<h1>hi!!!</h1>')
})

module.exports = router;