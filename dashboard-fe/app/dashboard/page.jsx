"use client";

import Image from 'next/image';
import LineChart from '@components/LineChart';
import BarChartJual from '@components/BarChartJual';
import BarChartDapat from '@components/BarChartDapat';
import WorldMap from '@components/WorldMap';
import PendapatanVS from '@components/PendapatanVS';
import PenjualanVS from '@components/PenjualanVS';
import UniqueCustVS from '@components/UniqueCustVS';
import NetProfitVS from '@components/NetProfitVS';
import { useState } from 'react';
import { useEffect } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  //INI BUAT ATUR TAHUN BULAN VAL
  const [selectedYear, setSelectedYear] = useState('Tahun');
  const [selectedMonth, setSelectedMonth] = useState('Bulan');
  const monthsMap = {
    'Januari': 0,
    'Februari': 1,
    'Maret': 2,
    'April': 3,
    'Mei': 4,
    'Juni': 5,
    'Juli': 6,
    'Agustus': 7,
    'September': 8,
    'Oktober': 9,
    'November': 10,
    'Desember': 11,
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setSelectedMonth('Bulan');
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  //INI BUAT PENDAPATAN
  const [pendapatanData, setPendapatanData] = useState(null);
  const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [previousMonthPendapatan, setPreviousMonthPendapatan] = useState(null);

  useEffect(() => {
    const fetchPendapatan = async () => {
      const response_total = await fetch(`http://localhost:8080/pendapatan/totalAll`);
      const data_total = await response_total.json();

      // const yearData = data_total.filter(item => item.tahun == selectedYear);

      const overallPendapatan = data_total[0].revenue;

      // // let overallPendapatan = 0;
      // // for (let year of [2003, 2004, 2005]) {
      // //   const yearData = data[year];
      // //   yearData.forEach(month => {
      // //     overallPendapatan += month.pendapatan;
      // //   });
      // // }
      
      setTotalPendapatan(overallPendapatan);

      if (selectedYear !== 'Tahun') {

        const response_total = await fetch(`http://localhost:8080/pendapatan/total`);
        const data_total = await response_total.json();

        const yearData_total = data_total.filter(item => item.tahun == selectedYear);
        const overallPendapatan = yearData_total.map(item => item.revenue);

        const response = await fetch(`http://localhost:8080/pendapatan`);
        const data = await response.json();
        
        const yearData = data.filter(item => item.tahun == selectedYear);

        if (selectedMonth !== 'Bulan') {
          const monthIndex = monthsMap[selectedMonth];
          const month = yearData.find(item => item.bulan == monthIndex + 1);
          if(typeof month !== "undefined"){
            const nowMonthIndex = month.bulan;
            // console.log(month)
            if (yearData && month) {
              setPendapatanData(month.revenue);
  
              const prevMonth = yearData.find(item => item.bulan == nowMonthIndex - 1);
              // console.log(prevMonth)
              if (prevMonth) {
                setPreviousMonthPendapatan(prevMonth.revenue);
              } else {
                setPreviousMonthPendapatan(null);
              }
            } else {
              setPendapatanData(0);
            }
          }else {
            setPendapatanData(0);
          }
        } else {
          // const total = yearData.reduce((acc, curr) => acc + curr.pendapatan, 0);
          setTotalPendapatan(overallPendapatan);
          setPendapatanData(null);
          setPreviousMonthPendapatan(null);
        }
      }
    };

    fetchPendapatan();
  }, [selectedYear, selectedMonth]);

  //INI BUAT PENJUALAN
  const [penjualanData, setPenjualanData] = useState(null);
  const [totalPenjualan, setTotalPenjualan] = useState(0);
  const [previousMonthPenjualan, setPreviousMonthPenjualan] = useState(null);

  useEffect(() => {
    const fetchPenjualan = async () => {
      const response = await fetch(`http://localhost:8080/penjualan/totalAll`);
      const data = await response.json();

      const overallPenjualan = data[0].penjualan

      // let overallPenjualan = 0;
      // for (let year of [2003, 2004, 2005]) {
      //   const yearData = data[year];
      //   yearData.forEach(month => {
      //     overallPenjualan += month.penjualan;
      //   });
      // }
      setTotalPenjualan(overallPenjualan);

      if (selectedYear !== 'Tahun') {
        const response_total = await fetch(`http://localhost:8080/penjualan/total`);
        const data_total = await response_total.json();

        const yearData_total = data_total.filter(item => item.tahun == selectedYear);
        const overallPenjualan = yearData_total.map(item => item.penjualan);

        const response = await fetch(`http://localhost:8080/penjualan`);
        const data = await response.json();
        
        const yearData = data.filter(item => item.tahun == selectedYear);

        if (selectedMonth !== 'Bulan') {
          const monthIndex = monthsMap[selectedMonth];
          const month = yearData.find(item => item.bulan == monthIndex + 1);
          if(typeof month !== "undefined"){
            const nowMonthIndex = month.bulan;
            if (yearData && month) {
              setPenjualanData(month.penjualan);
  
              const prevMonth = yearData.find(item => item.bulan == nowMonthIndex - 1);
              if (prevMonth) {
                setPreviousMonthPenjualan(prevMonth.penjualan);
              } else {
                setPreviousMonthPenjualan(null);
              }
            } else {
              setPenjualanData(0);
            }
          }else {
            setPenjualanData(0);
          }
        } else {
          // const total = yearData.reduce((acc, curr) => acc + curr.penjualan, 0);
          setTotalPenjualan(overallPenjualan);
          setPenjualanData(null);
          setPreviousMonthPenjualan(null);
        }
      }
    };

    fetchPenjualan();
  }, [selectedYear, selectedMonth]);

  //INI YANG UNTUNG BERSIH VAL
  const [netProfit, setNetProfit] = useState(null);
  const [totalNetProfit, setTotalNetProfit] = useState(0);
  const [previousMonthProfit, setPreviousMonthProfit] = useState(null);

  useEffect(() => {
    const fetchNetProfit = async () => {
      const response = await fetch(`http://localhost:8080/revenue/totalAll`);
      const data = await response.json();

      const overallNetProfit = data[0].net_profit

      // let overallNetProfit = 0;
      // for (let year of [2003, 2004, 2005]) {
      //   const yearData = data[year];
      //   yearData.forEach(month => {
      //     overallNetProfit += month.netProfit;
      //   });
      // }
      setTotalNetProfit(overallNetProfit);

      if (selectedYear !== 'Tahun') {
        const response_total = await fetch(`http://localhost:8080/revenue/total`);
        const data_total = await response_total.json();

        const yearData_total = data_total.filter(item => item.tahun == selectedYear);
        const overalNetProfit = yearData_total.map(item => item.net_profit);

        const response = await fetch(`http://localhost:8080/revenue`);
        const data = await response.json();
        
        const yearData = data.filter(item => item.tahun == selectedYear);

        if (selectedMonth !== 'Bulan') {
          const monthIndex = monthsMap[selectedMonth];
          const month = yearData.find(item => item.bulan == monthIndex + 1);
          if(typeof month !== "undefined") {
            const nowMonthIndex = month.bulan;
            if (yearData && month) {
              setNetProfit(month.net_profit);
  
              const prevMonth = yearData.find(item => item.bulan == nowMonthIndex - 1);
              if (monthIndex > 0) {
                setPreviousMonthProfit(prevMonth.net_profit);
              } else {
                setPreviousMonthProfit(null);
              }
            } else {
              setNetProfit(0);
            }
          }else {
            setNetProfit(0);
          }
        } else {
          setTotalNetProfit(overalNetProfit);
          setNetProfit(null);
          setPreviousMonthProfit(null);
        }
      }
    };

    fetchNetProfit();
  }, [selectedYear, selectedMonth]);

  //INI BUAT UNIQUE CUSTOMER
  const [customerData, setCustomerData] = useState(null);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [previousMonthCustomers, setPreviousMonthCustomers] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch(`http://localhost:8080/customer/totalAll`);
      const data = await response.json();

      const overallCustomers = data[0].total

      // let overallCustomers = 0;
      // for (let year of [2003, 2004, 2005]) {
      //   const yearData = data[year];
      //   yearData.forEach(month => {
      //     overallCustomers += month.customer;
      //   });
      // }
      setTotalCustomers(overallCustomers);

      if (selectedYear !== 'Tahun') {
        const response_total = await fetch(`http://localhost:8080/customer/total`);
        const data_total = await response_total.json();

        const yearData_total = data_total.filter(item => item.tahun == selectedYear);
        const overalUniqueCustomer = yearData_total.map(item => item.total);

        const response = await fetch(`http://localhost:8080/customer`);
        const data = await response.json();
        
        const yearData = data.filter(item => item.tahun == selectedYear);

        if (selectedMonth !== 'Bulan') {
          const monthIndex = monthsMap[selectedMonth];
          const month = yearData.find(item => item.bulan == monthIndex + 1);
          if(typeof month !== "undefined") {
            const nowMonthIndex = month.bulan;

            if (yearData && month) {
              setCustomerData(month.total);
  
              const prevMonth = yearData.find(item => item.bulan == nowMonthIndex - 1);
              if (prevMonth) {
                setPreviousMonthCustomers(prevMonth.total);
              } else {
                setPreviousMonthCustomers(null);
              }
            } else {
              setCustomerData(0);
            }
          }else {
            setCustomerData(0);
          }
        } else {
          setTotalCustomers(overalUniqueCustomer);
          setCustomerData(null);
          setPreviousMonthCustomers(null);
        }
      }
    };

    fetchCustomers();
  }, [selectedYear, selectedMonth]);

  //HIRAUKAN INI CUMA BUAT CARI PERSEN
  const calculateChangePercentage = (current, previous) => {
    if (previous === null || previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  //INI BUAT TOP PRODUCT
  const [topProducts, setTopProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0); // Ubah ini untuk menyimpan total penjualan

  useEffect(() => {
    const fetchTopProducts = async () => {
      const response = await fetch(`http://localhost:8080/rank`);
      const data = await response.json();

      let products = [];
      let totalPenjualan = 0; // Variabel untuk menghitung total penjualan

      // Ambil produk terlaris dari tahun yang dipilih atau dari semua tahun
      if (selectedYear !== 'Tahun') {
        products = data.filter(item => item.tahun == selectedYear)
          .sort((a, b) => b.total - a.total)
          .slice(0, 4);
        totalPenjualan = products.reduce((acc, curr) => acc + parseInt(curr.total), 0); // Total penjualan tahun tertentu
      } else {
        // Ambil produk terlaris dari semua tahun
        // const allProducts = [];
        // for (const year in data) {
        //   allProducts.push(...data[year]);
        // }
        products = data
          .sort((a, b) => b.penjualan - a.penjualan)
          .slice(0, 4);
        console.log(products)
        totalPenjualan = products.reduce((acc, curr) => acc + parseInt(curr.total), 0); // Total penjualan seluruh tahun
      }

      setTopProducts(products);
      setTotalProducts(totalPenjualan); // Simpan total penjualan ke state
    };

    fetchTopProducts();
  }, [selectedYear]);




  return (
    <section className="h-screen flex">

      {/* NAV SAMPING */}
      <div className="w-2/12 grid-rows-3 h-screen overflow-hidden">
        <div className="px-5 pt-7 flex justify-center items-center">
          <Image src="./assets/icons/iconAcong.svg" width={40} height={40} />
          <p className="font-poppins font-bold pl-2">Acong Toys</p>
        </div>

        <div>
          <a href="#">
            <div className="bg-custom-green flex justify-start items-center mx-5 rounded-xl mt-9 pl-5">
              <Image src="./assets/icons/iconDashboard.svg" width={20} height={20} />
              <p className="text-xs text-white font-poppins font-medium pl-2 py-3">Dashboard</p>
            </div>
          </a>
          <a href="#">
            <div className="flex justify-start items-center mx-5 rounded-xl mt-3 pl-5">
              <Image src="./assets/icons/iconSales.svg" width={20} height={20} />
              <p className="text-xs text-custom-grey font-poppins font-medium pl-2 py-3">Sales Report</p>
            </div>
          </a>
          <a href="#">
            <div className="flex justify-start items-center mx-5 rounded-xl mt-3 pl-5">
              <Image src="./assets/icons/iconProduct.svg" width={20} height={20} />
              <p className="text-xs text-custom-grey font-poppins font-medium pl-2 py-3">Products</p>
            </div>
          </a>
          <a href="#">
            <div className="flex justify-start items-center mx-5 rounded-xl mt-3 pl-5">
              <Image src="./assets/icons/iconSettings.svg" width={20} height={20} />
              <p className="text-xs text-custom-grey font-poppins font-medium pl-2 py-3">Settings</p>
            </div>
          </a>
          <a href="/">
            <div className="flex justify-start items-center mx-5 rounded-xl mt-3 pl-5">
              <Image src="./assets/icons/iconSignOut.svg" width={20} height={20} />
              <p className="text-xs text-custom-grey font-poppins font-medium pl-2 py-3">Sign Out</p>
            </div>
          </a>
        </div>

        <div className="bg-[url('/assets/images/Background.png')] bg-center rounded-xl mx-5 mt-20">
          <div className="grid place-items-center pt-5 pb-9">
            <Image src="/assets/icons/iconAcongPutih.svg" width={30} height={30} />
            <h3 className="font-poppins text-center text-white font-medium pt-2">Acong</h3>
            <h3 className="font-poppins text-center text-white font-medium">Dashboard</h3>
            <p className="font-poppins text-center text-white text-xxs px-5 pt-3">
              Get access to all features on Acong
            </p>
          </div>
        </div>
      </div>

      {/* KANAN */}
      <div className="w-10/12 grid grid-rows-12">
        {/* NAV ATAS */}
        <div className="sticky top-0 bg-white row-span-2">
          <div className="h-full flex justify-between items-center px-5">
            <h1 className="font-poppins font-semibold text-2xl">Dashboard</h1>
            <div className="flex items-center">
              <div className="rounded-lg overflow-hidden relative w-10 h-10">
                <Image src="/assets/images/bintang.JPG" layout="fill" objectFit="cover" />
              </div>
              <div className="grid pl-3 items-center">
                <div className="flex items-center">
                  <p className="font-poppins text-xs font-medium pr-5">Bintang</p>
                  <Image src="/assets/icons/dropdown.svg" width={15} height={15} />
                </div>
                <p className="font-poppins text-xs text-custom-grey">Admin</p>
              </div>
            </div>
          </div>
        </div>


        {/* DASHBOARD */}
        <div className="row-span-11 overflow-y-auto bg-background-grey">

          <div className="grid grid-rows-12 px-3 py-3">
            {/* DASH 1 */}
            <div className="row-span-3">
              <div className="grid grid-cols-12 gap-x-3">
                <div className="grid-rows-2 bg-white rounded-xl col-span-7">
                  <div className="flex justify-between pt-3 mx-3">
                    <div className="">
                      <p className="text-[#05004E] font-semibold font-poppins pb-2">Rekap Penjualan</p>
                      <p className="text-xs text-custom-grey">Sales Summary</p>
                    </div>

                    <div className="dropdown-import flex">
                      <DropdownMenu className="border">
                        <DropdownMenuTrigger asChild>
                          <div
                            className="flex items-center rounded-sm bg-[#F9FAFB] text-[#737791] text-xxs my-2 px-3 mr-2 cursor-pointer"
                          >
                            {selectedMonth}
                            <Image src="/assets/icons/dropdown.svg" width={10} height={10} className="ml-2" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Januari')}>Januari</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Februari')}>Februari</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Maret')}>Maret</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('April')}>April</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Mei')}>Mei</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Juni')}>Juni</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Juli')}>Juli</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Agustus')}>Agustus</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('September')}>September</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Oktober')}>Oktober</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('November')}>November</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleMonthSelect('Desember')}>Desember</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <DropdownMenu className="border">
                        <DropdownMenuTrigger asChild>
                          <div
                            className="flex items-center rounded-sm bg-[#F9FAFB] text-[#737791] text-xxs my-2 px-3 mr-2 cursor-pointer"
                          >
                            {selectedYear}
                            <Image src="/assets/icons/dropdown.svg" width={10} height={10} className="ml-2" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleYearSelect('2003')}>2003</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleYearSelect('2004')}>2004</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleYearSelect('2005')}>2005</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>

                      <div className="import-file flex">
                        <button className="flex border rounded-sm border-[#C3D3E2] items-center my-3 px-2">
                          <Image src="/assets/icons/export.svg" width={15} height={15} />
                          <p class="text-xxs ml-1 text-[#0F3659]">Export</p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-4">
                    <div className="col-span-1">
                      <div className="bg-[#FFE2E5] m-2 rounded-md grid items-center py-4">
                        <div className="grid items-start px-4 py-2">
                          <Image
                            src="/assets/icons/Icon-3.svg" width={30} height={30}
                            className=""
                          />
                          <p className="text-sm font-bold font-poppins mt-3">
                            {selectedMonth !== 'Bulan' ?
                              (pendapatanData ? `$ ${pendapatanData.toLocaleString()}` : '$ 0') :
                              (totalPendapatan ? `$ ${totalPendapatan.toLocaleString()}` : '$ 0')}
                          </p>
                          <p className="font-poppins text-xxs font-medium text-[#425166]">Total Pendapatan</p>
                          <p className="text-[#4079ED] font-poppins text-[8px]">
                            {selectedMonth !== 'Januari' && selectedMonth !== 'Bulan' && previousMonthPendapatan !== null && (
                              <span>
                                {pendapatanData > previousMonthPendapatan ?
                                  `+${calculateChangePercentage(pendapatanData, previousMonthPendapatan)}% dari bulan lalu` :
                                  (pendapatanData < previousMonthPendapatan ?
                                    `${calculateChangePercentage(pendapatanData, previousMonthPendapatan)}% dari bulan lalu` :
                                    '')}
                              </span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="bg-[#FFF4DE] m-2 rounded-md grid items-center py-4">
                        <div className="grid items-start px-4 py-2">
                          <Image
                            src="/assets/icons/Icon-2.svg" width={30} height={30}
                            className=""
                          />
                          <p className="text-sm font-bold font-poppins mt-3">
                            {selectedMonth !== 'Bulan' ?
                              (penjualanData ? `${penjualanData.toLocaleString()}` : '0') :
                              (totalPenjualan ? `${totalPenjualan.toLocaleString()}` : '0')}
                          </p>
                          <p className="font-poppins text-xxs font-medium text-[#425166]">Total Penjualan</p>
                          <p className="text-[#4079ED] font-poppins text-[8px]">
                            {selectedMonth !== 'Januari' && selectedMonth !== 'Bulan' && previousMonthPenjualan !== null && (
                              <p className="text-[#4079ED] font-poppins text-[8px]">
                                {penjualanData > previousMonthPenjualan ?
                                  `+${calculateChangePercentage(penjualanData, previousMonthPenjualan)}% dari bulan lalu` :
                                  (penjualanData < previousMonthPenjualan ?
                                    `${calculateChangePercentage(penjualanData, previousMonthPenjualan)}% dari bulan lalu` :
                                    '')}
                              </p>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="bg-[#DCFCE7] m-2 rounded-md grid items-center py-4">
                        <div className="grid items-start px-4 py-2">
                          <Image
                            src="/assets/icons/Icon-1.svg" width={30} height={30}
                            className=""
                          />
                          <p className="text-sm font-bold font-poppins mt-3">
                            {selectedMonth !== 'Bulan' ?
                              (netProfit ? `$ ${netProfit.toLocaleString()}` : '$ 0') :
                              (totalNetProfit ? `$ ${totalNetProfit.toLocaleString()}` : '$ 0')}
                          </p>
                          <p className="font-poppins text-xxs font-medium text-[#425166]">Untung Bersih</p>
                          <p className="text-[#4079ED] font-poppins text-[8px]"></p>
                          {selectedMonth !== 'Januari' && selectedMonth !== 'Bulan' && previousMonthProfit !== null && (
                            <p className="text-[#4079ED] font-poppins text-[8px]">
                              {netProfit > previousMonthProfit ?
                                `+${calculateChangePercentage(netProfit, previousMonthProfit)}% dari bulan lalu` :
                                (netProfit < previousMonthProfit ?
                                  `${calculateChangePercentage(netProfit, previousMonthProfit)}% dari bulan lalu` :
                                  '')}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="bg-[#F3E8FF] m-2 rounded-md grid items-center py-4">
                        <div className="grid items-start px-4 py-2">
                          <Image
                            src="/assets/icons/Icon.svg" width={30} height={30}
                            className=""
                          />
                          <p className="text-sm font-bold font-poppins mt-3">
                            {selectedMonth !== 'Bulan' ?
                              (customerData ? `${customerData.toLocaleString()}` : '0 customers') :
                              (totalCustomers ? `${totalCustomers.toLocaleString()}` : '0 customers')}
                          </p>
                          <p className="font-poppins text-xxs font-medium text-[#425166]">Unique Customer</p>
                          <p className="text-[#4079ED] font-poppins text-[8px]">
                            {selectedMonth !== 'Januari' && selectedMonth !== 'Bulan' && previousMonthCustomers !== null && (
                              <p className="text-[#4079ED] font-poppins text-[8px]">
                                {customerData > previousMonthCustomers ?
                                  `+${calculateChangePercentage(customerData, previousMonthCustomers)}% dari bulan lalu` :
                                  (customerData < previousMonthCustomers ?
                                    `${calculateChangePercentage(customerData, previousMonthCustomers)}% dari bulan lalu` :
                                    '')}
                              </p>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grafik-kanan col-span-5 bg-white px-3 py-3 rounded-xl">
                  <p className="font-poppins text-[#05004E] font-semibold">Net Profit (Keuntungan Bersih)</p>
                  <LineChart selectedYear={selectedYear} />
                  <div className="flex justify-center items-center">
                    <Image src="/assets/icons/green.svg" width={10} height={10} />
                    <p className="text-xxs font-poppins ml-2">Tren Keuangan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DASH 2 */}
            <div className="row-span-3 -mt-9">
              <div className="grid grid-cols-12 gap-x-3">
                <div className="col-span-4 bg-white rounded-lg p-3">
                  <p className="font-poppins text-[#05004E] font-semibold">Total Pendapatan</p>
                  <BarChartDapat selectedYear={selectedYear} />
                </div>
                <div className="col-span-4 bg-white rounded-lg p-3">
                  <p className="font-poppins text-[#05004E] font-semibold">Total Penjualan</p>
                  <BarChartJual selectedYear={selectedYear} />
                </div>
                <div className="col-span-4 bg-white rounded-lg p-3 grid justify-center">
                  <p className="font-poppins text-[#05004E] font-semibold">Target Pendapatan vs Realisasi</p>
                  <PendapatanVS selectedYear={selectedYear} />
                  <div className="">
                    <div className="flex">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Actual Income</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-40 flex items-center justify-center text-center font-poppins text-[#27AE60] text-sm">
                          {totalPendapatan.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar-1.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Target Income</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-40 flex items-center justify-center text-center font-poppins text-[#FFA412] text-sm">4,800,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DASH 3 */}
            <div className="row-span-3 mb-3 -mt-5">
              <div className="grid grid-cols-12 gap-x-3">
                <div className="col-span-4 bg-white rounded-lg p-3 grid justify-center">
                  <p className="font-poppins text-[#05004E] font-semibold">Target Penjualan vs Realisasi</p>
                  <PenjualanVS selectedYear={selectedYear} />
                  <div className="">
                    <div className="flex">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Reality Sales</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-44 flex items-center justify-center text-center font-poppins text-[#27AE60] text-sm">
                          {totalPenjualan.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar-1.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Target Sales</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-44 flex items-center justify-center text-center font-poppins text-[#FFA412] text-sm">55,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-white rounded-lg p-3 grid justify-center">
                  <p className="font-poppins text-[#05004E] font-semibold">Unique Customer vs Realisasi</p>
                  <UniqueCustVS selectedYear={selectedYear} />
                  <div className="">
                    <div className="flex">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Customer Count</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-36 flex items-center justify-center text-center font-poppins text-[#27AE60] text-sm">
                          {totalCustomers.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar-1.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Target Customer</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-36 flex items-center justify-center text-center font-poppins text-[#FFA412] text-sm">
                          45
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 bg-white rounded-lg p-3 grid justify-center">
                  <p className="font-poppins text-[#05004E] font-semibold">Target Net Profit vs Realisasi</p>
                  <NetProfitVS selectedYear={selectedYear} />
                  <div className="">
                    <div className="flex">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Actual Profit</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-44 flex items-center justify-center text-center font-poppins text-[#27AE60] text-sm">
                          {totalNetProfit.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex w-full">
                        <div>
                          <Image src="/assets/icons/Avatar-1.svg" width={30} height={30} />
                        </div>
                        <div className="grid items-center ml-2">
                          <p className="font-poppins font-semibold text-xs">Target Profit</p>
                          <p className="font-poppins text-xxs">Global</p>
                        </div>
                        <p
                          className="w-44 flex items-center justify-center text-center font-poppins text-[#FFA412] text-sm">1,900,000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DASH 4 */}
            <div className="row-span-3">
              <div className="grid grid-cols-12 gap-x-3">
                <div className="col-span-5 bg-white rounded-lg p-3">
                  <p className="text-[#05004E] font-poppins font-semibold">Top Products</p>
                  <div className="grid grid-rows-5 mt-2 font-poppins">
                    <div className="grid grid-cols-12 text-[#96A5B8] border-b pt-4">
                      <div className="col-span-1 text-xxs">#</div>
                      <div className="col-span-10 text-xxs">Name</div>
                      <div className="flex justify-end col-span-1 text-xxs">Sales</div>
                    </div>

                    {topProducts.map((product, index) => {
                      // Hitung persentase penjualan
                      const percentage = totalProducts > 0
                        ? Math.floor((product.total / totalProducts) * 100)
                        : 0;

                      return (
                        <div key={index} className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3">
                          <div className="col-span-1 text-xs">{String(index + 1).padStart(2, '0')}</div>
                          <div className="col-span-10 text-xs">{product.productName}</div>
                          <div
                            className="flex justify-center items-center col-span-1 text-xxs border 
          border-[#0095FF] bg-[#F0F9FF] rounded-sm text-[#0095FF]">
                            {percentage}%
                          </div>
                        </div>
                      );
                    })}
                  </div>



                </div>

                <div className="col-span-7 heatmap bg-white p-3 h-full w-full rounded-lg">
                  <p className="font-poppins font-semibold text-[#05004E]">Penjualan Berdasarkan wilayah</p>
                  <div className="relative w-full h-60">
                    <WorldMap />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Dashboard;
