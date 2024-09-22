export async function GET(request) {
  const customerData = {
      2003: [
          { month: 'Jan', customer: 10000 },
          { month: 'Feb', customer: 15000 },
          { month: 'Mar', customer: 20000 },
          { month: 'Apr', customer: 25000 },
          { month: 'May', customer: 30000 },
          { month: 'Jun', customer: 35000 },
          { month: 'Jul', customer: 40000 },
          { month: 'Aug', customer: 45000 },
          { month: 'Sep', customer: 50000 },
          { month: 'Oct', customer: 55000 },
          { month: 'Nov', customer: 60000 },
          { month: 'Dec', customer: 65000 },
      ],
      2004: [
          { month: 'Jan', customer: 12000 },
          { month: 'Feb', customer: 16000 },
          { month: 'Mar', customer: 21000 },
          { month: 'Apr', customer: 26000 },
          { month: 'May', customer: 32000 },
          { month: 'Jun', customer: 36000 },
          { month: 'Jul', customer: 42000 },
          { month: 'Aug', customer: 47000 },
          { month: 'Sep', customer: 52000 },
          { month: 'Oct', customer: 57000 },
          { month: 'Nov', customer: 62000 },
          { month: 'Dec', customer: 67000 },
      ],
      2005: [
          { month: 'Jan', customer: 13000 },
          { month: 'Feb', customer: 17000 },
          { month: 'Mar', customer: 22000 },
          { month: 'Apr', customer: 27000 },
          { month: 'May', customer: 33000 },
          { month: 'Jun', customer: 37000 },
          { month: 'Jul', customer: 43000 },
          { month: 'Aug', customer: 48000 },
          { month: 'Sep', customer: 53000 },
          { month: 'Oct', customer: 58000 },
          { month: 'Nov', customer: 63000 },
          { month: 'Dec', customer: 68000 },
      ],
  };

  return new Response(JSON.stringify(customerData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
