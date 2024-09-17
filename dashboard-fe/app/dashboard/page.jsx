import Image from 'next/image';
import LineChart from '@components/LineChart';
import BarChartJual from '@components/BarChartJual';
import BarChartDapat from '@components/BarChartDapat';
import BarChartReal from '@components/BarChartReal';
import WorldMap from '@components/WorldMap';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  return (
    <section classNameName="w-full h-screen flex-col">
      <div className="grid grid-cols-12 h-full">
        {/* NAV SAMPING */}
        <div className="col-span-2 grid-rows-3">
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
            <a href="#">
              <div className="flex justify-start items-center mx-5 rounded-xl mt-3 pl-5">
                <Image src="./assets/icons/iconSignOut.svg" width={20} height={20} />
                <p className="text-xs text-custom-grey font-poppins font-medium pl-2 py-3">Sign Out</p>
              </div>
            </a>
          </div>

          <div className="bg-[url('/assets/images/Background.png')] bg-center rounded-xl mx-5 mt-80">
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
        <div className="col-span-10 grid grid-rows-12">
          {/* NAV ATAS */}
          <div className="row-span-1">
            <div className="h-full flex justify-between items-center px-5"> {/* Ubah items-end menjadi items-center */}
              <h1 className="font-poppins font-semibold text-2xl">Dashboard</h1>
              <div className="flex items-center"> {/* Ubah items-end menjadi items-center */}
                <div className="rounded-lg overflow-hidden relative w-10 h-10">
                  <Image src="/assets/images/bintang.JPG" layout="fill" objectFit="cover" />
                </div>
                <div className="grid pl-3 items-center"> {/* Ubah items-end menjadi items-center */}
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
          <div className="row-span-11 bg-background-grey">

            <div className="grid grid-rows-12 px-3 py-3">
              {/* DASH 1 */}
              <div className="row-span-4">
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
                              Bulan
                              <Image src="/assets/icons/dropdown.svg" width={10} height={10} className="ml-2" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>Januari</DropdownMenuItem>
                            <DropdownMenuItem>Februari</DropdownMenuItem>
                            <DropdownMenuItem>Maret</DropdownMenuItem>
                            <DropdownMenuItem>April</DropdownMenuItem>
                            <DropdownMenuItem>Mei</DropdownMenuItem>
                            <DropdownMenuItem>Juni</DropdownMenuItem>
                            <DropdownMenuItem>Juli</DropdownMenuItem>
                            <DropdownMenuItem>Agustus</DropdownMenuItem>
                            <DropdownMenuItem>September</DropdownMenuItem>
                            <DropdownMenuItem>Oktober</DropdownMenuItem>
                            <DropdownMenuItem>November</DropdownMenuItem>
                            <DropdownMenuItem>Desember</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenu className="border">
                          <DropdownMenuTrigger asChild>
                            <div
                              className="flex items-center rounded-sm bg-[#F9FAFB] text-[#737791] text-xxs my-2 px-3 mr-2 cursor-pointer"
                            >
                              Tahun
                              <Image src="/assets/icons/dropdown.svg" width={10} height={10} className="ml-2" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem>2003</DropdownMenuItem>
                            <DropdownMenuItem>2004</DropdownMenuItem>
                            <DropdownMenuItem>2005</DropdownMenuItem>
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
                            <p className="text-sm font-bold font-poppins mt-3">Rp 5 Miliar</p>
                            <p className="font-poppins text-xxs font-medium text-[#425166]">Total Pendapatan</p>
                            <p className="text-[#4079ED] font-poppins text-[8px]">
                              + 8% dari bulan lalu
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
                            <p className="text-sm font-bold font-poppins mt-3">300 kali</p>
                            <p className="font-poppins text-xxs font-medium text-[#425166]">Total Pesanan</p>
                            <p className="text-[#4079ED] font-poppins text-[8px]">
                              + 5% dari bulan lalu
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
                            <p className="text-sm font-bold font-poppins mt-3">5 unit</p>
                            <p className="font-poppins text-xxs font-medium text-[#425166]">Produk Terjual</p>
                            <p className="text-[#4079ED] font-poppins text-[8px]">
                              + 1,2% dari bulan lalu
                            </p>
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
                            <p className="text-sm font-bold font-poppins mt-3">8</p>
                            <p className="font-poppins text-xxs font-medium text-[#425166]">Pelanggan Baru</p>
                            <p className="text-[#4079ED] font-poppins text-[8px]">
                              + 0,5% dari bulan lalu
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grafik-kanan col-span-5 bg-white px-3 py-3 rounded-xl">
                    <p className="font-poppins text-[#05004E] font-semibold">Net Profit (Keuntungan Bersih)</p>
                    <LineChart />
                    <div className="flex justify-center items-center">
                      <Image src="/assets/icons/green.svg" width={10} height={10} />
                      <p className="text-xxs font-poppins ml-2">Tren Keuangan</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* DASH 2 */}
              <div className="row-span-4 -mt-7">
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-4 bg-white rounded-lg p-3">
                    <p className="font-poppins text-[#05004E] font-semibold">Total Pendapatan</p>
                    <BarChartDapat />
                  </div>
                  <div className="col-span-4 bg-white rounded-lg p-3">
                    <p className="font-poppins text-[#05004E] font-semibold">Total Penjualan</p>
                    <BarChartJual />
                  </div>
                  <div className="col-span-4 bg-white rounded-lg p-3 grid justify-center">
                    <p className="font-poppins text-[#05004E] font-semibold">Target Pendapatan vs Realisasi</p>
                    <BarChartReal />
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
                            className="w-44 flex items-center justify-center text-center font-poppins text-[#27AE60] text-sm">8.823
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
                            className="w-44 flex items-center justify-center text-center font-poppins text-[#FFA412] text-sm">12.122
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DASH 3 */}
              <div className="row-span-4">
                <div className="grid grid-cols-12 gap-x-3">
                  <div className="col-span-5 bg-white rounded-lg p-3">
                    <p className="text-[#05004E] font-poppins font-semibold">Top Products</p>
                    <div className="grid grid-rows-5 mt-2 font-poppins">
                      <div className="grid grid-cols-12 text-[#96A5B8] border-b pt-4">
                        <div className="col-span-1 text-xxs">#</div>
                        <div className="col-span-10 text-xxs">Name</div>
                        <div className="flex justify-end col-span-1 text-xxs">Sales</div>
                      </div>
                      <div className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3">
                        <div className="col-span-1 text-xs">01</div>
                        <div className="col-span-10 text-xs">Home Decor Range</div>
                        <div
                          className="flex justify-center items-center col-span-1 text-xxs border 
                        border-[#0095FF] bg-[#F0F9FF] rounded-sm text-[#0095FF]">
                          45%
                        </div>
                      </div>
                      <div className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3">
                        <div className="col-span-1 text-xs">02</div>
                        <div className="col-span-10 text-xs">Disney Princess Pink Bag 18'</div>
                        <div
                          className="flex justify-center items-center col-span-1 text-xxs border 
                        border-[#00E58F] bg-[#F0FDF4] rounded-sm text-[#00E58F]">
                          29%
                        </div>
                      </div>
                      <div className="grid grid-cols-12 text-[#444A6D] border-b pb-3 mt-3">
                        <div className="col-span-1 text-xs">03</div>
                        <div className="col-span-10 text-xs">Bathroom Essentials</div>
                        <div
                          className="flex justify-center items-center col-span-1 text-xxs border 
                        border-[#884DFF] bg-[#FBF1FF] rounded-sm text-[#884DFF]">
                          18%
                        </div>
                      </div>
                      <div className="grid grid-cols-12 text-[#444A6D] pb-3 mt-3">
                        <div className="col-span-1 text-xs">04</div>
                        <div className="col-span-10 text-xs">Apple Smartwatches</div>
                        <div
                          className="flex justify-center items-center col-span-1 text-xxs border 
                        border-[#FF8900] bg-[#FEF6E6] rounded-sm text-[#FF8900]">
                          25%
                        </div>
                      </div>
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
      </div>
    </section>
  );
};

export default Dashboard;
