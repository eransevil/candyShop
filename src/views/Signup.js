import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';


export default function Signup(props) {
    console.log(props)


    const BASE_URL = process.env.NODE_ENV === 'production'
        ? '/api/'
        : '//localhost:3030/api/'


    const [credentials, setCredentials] = useState({
        userName: '',
        password: '',
        email: ''
    })

    const [loginCredentials, setloginCredentials] = useState({
        userName: '',
        password: ''
    })

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        const tempCredentials = { ...credentials }
        tempCredentials[field] = value;
        setCredentials({ ...tempCredentials })

    }
    const handleLoginChange = ({ target }) => {
        const field = target.name
        const value = target.value
        const tempCredentials = { ...loginCredentials }
        tempCredentials[field] = value;
        setloginCredentials({ ...tempCredentials })

    }

    const doSignup = async () => {
        console.log(credentials)
        const user = await axios.post(`${BASE_URL}api/user/signup`, credentials)
        console.log(user.data)
        if (user.data) {
            await props.location.handleLogin(user.data)
            props.history.push('/CandyPage')
        }
    }

    const doLogin = async () => {
        console.log(loginCredentials)
        const user = await axios.post(`${BASE_URL}user/login`, loginCredentials)
        console.log(user.data)
        if (user.data) {
            await props.location.handleLogin(user.data)
            props.history.push('/CandyPage')
        }
    }




    return (
        <div>
            <h1 className="center"> Sign up</h1>

            <form className="login-container" onSubmit={(ev) => ev.preventDefault()}>
                <label className="labal" htmlFor="email">email</label>
                <input placeholder="email" type="email" id="email" name="email" value={credentials.email} onChange={handleChange} />
                <label className="labal" htmlFor="userName">userName</label>
                <input placeholder="UserName" type="text" id="userName" name="userName" value={credentials.userName} onChange={handleChange} />
                <label className="labal" htmlFor="password">Password</label>
                <input placeholder="Password" type="password" id="Password" name="password" value={credentials.password} onChange={handleChange} />
                <button onClick={doSignup} className="special-btn btn login-btn">Signup</button>
            </form>
            <div className="middle-page flex">
                <div className="login-signup-supperline">
                    <hr />
                </div>
                <h3>OR</h3>
                <div className="login-signup-supperline">
                    <hr />
                </div>
            </div>
            <form className="login-container" onSubmit={(ev) => ev.preventDefault()}>
                <label className="labal" htmlFor="userName">userName</label>
                <input placeholder="UserName" type="text" id="userName" name="userName" value={loginCredentials.userName} onChange={handleLoginChange} />
                <label className="labal" htmlFor="password">Password</label>
                <input placeholder="Password" type="password" id="Password" name="password" value={loginCredentials.password} onChange={handleLoginChange} />
                <button onClick={doLogin} className="special-btn btn login-btn">Login</button>
            </form>
        </div>
    )
}
