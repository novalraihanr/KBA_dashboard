export async function GET(request) {
    const produkData = {
        2003: [
            { produk: 'Produk A', penjualan: 112000 },
            { produk: 'Produk B', penjualan: 15000 },
            { produk: 'Produk C', penjualan: 20000 },
            { produk: 'Produk D', penjualan: 25000 },
            { produk: 'Produk E', penjualan: 30000 },
            { produk: 'Produk F', penjualan: 35000 },
            { produk: 'Produk G', penjualan: 40000 },
            { produk: 'Produk H', penjualan: 45000 },
            { produk: 'Produk I', penjualan: 50000 },
            { produk: 'Produk J', penjualan: 55000 },
        ],
        2004: [
            { produk: 'Produk A', penjualan: 16000 },
            { produk: 'Produk B', penjualan: 21000 },
            { produk: 'Produk C', penjualan: 25000 },
            { produk: 'Produk D', penjualan: 28000 },
            { produk: 'Produk E', penjualan: 32000 },
            { produk: 'Produk F', penjualan: 37000 },
            { produk: 'Produk G', penjualan: 42000 },
            { produk: 'Produk H', penjualan: 48000 },
            { produk: 'Produk I', penjualan: 52000 },
            { produk: 'Produk J', penjualan: 58000 },
        ],
        2005: [
            { produk: 'Produk A', penjualan: 22000 },
            { produk: 'Produk B', penjualan: 25000 },
            { produk: 'Produk C', penjualan: 30000 },
            { produk: 'Produk D', penjualan: 33000 },
            { produk: 'Produk E', penjualan: 38000 },
            { produk: 'Produk F', penjualan: 43000 },
            { produk: 'Produk G', penjualan: 48000 },
            { produk: 'Produk H', penjualan: 53000 },
            { produk: 'Produk I', penjualan: 58000 },
            { produk: 'Produk J', penjualan: 63000 },
        ],
    };

    return new Response(JSON.stringify(produkData), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
