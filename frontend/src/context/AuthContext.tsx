import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'
import { Auth, AuthContextType } from '../@types/auth'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [auth, setAuth] = useState<Auth | null>(null)

    useEffect(() => {
        const jwtToken = localStorage.getItem('auth')
        console.log('JWT Token:', jwtToken) // Debugging line
        if (jwtToken) {
            setAuth({ token: jwtToken })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context
}

export { AuthProvider, useAuth }
