const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('gg2');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
})
 
router.use('/product', (req, res, next) => {
    console.log(req.body) // 사용자가 작성한 내용 보기. 하지만 요청이 들어오는지 확인할 뿐 내용까지 확인하지 않음. 따라서 분석기 필요!~
    res.redirect('/');
})


module.exports = router; 
