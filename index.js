const express = require('express')
const cors = require('cors')
const app = express()

const writeIndexHTML = require('./scripts/markdownToHTML')

const PORT = process.env.PORT || 3000

// Use public folder as static
app.use(express.static('public'))

// Write the index.html file with markdown data
writeIndexHTML()

// Allow Cross Origin Resource Sharing from any origin
app.use(cors({origin: '*'}))

// Use the router to assign .js files to each route
app.use('/api/lists', require('./router/lists.js'))
app.use('/api/validate', require('./router/validate.js'))

// Handle 404 error:
app.use((req, res) => {
    res.status(404).json({
        error: '404 error, nothing here'
    })
})

app.listen(PORT, () => console.log(`Listening app at port ${ PORT }`))