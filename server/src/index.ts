import express from 'express'
import cors from 'cors'
import fs from 'fs'
import bodyParser from 'body-parser'

const app = express()
app.use(cors())
app.use(bodyParser.text())

app.post('/api/newsletter/emails/new', (req,res) => {
    const data = req.body + '\n'
    const filePath = '../server/data/emails.txt'
    fs.appendFile(filePath, data, (err) => {
        if (err) {
        console.error('Error writing to file:', err)
        res.status(500).send('Error writing to file')
        return
    }
    console.log('Data written to file successfully.')
    res.send('Data written to file successfully.')
    });   
})

app.listen(4000, () => {
    console.log('Server running on port 4000')
})