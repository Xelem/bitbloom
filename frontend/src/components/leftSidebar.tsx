import React, { useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineDashboard } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { FaRegMoneyBillAlt, FaRegUserCircle } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { LuPackageOpen } from "react-icons/lu";
import SidebarSubmenu from "./sidebarSubmenu";

const LeftSidebar = () => {
  const location = useLocation();
  const leftSidebarDrawerRef = useRef<HTMLDivElement>(null);

  interface Route {
    path: string;
    icon: React.JSX.Element;
    name: string;
    submenu?: Route[];
  }

  const routes: Route[] = [
    {
      path: "/user/dashboard",
      icon: <MdOutlineDashboard />,
      name: "Dashboard",
    },
    {
      path: "/user/wallet",
      icon: <IoWalletOutline />,
      name: "Wallet",
    },
    {
      path: "/user/transaction",
      icon: <FaRegMoneyBillAlt />,
      name: "Transactions",
    },
    {
      path: "/user/investment",
      icon: <RiExchangeDollarLine />,
      name: "Investment",
      submenu: [
        {
          path: "/user/plans",
          icon: <LuPackageOpen />,
          name: "Plans",
        },
        {
          path: "/user/investment",
          icon: <LuPackageOpen />,
          name: "Investments",
        },
      ],
    },
    {
      path: "/user/profile",
      icon: <FaRegUserCircle />,
      name: "Profile",
    },
  ];

  const close = () => {
    const leftSidebarDrawer = leftSidebarDrawerRef.current;
    if (leftSidebarDrawer) {
      leftSidebarDrawer.click();
    }
  };

  return (
    <div className="drawer-side  z-30  ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu  pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <AiOutlineClose className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl">
          <Link to={"/app/welcome"}>
            <img
              className="mask mask-squircle w-10"
              src="/logo192.png"
              alt="DashWind Logo"
            />
            DashWind
          </Link>{" "}
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "font-semibold  bg-base-200 " : "font-normal"
                    }`
                  }
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
