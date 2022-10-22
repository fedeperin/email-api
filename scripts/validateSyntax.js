const validateSyntax = email => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const validEmail = String(email)
    .toLowerCase()
    .match(regex)

    let emailValidity = validEmail ? true : false
    const emailSplitted = email.split('@')

    emailValidity = emailValidity ? (emailSplitted[0].length > 64) ? false : true : false
    emailValidity = emailValidity ? (emailSplitted[1].length > 255) ? false : true : false

    return emailValidity
}

module.exports = validateSyntax