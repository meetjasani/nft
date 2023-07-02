import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import config from '../../config';
import axios from 'axios';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";
const TEST_SITE_KEY = "6Lcn7XIjAAAAAD3MPI6ViBYn6hkfNc-WC5YLtGnD";
const Register = () => {
    const recaptchaRef = React.createRef();
    const registerField = {
        firstname: "",
        lname: "",
        email: "",
        password: "",
    }
    const [registerdata, setRegisterData] = useState(registerField);
    
    const registerErr = {
        firstnameErr: "",
        lnameErr: "",
        emailErr: "",
        passwordErr: "",
        capchaErr:"",
    };
    const [error, setError] = useState(registerErr);

    const handleChange = (e) => {
        setRegisterData({
            ...registerdata,
            [e.target.name]: e.target.value
        })
    }
    const navigate = useNavigate();
   
    const validation = () => {
        let flag = true
        let Err = {
            firstnameErr: "",
            lastnameErr: "",
            emailErr: "",
            passwordErr: "",
        };

        if (registerdata.firstname == "") {
            Err.firstnameErr = "First Name is required."
            flag = false
        }

        if (registerdata.lastname == "") {
            Err.lastnameErr = "Last Name is required."
            flag = false
        }

        const validEmail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');


        if (!validEmail.test(registerdata.email)) {
            Err.emailErr = "invalidEmail";
            flag = false
        }

        if (registerdata.email == "") {
            Err.emailErr = "email is required."
            flag = false
        }

        if (registerdata.password == "") {
            Err.passwordErr = "password is required."
            flag = false
        }

        setError(Err);
        return flag;
    }

    const handleClickSubmit = () => {
        if (!validation()) {
            return
        }
        // const token = recaptchaRef.current.getValue();
        // if(token == '')
        // {
        //     let flag = true
        //     let Err = {
        //         capchaErr: ""
        //     };
        //     Err.capchaErr = "Please check captch."
        //     flag = false
        //     setError(Err);
        //     recaptchaRef.current.reset();
        //     return flag;
            
        // }

        const registrationDetail = {
            firstname: registerdata.firstname,
            lastname: registerdata.lastname,
            email: registerdata.email,
            password: registerdata.password,
        }

        axios
            .post(config.BASE_URL + "userregister", registrationDetail)
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
        navigate('/login')
    }
    return (
        <div className='container'>
            <div className='register-section'>
                <div className='flex-grow-1 py-5  '>
                    <div className='register-title'>
                        <h4 className='fw-bold lh-lg fs-1 text-center mb-1'>Create New Account</h4>
                        {/* <p><span className='text-danger'>*</span> Required fields</p> */}
                    </div>
                    <form className='input-div-wrap-register'>
                        <div class="row mb-4">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="form-outline">
                                    <label class="form-label" for="form3Example1">First name <span className='text-danger'>*</span>  </label>
                                    <input
                                        type="text"
                                        name='firstname'
                                        value={registerdata.firstname}
                                        className={error.firstnameErr == "" ? 'border-0 px-4 mb-4' : 'mb-0'}
                                        placeholder='Enter Your First Name'
                                        autoComplete='off'
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                firstnameErr: "",
                                            });
                                            handleChange(e)
                                        }}
                                        required />
                                    <p className={error.firstnameErr ? "validationfield" : "visibility-block"}>
                                        {error.firstnameErr}
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div class="form-outline">
                                    <label class="form-label" for="form3Example2">Last name <span className='text-danger'>*</span>  </label>
                                    <input
                                        type="text"
                                        name='lastname'
                                        value={registerdata.lastname}
                                        className='border-0 px-4'
                                        placeholder='Enter Your last Name'
                                        autoComplete='off'
                                        onChange={(e) => {
                                            setError({
                                                ...error,
                                                lastnameErr: "",
                                            });
                                            handleChange(e)
                                        }}
                                        required />
                                    <p className={error.lastnameErr ? "validationfield" : "visibility-block"}>
                                        {error.lastnameErr}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <label>Email address <span className='text-danger'>*</span> </label>
                            <input
                                type="text"
                                name="email"
                                value={registerdata.email}
                                placeholder='Enter email id'
                                className='border-0 px-4 '
                                autoComplete='off'
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
                        </div>

                        <div class="form-outline mb-4">
                            <label>Password <span className='text-danger'>*</span> </label>
                            <input
                                type="password"
                                name='password'
                                value={registerdata.password}
                                placeholder='Enter password'
                                className='border-0 px-4'
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
                        </div>
                        <div class="mb-4">
                        <ReCAPTCHA
                            style={{ display: "inline-block" }}
                            theme="dark"
                            ref={recaptchaRef}
                            sitekey={TEST_SITE_KEY}
                        />
                            <p className={error.capchaErr ? "validationfield" : "visibility-block"}>
                                {error.capchaErr}
                            </p>
                        </div>
                        <button
                            type="button"
                            className="green-btn border-0 me-2"
                            onClick={handleClickSubmit}
                        >Submit</button>
                    </form>

                </div>
            </div >
        </div>
    )
}

export default Register