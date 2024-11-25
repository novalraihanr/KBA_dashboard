import React, { useEffect, useState } from "react";

const RefBundling = () => {
  const [bundlingData, setBundlingData] = useState(null);

  useEffect(() => {
    const fetchBundlingData = async () => {
      try {
        const response = await fetch("http://localhost:8080/bundle");
        const data = await response.json();

        setBundlingData(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching bundling data:", error);
      }
    };

    fetchBundlingData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#05004E] font-poppins font-semibold">
          Product Bundling
        </p>
      </div>

      <div className="grid mt-4 font-poppins">
        <div className="grid grid-cols-12 text-[#96A5B8] border-b pt-4">
          <div className="col-span-1 text-xxs">#</div>
          <div className="col-span-11 text-xxs">Name</div>
        </div>

        {bundlingData ? (
          bundlingData.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3"
            >
              <div className="col-span-1 text-xs">{idx + 1}</div>
              <div className="col-span-11 text-xs">
                <div>{item.items}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-32 text-sm text-gray-500 border-gray-500 rounded">
            Loading data...
          </div>
        )}
      </div>
    </div>
  );
};

export default RefBundling;
