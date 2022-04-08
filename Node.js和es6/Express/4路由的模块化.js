const express = require('express');
const router = express.Router();
router.get('/list', (req, res) => {
    res.send('匹配成功get请求') 
})
router.post('/list', (req, res) => {
    res.send('匹配成功post请求') 
})
module.exports = router;