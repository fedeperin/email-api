const express = require('express')
const router = express.Router()

const validateSyntax = require('../scripts/validateSyntax.js')
const validateDisposable = require('../scripts/validateDisposable.js')

router.get('/', (req, res) => {
    const email = req.query.email ? req.query.email.trim() : ''

    let response
    let httpCode
    validEmail = validateSyntax(email)

    if(email) {
        response = {
            disposable: validateDisposable(email, validEmail),
            validSyntax: validEmail
        }
        httpCode = 200
    }else {
        response = {
            error: 'Email param should be passed to this endpoint'
        }
        httpCode = 400
    }

    res.status(httpCode).json(response)
})

module.exports = router