import { createContext, ReactNode } from 'react';

export interface UserProps {
    name: String;
    avatarUrl: string;
}

export interface AuthContextDataProps {
    user: UserProps;
    signIn: () => Promise<void>
}

interface AuthProviderProps {
    children:  ReactNode;
}

export const AuthContext = createContext({} as  AuthContextDataProps);

export function AuthContextProvider({children }: AuthProviderProps){

    async function signIn (){ 
        console.log('Vamos Logar')
    }


    return (
        <AuthContext.Provider value={{
            signIn,
            user: {
                name: 'Rafael',
                avatarUrl: 'https://github.com/rafaelcasasanta.png'
            }
            
            }}>
                {children}


        </AuthContext.Provider>
    )
}