import React, { useEffect } from 'react'
import Header from '../../../components/Header'
import InputText from '../../../components/inputText'
import LeftSidebar from '../../../components/leftSidebar'
import TitleCard from '../../../components/titleCard'
import ToogleInput from '../../../components/toogleInput'
import { useUser } from '../../../context/UserContext'
import { Navigate } from 'react-router-dom'

function ProfileSettings() {
    const { user, setUser } = useUser()
    useEffect(() => {
        if (!user) {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        }
        console.log(user)
    }, [user, setUser])

    return user ? (
        <div className="relative">
            <div>
                <Header />
            </div>
            <div className="grid mt-16 md:mt-14 grid-cols-4 bg-gray-200 dark:bg-gray-900">
                <div className="hidden md:block md:col-span-1 min-w-full">
                    <LeftSidebar />
                </div>
                <div className="col-span-4 md:col-span-3 p-4 md:p-8">
                    <p className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Profile
                    </p>
                    <TitleCard title="Profile Settings" topMargin="mt-2">
                        <div className=" text-gray-700 dark:text-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText
                                    labelTitle="Full Name"
                                    defaultValue={user?.fullName ?? ''}
                                />
                                <InputText
                                    labelTitle="Email Address"
                                    defaultValue={user?.emailAddress ?? ''}
                                    disabled
                                />
                                <InputText
                                    labelTitle="Country"
                                    defaultValue={user?.country ?? ''}
                                />
                                <InputText
                                    labelTitle="Date of Birth"
                                    defaultValue={user?.dateOfBirth ?? ''}
                                />
                            </div>
                            <div className="divider"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputText
                                    labelTitle="Language"
                                    defaultValue="English"
                                />
                                <InputText
                                    labelTitle="Timezone"
                                    defaultValue="IST"
                                />
                                <ToogleInput
                                    labelTitle="Sync Data"
                                    defaultValue={true}
                                />
                            </div>

                            <div className="mt-16">
                                <button className="btn btn-primary float-right">
                                    Update
                                </button>
                            </div>
                        </div>
                    </TitleCard>
                </div>
            </div>
        </div>
    ) : (
        <Navigate to={'/auth/login'} />
    )
}

export default ProfileSettings
