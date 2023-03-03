const express = require('express');
const router = express.Router()

const getListCoin = require('../controllers/criptos/getListCoin.js');
const getDetailCripto = require('../controllers/criptos/getDetailCripto.js');


const TendenceCripto = require('../controllers/criptos/getTendence.js');
const getGlobalInfo = require('../controllers/criptos/getGlobalInfo.js');

router.get('/list_coin', getListCoin)
router.get('/cripto_detail/:id', getDetailCripto)



router.get('/global_info', getGlobalInfo)
router.get('/tendence', TendenceCripto)


module.exports = router