const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>')
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});
 
router.post('/add-product', (req, res, next) => {
    // console.log(req.body) // 사용자가 작성한 내용 보기. 하지만 요청이 들어오는지 확인할 뿐 내용까지 확인하지 않음. 따라서 분석기 필요!~
    products.push({title: req.body.title})
    res.redirect('/');
});

exports.routes = router;
exports.products = products;
// module.exports = router;