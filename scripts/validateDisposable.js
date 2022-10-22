const disposableDomains = require('../lists/disposable.json')
const nonDisposableDomains = require('../lists/non-disposable.json')

const validateDisposable = (email, valid) => {

    let finalMessage = 'Invalid Email'

    if (valid)  {
        let emailSplitted = email.split('@')
        let emailDomain = emailSplitted[emailSplitted.length - 1]

        if(disposableDomains.includes(emailDomain)) {
            finalMessage = 'Disposable'
        } else if (nonDisposableDomains.includes(emailDomain)) {
            finalMessage = 'Non Disposable'
        } else {
            finalMessage = 'Unknown'
        }
    }
    
    return finalMessage
}

module.exports = validateDisposable