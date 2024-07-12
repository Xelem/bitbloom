// src/types.ts
export interface User {
    country?: string
    createdAt: string
    dateOfBirth?: string
    emailAddress: string
    emailVerified: boolean
    fullName: string
    updatedAt: string
    uuid: string
}

export interface UserContextType {
    user: User | null
    setUser: (user: User | null) => void
}
