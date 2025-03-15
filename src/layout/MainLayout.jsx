import { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import MainHeader from "../components/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col z-50">
      <MainHeader toggleSidebar={toggleSidebar} />
      <div className="flex w-full">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="p-5 bg-white h-[100vh] w-full md:w-[85%] lg:w-[85%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
