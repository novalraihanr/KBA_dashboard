const express = require('express')
const app = express()
const port = 8080

const { getRevenue, getPendapatan, getPenjualan, getCustomer, getTotalRevenueTahun, getTotalPenjualanTahun, getTotalBersihTahun, getTotalCustomerTahun, getTotalRevenue, getTotalPendapatan, getTotalPenjualan, getTotalCustomer, rankProduct, countryPejualanTahun } = require ('./controller/olapController')

app.get('/', (req, res) => {
    res.send('Test')
})

// app.use(express.json)

app.get('/revenue', async (req, res) => {
    const results = await getRevenue()
    res.json(results[0])
})

app.get('/revenue/total', async (req, res) => {
    const results = await getTotalBersihTahun()
    res.json(results[0])
})

app.get('/revenue/totalAll', async (req, res) => {
    const results = await getTotalRevenue()
    res.json(results[0])
})

app.get('/pendapatan', async (req, res) => {
    const results = await getPendapatan()
    res.json(results[0])
})

app.get('/pendapatan/total', async (req, res) => {
    const results = await getTotalRevenueTahun()
    res.json(results[0])
})

app.get('/pendapatan/totalAll', async (req, res) => {
    const results = await getTotalPendapatan()
    res.json(results[0])
})

app.get('/penjualan', async (req, res) => {
    const results = await getPenjualan()
    res.json(results[0])
})

app.get('/penjualan/total', async (req, res) => {
    const results = await getTotalPenjualanTahun()
    res.json(results[0])
})

app.get('/penjualan/totalAll', async (req, res) => {
    const results = await getTotalPenjualan()
    res.json(results[0])
})

app.get('/customer', async (req, res) => {
    const results = await getCustomer()
    res.json(results[0])
})

app.get('/customer/total', async (req, res) => {
    const results = await getTotalCustomerTahun()
    res.json(results[0])
})

app.get('/customer/totalAll', async (req, res) => {
    const results = await getTotalCustomer()
    res.json(results[0])
})

app.get('/rank', async (req, res) => {
    const results = await rankProduct()
    res.json(results[0])
})

app.get('/country', async (req, res) => {
    const results = await countryPejualanTahun()
    res.json(results[0])
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

