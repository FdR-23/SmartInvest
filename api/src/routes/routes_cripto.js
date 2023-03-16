const express = require('express');
const router = express.Router()

const getListCoin = require('../controllers/criptos/getListCoin.js');
const getDetailCripto = require('../controllers/criptos/getDetailCripto.js');
const graphCripto = require('../controllers/criptos/getGraphCripto.js')
const ticketCripto = require('../controllers/criptos/getTicketCripto.js')
const getExchangeRateBTC = require('../controllers/criptos/getExchangeRateBTC.js')

const getNewsCripto = require('../controllers/criptos/getNewsCripto.js')
const getGlobalInfo = require('../controllers/criptos/getGlobalInfo.js');
const TendenceCripto = require('../controllers/criptos/getTendence.js');

//Page Principal Cripto
router.get('/global_info', getGlobalInfo)
router.get('/exchanges_rates', getExchangeRateBTC)
router.get('/news', getNewsCripto)
router.get('/tendence', TendenceCripto)
router.get('/list_coin', getListCoin)


//Page Details Cripto
router.get('/cripto_detail/:id', getDetailCripto)

router.get('/tickets/:id', ticketCripto)

router.get('/graph_crypto/:id', graphCripto)



module.exports = router