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
        const result = (await db).query('SELECT w.tahun, w.bulan, SUM(f.revenue) as revenue FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu GROUP BY w.tahun, w.bulan')
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
        const result = (await db).query('SELECT w.tahun, w.bulan, COUNT(DISTINCT od.id_order) as total FROM facts f INNER JOIN dim_customer c on c.sk_customer = f.sk_customer INNER JOIN dim_order_detail od on od.sk_order_detail = f.sk_order_detail INNER JOIN dim_waktu w on w.sk_waktu = f.sk_waktu GROUP BY w.tahun, w.bulan HAVING COUNT(DISTINCT od.id_order) > 1;')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalRevenueTahun() {
    try {
        const result = (await db).query('SELECT w.tahun, SUM(f.revenue) as revenue FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu GROUP BY w.tahun')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalPenjualanTahun() {
    try {
        const result = (await db).query('SELECT w.tahun, SUM(od.quantityOrdered) as penjualan FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu INNER JOIN dim_order_detail od ON od.sk_order_detail = f.sk_order_detail GROUP BY w.tahun')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalBersihTahun() {
    try {
        const result = (await db).query('SELECT w.tahun, SUM(f.net_profit) as net_profit FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu GROUP BY w.tahun')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalCustomerTahun() {
    try {
        const result = (await db).query('SELECT w.tahun, COUNT(DISTINCT od.id_order) as total FROM facts f INNER JOIN dim_customer c on c.sk_customer = f.sk_customer INNER JOIN dim_order_detail od on od.sk_order_detail = f.sk_order_detail INNER JOIN dim_waktu w on w.sk_waktu = f.sk_waktu GROUP BY w.tahun HAVING COUNT(DISTINCT od.id_order) > 1')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalRevenue() {
    try {
        const result = (await db).query('SELECT SUM(f.net_profit) as net_profit FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalPendapatan() {
    try {
        const result = (await db).query('SELECT SUM(f.revenue) as revenue FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalPenjualan() {
    try {
        const result = (await db).query('SELECT SUM(od.quantityOrdered) as penjualan FROM facts f INNER JOIN dim_waktu w ON w.sk_waktu = f.sk_waktu INNER JOIN dim_order_detail od ON od.sk_order_detail = f.sk_order_detail')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function getTotalCustomer() {
    try {
        const result = (await db).query('SELECT COUNT(DISTINCT od.id_order) as total FROM facts f INNER JOIN dim_customer c on c.sk_customer = f.sk_customer INNER JOIN dim_order_detail od on od.sk_order_detail = f.sk_order_detail INNER JOIN dim_waktu w on w.sk_waktu = f.sk_waktu HAVING COUNT(DISTINCT od.id_order) > 1;')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function rankProduct(){
    try {
        const result = (await db).query('SELECT w.tahun, p.productName, SUM(od.quantityOrdered) as total FROM facts f INNER JOIN dim_products p on p.sk_product = f.sk_product INNER JOIN dim_order_detail od on od.sk_order_detail = f.sk_order_detail INNER JOIN dim_waktu w on w.sk_waktu = f.sk_waktu GROUP BY w.tahun, p.productName ORDER BY total DESC;')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

async function countryPejualanTahun(){
    try {
        const result = (await db).query('SELECT c.country , SUM(od.quantityOrdered) as total  FROM facts f INNER JOIN dim_order_detail od ON od.sk_order_detail = f.sk_order_detail INNER JOIN dim_customer c ON c.sk_customer = f.sk_customer GROUP BY c.country')
        return result
    } catch (error) {
        console.error(error)
        return null
    }
}

module.exports = { getRevenue, getPendapatan, getPenjualan, getCustomer, getTotalRevenueTahun, getTotalPenjualanTahun, getTotalBersihTahun, getTotalCustomerTahun, getTotalRevenue, getTotalPendapatan, getTotalPenjualan, getTotalCustomer, rankProduct, countryPejualanTahun }