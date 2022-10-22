const express = require('express')
const router = express.Router()

const disposableDomains = require('../lists/disposable.json')
const nonDisposableDomains = require('../lists/non-disposable.json')

router.get('/', (req, res) => {
    res.json({
        disposableDomains: '/disposable',
        nonDisposableDomains: '/non-disposable'
    })
})

router.get('/disposable', (req, res) => {
    res.status(200).json(disposableDomains)
})

router.get('/non-disposable', (req, res) => {
    res.status(200).json(nonDisposableDomains)
})

module.exports = router