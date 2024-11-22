export async function GET(request) {
  const bundlingData = {
    bundling1_item1: "Matchbox Jeep Wrangler",
    bundling1_item2: "Maisto Lamborghini Aventador",
    bundling2_item1: "Tomica Nissan GT-R R35",
    bundling2_item2: "Bburago Ferrari F40",
    bundling3_item1: "Greenlight Ford Mustang GT",
    bundling3_item2: "Mini GT Toyota Supra MK5"
  };

  return new Response(JSON.stringify(bundlingData), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
}
