import React from "react";
import DashboardStats from "../../../components/dashboardStats";

import { FaUser } from "react-icons/fa";
import BarChart from "../../../components/barChart";
import LineChart from "../../../components/lineChart";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/leftSidebar";

const Dashboard = () => {
  interface statData {
    title: string;
    value: string;
    icon: React.JSX.Element;
    description: string;
  }

  const statsData: statData[] = [
    {
      title: "New Users",
      value: "34.7k",
      icon: <FaUser className="w-8 h-8" />,
      description: "↗︎ 2300 (22%)",
    },
    {
      title: "Total Sales",
      value: "$34,545",
      icon: <FaUser className="w-8 h-8" />,
      description: "Current month",
    },
    {
      title: "Pending Leads",
      value: "450",
      icon: <FaUser className="w-8 h-8" />,
      description: "50 in hot leads",
    },
    {
      title: "Active Users",
      value: "5.6k",
      icon: <FaUser className="w-8 h-8" />,
      description: "↙ 300 (18%)",
    },
  ];

  return (
    <div className="relative">
      <div>
        <Header />
      </div>
      <div className="grid mt-16 md:mt-14 grid-cols-4 bg-gray-200 dark:bg-gray-900">
        <div className="hidden md:block md:col-span-1 min-w-full">
          <LeftSidebar />
        </div>
        <div className="col-span-4 md:col-span-3 p-4 md:p-8">
          <p className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Dashboard
          </p>
          <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
            {statsData.map((d, k) => {
              return <DashboardStats key={k} {...d} colorIndex={k} />;
            })}
          </div>

          <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
            <LineChart />
            <BarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
