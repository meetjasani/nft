import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import config from '../config';
import axios from 'axios';
import swal from 'sweetalert';

const supabase = createClient(
    'https://najujtycshhzbmhcthrc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hanVqdHljc2hoemJtaGN0aHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyMjk2MjEsImV4cCI6MTk4NTgwNTYyMX0.uPBotS5wtJV6kx6nBhfVNuwjaN8_0PKPA3gYlJYNHCU'
)

function Login() {
    const clientId = '14992480028-klehpmlsmfam2s0fctl7ersjnjjmerd4.apps.googleusercontent.com'

    const loginField = {
        email: "",
        password: "",
    }

    const loginErr = {
        emailErr: "",
        passwordErr: "",
    };

    const googlelog = {
        email: '',
        familyName: '',
        givenName: '',
        name: '',
    }

    const [gogledata, setGoogleData] = useState(googlelog);
    const [logindata, setLoginData] = useState(loginField);
    const [error, setError] = useState(loginErr);
    const navigate = useNavigate();

    const Register = () => {
        navigate('/register')
    }
    

    const handleChange = (e) => {
        setLoginData({
            ...logindata,
            [e.target.name]: e.target.value
        })
    }
    const validation = () => {
        let flag = true
        let Err = {
            emailErr: "",
            passwordErr: "",
        };

        const validEmail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');


        if (!validEmail.test(logindata.email)) {
            Err.emailErr = "invalidEmail";
            flag = false
        }
        if (logindata.email == "") {
            Err.emailErr = "email is required."
            flag = false
        }

        if (logindata.password == "") {
            Err.passwordErr = "password is required."
            flag = false
        }
        setError(Err);
        return flag;
    }
    const Submit = () => {
        if (!validation()) {
            return
        }
        const loginDetail = {
            email: logindata.email,
            password: logindata.password
        }
        axios
        .post(config.BASE_URL + "userlogin", loginDetail)
        .then((response) => {
            if(!response.data.status){
                swal({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error",
                  });
            }
            else{
                swal({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success",
                  }).then((isSuccess) => {
                    if (isSuccess) {
                        localStorage.setItem("user", JSON.stringify(response.data.data));
                        navigate('/')
                    }
                  });
            }
        });
    }


    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        const socialAuthDetails = {
            accessToken: res.accessToken,
            email: res.profileObj.email,
            familyName: res.profileObj.familyName,
            givenName: res.profileObj.givenName,
            googleId:res.profileObj.googleId,
            imageUrl:res.profileObj.imageUrl,
            name: res.profileObj.name
        }
        axios
        .post(config.BASE_URL + "social_login/google", socialAuthDetails)
        .then((response) => {
            if(!response.data.status){
                swal({
                    title: "Error!",
                    text: response.data.message,
                    icon: "error",
                  });
            }
            else{
                swal({
                    title: "Success!",
                    text: response.data.message,
                    icon: "success",
                  }).then((isSuccess) => {
                    if (isSuccess) {
                        localStorage.setItem("user", JSON.stringify(response.data.data));
                        navigate('/')
                    }
                  });
            }
        })
    };


    const onFailure = (err) => {
        console.log('failed:', err);
    };

   
    const login_discord = () => {
        console.log("Response :",supabase);
    }

    return (
        <div className='container'>
            <div className='login-section'>
                <div className='flex-grow-1 py-5  '>
                    <div className='login-title'>
                        <h4 className='fw-bold lh-lg fs-1 text-center mb-1'>Login</h4>
                        <p><span className='text-danger'>*</span> Required fields</p>
                    </div>
                    <div className='input-div-wrap'>
                        <label>Email Address<span className='text-danger'>*</span> </label>
                        <input
                            type="text"
                            name="email"
                            placeholder='Enter email id'
                            value={logindata.email}
                            className={error.emailErr == "" ? 'border-0 px-4 mb-4' : 'mb-0'}
                            onChange={(e) => {
                                setError({
                                    ...error,
                                    emailErr: "",
                                });
                                handleChange(e)
                            }}
                            required
                        />
                        <p className={error.emailErr ? "validationfield" : "visibility-block"}>
                            {error.emailErr}
                        </p>
                        <label>Password<span className='text-danger'>*</span> </label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter password'
                            className='border-0 px-4'
                            value={logindata.password}
                            onChange={(e) => {
                                setError({
                                    ...error,
                                    passwordErr: "",
                                });
                                handleChange(e)
                            }}
                            required
                        />
                        <p className={error.passwordErr ? "validationfield" : "visibility-block"}>
                            {error.passwordErr}
                        </p>
                        <Link to="/forgot" className='forgot'>Forgot password?</Link>
                        <div className="button-login-reg d-flex">
                            <button
                                type="button"
                                className="green-btn border-0 me-2"
                                onClick={Submit}
                            >Log In</button>
                            <button
                                type="button"
                                className="green-btn border-0 me-2 px-4"
                                onClick={Register}
                            >Register Now</button>
                        </div>
                        <GoogleLogin
                            className='google-login'
                            clientId={clientId}
                            buttonText="Sign in with Google"
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            cookiePolicy={'single_host_origin'}
                        />
                        <Auth
                            supabaseClient={supabase}
                            onSuccess={login_discord}
                            providers={["discord"]}
                            appearance={{
                                className: {
                                    button: 'auth-btn-group',
                                },
                                style: {
                                    label: { display: 'none' },
                                    input: { display: 'none' },
                                    anchor: { display: 'none' },

                                },
                            }}
                        />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Login