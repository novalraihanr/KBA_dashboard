export async function GET(request) {
    const pendapatanData = [
      { month: 'Jan', pendapatan: 20000 },
      { month: 'Feb', pendapatan: 15500 },
      { month: 'Mar', pendapatan: 21000 },
      { month: 'Apr', pendapatan: 15000 },
      { month: 'May', pendapatan: 30000 },
      { month: 'Jun', pendapatan: 25400 },
      { month: 'Jul', pendapatan: 40000 },
      { month: 'Aug', pendapatan: 45000 },
      { month: 'Sep', pendapatan: 50000 },
      { month: 'Oct', pendapatan: 55000 },
      { month: 'Nov', pendapatan: 30000 },
      { month: 'Dec', pendapatan: 50000 },
    ];
  
    return new Response(JSON.stringify(pendapatanData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  