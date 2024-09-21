export async function GET(request) {
  const netProfitData = {
      2003: [
          { month: 'Januari', netProfit: 10000 },
          { month: 'Feb', netProfit: 15000 },
          { month: 'Mar', netProfit: 20000 },
          { month: 'Apr', netProfit: 25000 },
          { month: 'May', netProfit: 30000 },
          { month: 'Jun', netProfit: 35000 },
          { month: 'Jul', netProfit: 40000 },
          { month: 'Aug', netProfit: 45000 },
          { month: 'Sep', netProfit: 50000 },
          { month: 'Oct', netProfit: 55000 },
          { month: 'Nov', netProfit: 60000 },
          { month: 'Dec', netProfit: 65000 },
      ],
      2004: [
          { month: 'Jan', netProfit: 12000 },
          { month: 'Feb', netProfit: 16000 },
          { month: 'Mar', netProfit: 21000 },
          { month: 'Apr', netProfit: 26000 },
          { month: 'May', netProfit: 32000 },
          { month: 'Jun', netProfit: 36000 },
          { month: 'Jul', netProfit: 42000 },
          { month: 'Aug', netProfit: 47000 },
          { month: 'Sep', netProfit: 52000 },
          { month: 'Oct', netProfit: 57000 },
          { month: 'Nov', netProfit: 62000 },
          { month: 'Dec', netProfit: 67000 },
      ],
      2005: [
          { month: 'Jan', netProfit: 13000 },
          { month: 'Feb', netProfit: 17000 },
          { month: 'Mar', netProfit: 22000 },
          { month: 'Apr', netProfit: 27000 },
          { month: 'May', netProfit: 33000 },
          { month: 'Jun', netProfit: 37000 },
          { month: 'Jul', netProfit: 43000 },
          { month: 'Aug', netProfit: 48000 },
          { month: 'Sep', netProfit: 53000 },
          { month: 'Oct', netProfit: 58000 },
          { month: 'Nov', netProfit: 63000 },
          { month: 'Dec', netProfit: 68000 },
      ],
  };

  return new Response(JSON.stringify(netProfitData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
