import React, { useState } from 'react'
import { LuDot } from 'react-icons/lu'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import axios from 'axios'
import { baseURL } from '../../../constants'
import { ClipLoader } from 'react-spinners'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../../context/UserContext'

const Signup = () => {
    type Focused = {
        fullName: boolean
        email: boolean
        password: boolean
    }

    const [isFocused, setIsFocused] = useState<Focused>({
        fullName: false,
        email: false,
        password: false,
    })

    const [fullName, setFullName] = useState<string>('')
    const [emailAddress, setEmailAddress] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const { setUser } = useUser()
    const navigate = useNavigate()

    const createNewUser = async (
        fullName: string,
        emailAddress: string,
        password: string,
    ) => {
        setLoading(true)
        try {
            const { data } = await axios({
                method: 'POST',
                url: `${baseURL}/auth/signup`,
                data: {
                    fullName,
                    emailAddress,
                    password,
                },
                withCredentials: true,
            })

            setUser(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('auth', JSON.stringify(data.token))
            navigate('/user/dashboard')
            return data
        } catch (error) {
            console.error(error)
        }
        setLoading(false)
    }
    return (
        <div>
            <Navbar />
            <div className="md:px-12 px-8 mx-auto bg-gradient-to-r from-mainPurple to-lightBlue py-12">
                <div>
                    <div className="flex items-center justify-center">
                        <LuDot className="text-lightBlue inline w-12 h-12 mx-[-17px]" />
                        <LuDot className="text-mainPurple inline w-12 h-12 mx-[-17px]" />
                        <LuDot className="text-red-600 inline w-12 h-12 mx-[-17px]" />
                        <LuDot className="text-[#a166e3] inline w-12 h-12 mx-[-17px]" />
                        <LuDot className="text-yellow-600 inline w-12 h-12 mx-[-17px]" />
                        <LuDot className="text-blue-600 inline w-12 h-12 mx-[-17px]" />
                    </div>

                    <div className="text-center max-w-lg mx-auto">
                        <h1 className="text-3xl leading-tight font-semibold my-4 md:text-4xl">
                            Signup
                        </h1>
                    </div>

                    <form
                        className="flex flex-col items-center justify-center my-12"
                        onSubmit={e => {
                            e.preventDefault()
                            createNewUser(fullName, emailAddress, password)
                        }}
                    >
                        <div className="w-[100%] md:w-[50%]">
                            <div className="relative flex flex-col pt-12 mb-2">
                                <input
                                    type="text"
                                    className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                                    onFocus={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            fullName: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            fullName: false,
                                        })
                                    }
                                    onChange={e => setFullName(e.target.value)}
                                />
                                <label
                                    className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                                        !isFocused.fullName
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }  ${
                                        fullName == ''
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }`}
                                >
                                    Full Name
                                </label>
                            </div>
                            <div className="relative flex flex-col pt-12 mb-2">
                                <input
                                    type="email"
                                    className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                                    onFocus={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            email: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            email: false,
                                        })
                                    }
                                    onChange={e =>
                                        setEmailAddress(e.target.value)
                                    }
                                />
                                <label
                                    className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                                        !isFocused.email
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }  ${
                                        emailAddress == ''
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative flex flex-col pt-12 mb-2">
                                <input
                                    type="password"
                                    className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                                    onFocus={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            password: true,
                                        })
                                    }
                                    onBlur={() =>
                                        setIsFocused({
                                            ...isFocused,
                                            password: false,
                                        })
                                    }
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label
                                    className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                                        !isFocused.password
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }  ${
                                        password == ''
                                            ? '-translate-y-2'
                                            : '-translate-y-6'
                                    }`}
                                >
                                    Password
                                </label>
                            </div>

                            <div className="flex items-center justify-center pt-8">
                                <button className="button-gradient">
                                    {!loading ? (
                                        'Signup'
                                    ) : (
                                        <ClipLoader size={20} color="white" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div>
                        <p className="text-center">
                            Already have an account?
                            <a
                                href="/auth/login"
                                className="underline underline-offset-2"
                            >
                                {' '}
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup
