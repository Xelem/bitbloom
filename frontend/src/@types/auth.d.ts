// src/types.ts
export interface Auth {
    token: string
}

export interface AuthContextType {
    auth: Auth | null
    setAuth: (auth: Auth | null) => void
}
