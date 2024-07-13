import React, { useEffect } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts'
import Login from './pages/auth/login/login'
import Signup from './pages/auth/signup/signup'
import Home from './pages/landingPages'
import Dashboard from './pages/user/dashboard'
import Plans from './pages/user/plans'
import Profile from './pages/user/profile'
import Transactions from './pages/user/transactions'
import Wallet from './pages/user/wallet'
import AOS from 'aos'
import Investments from './pages/user/investments'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: 'ease',
            once: true,
        })
    }, [])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>
                <Route index path="/" element={<Home />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/auth/login" element={<Login />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/user/dashboard" element={<Dashboard />} />
                    <Route path="/user/plans" element={<Plans />} />
                    <Route path="/user/profile" element={<Profile />} />
                    <Route path="/user/wallet" element={<Wallet />} />
                    <Route
                        path="/user/transactions"
                        element={<Transactions />}
                    />
                    <Route path="/user/investments" element={<Investments />} />
                </Route>
            </Route>,
        ),
    )

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
