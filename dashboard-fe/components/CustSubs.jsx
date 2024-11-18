import React, { useState, useEffect } from "react";

const CustSubs = () => {
  const [searchInput, setSearchInput] = useState(""); 
  const [customers, setCustomers] = useState([]); 
  const [filteredCustomers, setFilteredCustomers] = useState([]); 
  const [warningMessage, setWarningMessage] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/churn/");
        const data = await response.json();

        const sortedData = data.sort((a, b) => b.purchases - a.purchases);

        setCustomers(sortedData);
        setFilteredCustomers(sortedData.slice(0, 10)); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setWarningMessage("Failed to fetch data.");
      }
    };

    fetchData();
  }, []);
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value === "") {
      setFilteredCustomers(customers.slice(0, 10));
    }
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const filtered = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredCustomers(filtered);
    }
  };

  return (
    <div className="col-span-5 bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <p className="text-[#05004E] font-poppins font-semibold">Top Customers</p>
        <input
          type="text"
          placeholder="Search Customer"
          className="rounded-lg text-xs border-corner-grey"
          value={searchInput}
          onChange={handleInputChange}
          onKeyDown={handleSearch}
        />
      </div>

      {warningMessage && (
        <p className="text-red-500 text-xs text-end">{warningMessage}</p>
      )}

      <div
        className={`grid mt-2 font-poppins ${
          filteredCustomers.length > 4 ? "max-h-48 overflow-y-scroll" : ""
        }`}
      >
        <div className="grid grid-cols-12 text-[#96A5B8] border-b pt-4">
          <div className="col-span-1 text-xxs">#</div>
          <div className="col-span-5 text-xxs">Name</div>
          <div className="col-span-2 text-xxs text-center">Purchases</div>
          <div className="col-span-4 text-xxs text-end">Loyal Stop Prediction</div>
        </div>

        {filteredCustomers.length === 0 ? (
          <div className="text-center col-span-12 text-xs text-[#444A6D]">
            No customers found.
          </div>
        ) : (
          filteredCustomers.map((customer, index) => (
            <div
              key={index}
              className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3"
            >
              <div className="col-span-1 text-xs">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="col-span-5 text-xs">{customer.name}</div>
              <div className="col-span-2 text-xs text-center">{customer.purchases}</div>
              <div className="col-span-4 text-xs text-end">{customer.churnPrediction}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustSubs;
