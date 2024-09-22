const { db } = require('../database/config')

async function getRevenue() {
    try {
        const result = (await db).query('SELECT w.tahun, w.bulan, SUM(f.net_profit) as net_profit FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu GROUP BY w.tahun, w.bulan')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getPendapatan() {
    try {
        const result = (await db).query('SELECT w.tahun, w.bulan, f.revenue FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu GROUP BY w.tahun, w.bulan')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getPenjualan() {
    try {
        const result = (await db).query('SELECT w.tahun, w.bulan, SUM(od.quantityOrdered) as penjualan FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu INNER JOIN dim_order_detail od ON od.sk_order_detail = f.sk_order_detail GROUP BY w.tahun, w.bulan')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getCustomer() {
    try {
        const result = (await db).query('SELECT w.tahun, w.bulan, COUNT(c.customerNumber) as total FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu INNER JOIN dim_customer c ON c.sk_customer = f.sk_customer GROUP BY w.tahun, w.bulan')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports = { getRevenue, getPendapatan, getPenjualan, getCustomer }