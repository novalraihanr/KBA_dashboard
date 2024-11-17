export async function GET(request) {
  const data = [
    { name: "John Doe", purchases: 15, churnPrediction: "2023-06-15" },
    { name: "Jane Smith", purchases: 8, churnPrediction: "2023-07-22" },
    { name: "Alice Johnson", purchases: 20, churnPrediction: "2023-08-01" },
    { name: "Robert Brown", purchases: 5, churnPrediction: "2023-09-10" },
    { name: "Michael Green", purchases: 10, churnPrediction: "2023-07-05" },
    { name: "Emily Davis", purchases: 12, churnPrediction: "2023-06-20" },
    { name: "David Wilson", purchases: 3, churnPrediction: "2023-10-01" },
    { name: "Sophia White", purchases: 18, churnPrediction: "2023-09-15" },
    { name: "Daniel Martinez", purchases: 7, churnPrediction: "2023-06-10" },
    { name: "Emma Thompson", purchases: 2, churnPrediction: "2023-07-30" },
    { name: "Oliver Garcia", purchases: 22, churnPrediction: "2023-05-15" },
    { name: "Isabella Miller", purchases: 9, churnPrediction: "2023-08-10" },
    { name: "James Moore", purchases: 6, churnPrediction: "2023-06-25" },
    { name: "Charlotte Taylor", purchases: 13, churnPrediction: "2023-05-01" },
    { name: "Benjamin Anderson", purchases: 11, churnPrediction: "2023-07-18" },
    { name: "Amelia Thomas", purchases: 1, churnPrediction: "2023-08-15" },
    { name: "Lucas Jackson", purchases: 19, churnPrediction: "2023-09-01" },
    { name: "Mia Martin", purchases: 4, churnPrediction: "2023-07-12" },
    { name: "Henry Lee", purchases: 14, churnPrediction: "2023-05-25" },
    { name: "Harper Harris", purchases: 16, churnPrediction: "2023-06-05" },
  ];

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
