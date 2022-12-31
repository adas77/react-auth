import { create } from 'domain'
import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import Navigation from './Navigation'

type Props = {
}

const Login = (props: Props) => {
    const CORRECT_USER: string = "admin"
    const CORRECT_PASS: string = "admin123"

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")

    const { isAuth, setIsAuth } = useGlobalAuthContext()


    const handleForm = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (username === CORRECT_USER && pass === CORRECT_PASS) {
            console.log("good")
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
        }
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setPass(event.target.value)
        console.log(pass)

    }

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setUsername(event.target.value)
        console.log(username)
    }

    const handleLogout = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault()
        setIsAuth(false)
    }

    return (
        <>
            {isAuth && <Navigate to={'/'} />}
            <Navigation />
            <button>Logout</button>
            <form onSubmit={e => handleForm(e)}>
                <div>
                    Username
                    <input type="text" onChange={e => handleUsername(e)} placeholder="Enter Username" />
                </div>
                <div>
                    Password
                    <input type="password" onChange={e => handlePassword(e)} placeholder="Enter Password" />
                </div>
                <button onSubmit={e => e.preventDefault()}>Login</button>
            </form>
            {isAuth ? <p>Zalogowany</p> : <p>Niezaloogowany</p>}
        </>

    )
}

export type GlobalAuth = {
    isAuth: boolean
    setIsAuth: (is: boolean) => void
}
export const GlobalAuthContext = createContext<GlobalAuth>({
    isAuth: false,
    setIsAuth: () => { }
})
export const useGlobalAuthContext = () => useContext(GlobalAuthContext)

export default Login