import React, { useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { routes } from "../utils/routes";
import SidebarSubmenu from "./sidebarSubmenu";

const LeftSidebar = () => {
  const location = useLocation();
  const leftSidebarDrawerRef = useRef<HTMLDivElement>(null);

  const close = () => {
    const leftSidebarDrawer = leftSidebarDrawerRef.current;
    if (leftSidebarDrawer) {
      leftSidebarDrawer.click();
    }
  };

  return (
    <div className={`z-30 h-[100%] fixed`}>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={() => close()}
        >
          <AiOutlineClose className="h-5 inline-block w-5" />
        </button>

        <li className="mb-2 font-semibold text-xl md:hidden">
          <Link to={"/app/welcome"}>
            <p>Logo</p>
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
                      isActive
                        ? "font-semibold  bg-base-200 text-lg"
                        : "font-normal"
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
