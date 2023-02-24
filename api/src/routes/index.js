const express = require('express');
const apicache = require('apicache');


const cache = apicache.middleware;
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!')
})





module.exports = router;