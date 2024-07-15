import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt, FaRegUserCircle } from "react-icons/fa";
import { LuPackageOpen } from "react-icons/lu";

interface Route {
  path: string;
  icon: React.JSX.Element;
  name: string;
  submenu?: Route[];
}

export const routes: Route[] = [
  {
    path: "/user/dashboard",
    icon: <MdOutlineDashboard className="w-6 h-6" />,
    name: "Dashboard",
  },
  {
    path: "/user/wallet",
    icon: <IoWalletOutline className="w-6 h-6" />,
    name: "Wallet",
  },
  {
    path: "/user/transactions",
    icon: <FaRegMoneyBillAlt className="w-6 h-6" />,
    name: "Transactions",
  },
  // {
  //   path: "/user/investment",
  //   icon: <RiExchangeDollarLine className="w-6 h-6" />,
  //   name: "Invest",
  //   submenu: [
  //     {
  //       path: "/user/plans",
  //       icon: <LuPackageOpen className="w-6 h-6" />,
  //       name: "Plans",
  //     },
  //   ],
  // },
  {
    path: "/user/plans",
    icon: <LuPackageOpen className="w-6 h-6" />,
    name: "Plans",
  },
  {
    path: "/user/profile",
    icon: <FaRegUserCircle className="w-6 h-6" />,
    name: "Profile",
  },
];
