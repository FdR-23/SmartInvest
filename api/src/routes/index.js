const express = require('express');
const apicache = require('apicache');
 require('dotenv').config()
const  FinanceNews  = require('../controllers/getFinaceNews.js')

const cache = apicache.middleware;
const router = express.Router()

const criptoRoutes = require('../routes/routes_cripto.js')


router.use('/cripto', criptoRoutes)

router.get('/finance_news', FinanceNews)



module.exports = router;