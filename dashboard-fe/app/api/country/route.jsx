export async function GET(request) {
    const countryData = {
      USA: 2000,
      AUS: 60,
      NOR: 40,
      PL: 20,
      DE: 100,
      ES: 70,
      SE: 50,
      DEN: 30,
      PT: 90,
      JPN: 75,
      FI: 55,
      UK: 85,
      IE: 65,
      CND: 95,
      CH: 45,
      NL: 35,
      BQBO: 25,
      BQSE: 15,
      BQSA: 10,
      BE: 20,
      NZ: 55,
      ZA: 80,
      AT: 30,
      PH: 60,
      IL: 75,
    };
  
    return new Response(JSON.stringify(countryData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  