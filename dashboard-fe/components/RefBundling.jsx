import React, { useEffect, useState } from "react";

const RefBundling = ({ selectedYear, selectedMonth }) => {
  const [bundlingData, setBundlingData] = useState([]);
  const [filteredBundlingData, setFilteredBundlingData] = useState([]);

  useEffect(() => {
    const fetchBundlingData = async () => {
      try {
        const response = await fetch("/api/bundling");
        const data = await response.json();
        setBundlingData(data); 
      } catch (error) {
        console.error("Error fetching bundling data:", error);
      }
    };

    fetchBundlingData();
  }, []);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const yearData = bundlingData[selectedYear];
      if (yearData) {
        const filteredData = yearData.filter(
          (item) => item.month === selectedMonth
        );
        setFilteredBundlingData(filteredData);
      }
    } else {
      setFilteredBundlingData([]); 
    }
  }, [selectedYear, selectedMonth, bundlingData]);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-[#05004E] font-poppins font-semibold">Product Bundling</p>
      </div>

      <div className="grid mt-4 font-poppins">
        <div className="grid grid-cols-12 text-[#96A5B8] border-b pt-4">
          <div className="col-span-1 text-xxs">#</div>
          <div className="col-span-10 text-xxs">Name</div>
        </div>

        {filteredBundlingData.length > 0 ? (
          filteredBundlingData.map((bundling, index) => (
            <div key={index}>
              {["bundling1", "bundling2", "bundling3"].map((bundlingKey, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3"
                >
                  <div className="col-span-1 text-xs">{idx + 1}</div>
                  <div className="col-span-11 text-xs">
                    {bundling[bundlingKey].map((product, productIndex) => (
                      <div key={productIndex}>{product}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : selectedYear && selectedMonth ? (
          <div>Pilih tahun dan bulan</div>
        ) : (
          <div>Pilih tahun dan bulan</div>
        )}
      </div>
    </div>
  );
};

export default RefBundling;
