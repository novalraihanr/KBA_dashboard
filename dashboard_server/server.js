const express = require('express')
const app = express()
const port = 8080

const { getRevenue, getPendapatan, getPenjualan, getCustomer } = require ('./controller/olapController')

app.get('/', (req, res) => {
    res.send('Test')
})

// app.use(express.json)

app.get('/revenue', async (req, res) => {
    const results = await getRevenue()
    res.json(results[0])
})

app.get('/pendapatan', async (req, res) => {
    const results = await getPendapatan()
    res.json(results[0])
})

app.get('/penjualan', async (req, res) => {
    const results = await getPenjualan()
    res.json(results[0])
})

app.get('/customer', async (req, res) => {
    const results = await getCustomer()
    res.json(results[0])
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

