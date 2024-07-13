import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useUser } from '../context/UserContext'

const ProtectedRoutes: React.FC = () => {
    const { user } = useUser()
    const navigate = useNavigate()

    if (!user) {
        navigate('/auth/login')
    }

    return <Outlet />
}

export default ProtectedRoutes
