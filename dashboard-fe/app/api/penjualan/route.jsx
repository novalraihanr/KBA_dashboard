export async function GET(request) {
  const penjualanData = {
      2003: [
          { month: 'Januari', penjualan: 10000 },
          { month: 'Feb', penjualan: 15000 },
          { month: 'Mar', penjualan: 20000 },
          { month: 'Apr', penjualan: 25000 },
          { month: 'May', penjualan: 30000 },
          { month: 'Jun', penjualan: 35000 },
          { month: 'Jul', penjualan: 40000 },
          { month: 'Aug', penjualan: 45000 },
          { month: 'Sep', penjualan: 50000 },
          { month: 'Oct', penjualan: 55000 },
          { month: 'Nov', penjualan: 60000 },
          { month: 'Dec', penjualan: 65000 },
      ],
      2004: [
          { month: 'Jan', penjualan: 12000 },
          { month: 'Feb', penjualan: 16000 },
          { month: 'Mar', penjualan: 21000 },
          { month: 'Apr', penjualan: 26000 },
          { month: 'May', penjualan: 32000 },
          { month: 'Jun', penjualan: 36000 },
          { month: 'Jul', penjualan: 42000 },
          { month: 'Aug', penjualan: 47000 },
          { month: 'Sep', penjualan: 52000 },
          { month: 'Oct', penjualan: 57000 },
          { month: 'Nov', penjualan: 62000 },
          { month: 'Dec', penjualan: 67000 },
      ],
      2005: [
          { month: 'Jan', penjualan: 13000 },
          { month: 'Feb', penjualan: 17000 },
          { month: 'Mar', penjualan: 22000 },
          { month: 'Apr', penjualan: 27000 },
          { month: 'May', penjualan: 33000 },
          { month: 'Jun', penjualan: 37000 },
          { month: 'Jul', penjualan: 43000 },
          { month: 'Aug', penjualan: 48000 },
          { month: 'Sep', penjualan: 53000 },
          { month: 'Oct', penjualan: 58000 },
          { month: 'Nov', penjualan: 63000 },
          { month: 'Dec', penjualan: 68000 },
      ],
  };

  return new Response(JSON.stringify(penjualanData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
