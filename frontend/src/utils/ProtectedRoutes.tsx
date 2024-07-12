import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useUser } from '../context/UserContext'
import { baseURL } from '../constants'

const ProtectedRoutes: React.FC = () => {
    const { user, setUser } = useUser()

    const navigate = useNavigate()

    useEffect(() => {
        const jwtToken = Cookies.get('jwt')
        console.log('JWT Token:', jwtToken) // Debugging line

        if (jwtToken || user) {
            const fetchUserData = async () => {
                try {
                    const { data } = await axios.get(`${baseURL}/users/me`, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                        withCredentials: true,
                    })

                    setUser(data.user)
                } catch (error) {
                    console.error(error)
                    navigate('/auth/login')
                }
            }
            fetchUserData()
        } else if (!jwtToken) {
            navigate('/auth/login')
        }
    }, [user, setUser, navigate])

    if (!user) {
        return null // Render nothing or a loading spinner
    }

    return <Outlet />
}

export default ProtectedRoutes
