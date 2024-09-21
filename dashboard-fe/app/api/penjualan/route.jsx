export async function GET(request) {
    const penjualanData = [
      { month: 'Jan', penjualan: 20000 },
      { month: 'Feb', penjualan: 15500 },
      { month: 'Mar', penjualan: 21000 },
      { month: 'Apr', penjualan: 15000 },
      { month: 'May', penjualan: 30000 },
      { month: 'Jun', penjualan: 25400 },
      { month: 'Jul', penjualan: 40000 },
      { month: 'Aug', penjualan: 45000 },
      { month: 'Sep', penjualan: 50000 },
      { month: 'Oct', penjualan: 55000 },
      { month: 'Nov', penjualan: 30000 },
      { month: 'Dec', penjualan: 50000 },
    ];
  
    return new Response(JSON.stringify(penjualanData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  