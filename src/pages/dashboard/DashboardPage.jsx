import { FaChevronDown, FaUsers, FaVideo } from "react-icons/fa";
import RecentUsers from "../../components/Dashboard/RecentUsers";
import { useState } from "react";
import dayjs from "dayjs";
import TotalUser from "../../components/Dashboard/TotalUser";
import TotalView from "../../components/Dashboard/TotalView";
import TotalUsers from "../../components/Dashboard/TotalUsers";

function DashboardPage() {
  const currentYear = dayjs().year();
  const startYear = 1900;
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isOpen, setIsOpen] = useState(false);

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const handleSelect = (year) => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 mmd:grid-cols-2 lg:grid-cols-2 gap-5">
        {/* Total User */}
        <div className="flex justify-between items-center p-5 bg-[#F2F2F2]  gap-5 h-[80px] rounded-lg shadow-md">
          <div className="flex gap-3 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaUsers
                size={20}
                className=" bg-white rounded-full p-2 w-10 h-10 text-[#FF0000]"
              />
            </p>
            <p className="text-xl font-semibold">Total User</p>
          </div>
          <p className="text-[#FF0000] text-2xl font-bold mr-10">1200</p>
        </div>
        {/*  Total video */}
        <div className="flex justify-between items-center p-5 bg-[#F2F2F2] rounded-lg shadow-md gap-5 h-[80px]">
          <div className="flex gap-3 items-center">
            <p className="rounded-full flex justify-center items-center">
              <FaVideo
                size={20}
                className=" bg-white rounded-full p-2 w-10 h-10 text-[#FF0000]"
              />
            </p>
            <p className="text-xl font-semibold">Total video</p>
          </div>
          <p className="text-[#FF0000] text-2xl font-bold mr-10">100</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="w-full p-5 bg-[#F2F2F2] rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-xl font-semibold">Total User Overview</h1>
            </div>
            <div className="flex justify-between items-center gap-5 whitespace-nowrap">
              <div className="flex justify-start items-center text-xs md:text-lg gap-5">
                <p>Monthly Growth</p>
                <p className="font-bold">35.80%</p>
              </div>
              <div className="relative w-full md:w-32">
                {/* Selected Year Display */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition"
                >
                  <span className="text-[#00c0b5]">{selectedYear}</span>
                  <FaChevronDown className="text-[#00c0b5] w-5 h-5 ml-5" />
                </button>

                {/* Dropdown List */}
                {isOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                    {years.map((year) => (
                      <div
                        key={year}
                        onClick={() => handleSelect(year)}
                        className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                          year === selectedYear ? "bg-gray-200" : ""
                        }`}
                      >
                        {year}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <TotalUser />
        </div>
        <div className="w-full p-5 bg-[#F2F2F2] rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row md:justify-between lg:justify-between items-center gap-5 my-5">
            <div>
              <h1 className="text-xl font-semibold">Total Video Overview</h1>
            </div>
            <div className="flex justify-between items-center gap-5 whitespace-nowrap">
              <div className="flex justify-start items-center text-xs md:text-lg gap-5">
                <p>Monthly Growth</p>
                <p className="font-bold">35.80%</p>
              </div>
              <div className="relative w-full md:w-32">
                {/* Selected Year Display */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md flex justify-between items-center bg-white transition"
                >
                  <span className="text-[#00c0b5]">{selectedYear}</span>
                  <FaChevronDown className="text-[#00c0b5] w-5 h-5 ml-5" />
                </button>

                {/* Dropdown List */}
                {isOpen && (
                  <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg text-lg">
                    {years.map((year) => (
                      <div
                        key={year}
                        onClick={() => handleSelect(year)}
                        className={`p-2 cursor-pointer hover:bg-gray-100 transition ${
                          year === selectedYear ? "bg-gray-200" : ""
                        }`}
                      >
                        {year}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <TotalView />
        </div>
       <div className="mt-5">
       <TotalUsers />
       </div>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-5">Recent Joined User</h1>
        <RecentUsers />
      </div>
    </div>
  );
}

export default DashboardPage;
