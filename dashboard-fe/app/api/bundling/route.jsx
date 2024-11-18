export async function GET(request) {
  const bundlingData = {
    bundling1: ["Product 1", "Product 2"],
    bundling2: ["Product 3", "Product 4"],
    bundling3: ["Product 5", "Product 6"],
  };

  return new Response(JSON.stringify(bundlingData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
