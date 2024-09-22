export async function GET(request) {
  const pendapatanData = {
    2003: [
      { month: 'Januari', pendapatan: 10000 },
      { month: 'Februari', pendapatan: 15000 },
      { month: 'Maret', pendapatan: 20000 },
      { month: 'April', pendapatan: 25000 },
      { month: 'Mei', pendapatan: 30000 },
      { month: 'Juni', pendapatan: 35000 },
      { month: 'Juli', pendapatan: 42000 },
      { month: 'Agustus', pendapatan: 45000 },
      { month: 'September', pendapatan: 50010 },
      { month: 'Oktober', pendapatan: 55100 },
      { month: 'November', pendapatan: 60000 },
      { month: 'Desember', pendapatan: 63000 },
    ],
    2004: [
      { month: 'Januari', pendapatan: 12000 },
      { month: 'Februari', pendapatan: 16000 },
      { month: 'Maret', pendapatan: 21000 },
      { month: 'April', pendapatan: 26000 },
      { month: 'Mei', pendapatan: 32000 },
      { month: 'Juni', pendapatan: 36000 },
      { month: 'Juli', pendapatan: 42000 },
      { month: 'Agustus', pendapatan: 47000 },
      { month: 'September', pendapatan: 52000 },
      { month: 'Oktober', pendapatan: 57000 },
      { month: 'November', pendapatan: 62000 },
      { month: 'Desember', pendapatan: 67000 },
    ],
    2005: [
      { month: 'Januari', pendapatan: 13000 },
      { month: 'Februari', pendapatan: 17000 },
      { month: 'Maret', pendapatan: 22000 },
      { month: 'April', pendapatan: 27000 },
      { month: 'Mei', pendapatan: 33000 },
      { month: 'Juni', pendapatan: 37000 },
      { month: 'Juli', pendapatan: 43000 },
      { month: 'Agustus', pendapatan: 48000 },
      { month: 'September', pendapatan: 53000 },
      { month: 'Oktober', pendapatan: 58000 },
      { month: 'November', pendapatan: 63000 },
      { month: 'Desember', pendapatan: 68000 },
    ],
  };

  return new Response(JSON.stringify(pendapatanData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
