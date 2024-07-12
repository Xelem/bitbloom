import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUser } from '../context/UserContext'
import { baseURL } from '../constants'

const ProtectedRoutes: React.FC = () => {
    const { user, setUser } = useUser()

    const navigate = useNavigate()

    useEffect(() => {
        const jwtToken = localStorage.getItem('auth')
        console.log('JWT Token:', jwtToken) // Debugging line

        if (jwtToken || user) {
            const fetchUserData = async () => {
                try {
                    const { data } = await axios.get(`${baseURL}/users/me`, {
                        headers: {
                            Cookie: `jwt=${jwtToken?.split('/')[1]}`,
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
