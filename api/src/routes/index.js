const express = require('express');
const apicache = require('apicache');

const { FinanceNews } = require('../controllers/getFinaceNews.js')

const cache = apicache.middleware;
const router = express.Router()

const criptoRoutes = require('../routes/routes_cripto.js')


router.use('/cripto', criptoRoutes)

router.get('/financeNews', FinanceNews)





module.exports = router;