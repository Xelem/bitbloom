import React, { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import { FaBell, FaMoon } from 'react-icons/fa'
import { HiBars3 } from 'react-icons/hi2'
import { MdSunny } from 'react-icons/md'
import Logo from '../assets/coingrove.png'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import LeftSidebar from './leftSidebar'

const Header: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    const [currentTheme, setCurrentTheme] = useState(
        localStorage.getItem('theme'),
    )

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
            ) {
                setCurrentTheme('dark')
            } else {
                setCurrentTheme('light')
            }
        }
        // 👆 false parameter is required for react project
    }, [])

    function logoutUser() {
        localStorage.clear()
        window.location.href = '/'
    }

    return (
        // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md

        <>
            <div className="navbar fixed top-0 bg-base-100  z-10 shadow-md ">
                {/* Menu toogle for mobile view or small screen */}
                <div className="flex-1">
                    <LeftSidebar
                        isOpen={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />
                    <div className="flex-1">
                        <label
                            onClick={toggleSidebar}
                            className="btn bg-mainPurple dark:bg-deepPurple drawer-button lg:hidden"
                        >
                            <HiBars3 className="h-5 inline-block w-5 text-white" />
                        </label>
                        <div className="hidden md:flex space-x-2 items-center">
                            <img src={Logo} alt="logo" className="h-8 w-8" />
                            <h1 className="text-2xl text-gray-700 font-semibold ml-2 dark:text-gray-200">
                                CoinGrove
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex-none">
                    {/* Light and dark theme selection toogle **/}
                    <label className="swap ">
                        <input type="checkbox" />
                        <FaMoon
                            data-set-theme="light"
                            data-act-class="ACTIVECLASS"
                            className={
                                'fill-current text-gray-700 w-6 h-6 ' +
                                (currentTheme === 'dark'
                                    ? 'swap-on'
                                    : 'swap-off')
                            }
                        />
                        <MdSunny
                            data-set-theme="dark"
                            data-act-class="ACTIVECLASS"
                            className={
                                'dark:text-gray-200 w-6 h-6 ' +
                                (currentTheme === 'light'
                                    ? 'swap-on'
                                    : 'swap-off')
                            }
                        />
                    </label>

                    {/* Notification icon */}
                    <button className="btn btn-ghost ml-4  btn-circle">
                        <FaBell className="text-gray-700 dark:text-gray-200 h-6 w-6" />
                    </button>

                    {/* Profile icon, opening menu on click */}
                    <div className="dropdown dropdown-end text-gray-700 dark:text-gray-200">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <FaUserCircle className="w-6 h-6" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li className="justify-between">
                                <Link to={'/user/profile'}>
                                    Profile Settings
                                </Link>
                            </li>
                            <div className="divider mt-0 mb-0"></div>
                            <li>
                                <a onClick={logoutUser}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
