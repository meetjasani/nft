import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import axios from 'axios';
import swal from 'sweetalert';
import ReCAPTCHA from "react-google-recaptcha";

const Forgot = () => {
    const recaptchaRef = React.createRef();
    const forgotField = {
        email: "",
    }

    const forgotErr = {
        emailErr: "",
        capchaErr:"",
    };

    const [forgotpassword, setForgotPassword] = useState(forgotField);
    const [error, setError] = useState(forgotErr);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForgotPassword({
            ...forgotpassword,
            [e.target.name]: e.target.value
        })
    }
  

    const validation = () => {
        let flag = true
        let Err = {
            emailErr: ""
        };

        const validEmail = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@]+(\\.[^<>()\\[\\]\\\\.,;:\\s@]+)*)|(.+))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');


        if (!validEmail.test(forgotpassword.email)) {
            Err.emailErr = "invalidEmail";
            flag = false
        }
        if (forgotpassword.email == "") {
            Err.emailErr = "email is required."
            flag = false
        }
        setError(Err);
        return flag;
    }
    const Submit = () => {
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
        const forgotPassDetail = {
            email: forgotpassword.email,
        }

        axios
        .post(config.BASE_URL + "forgetpassword", forgotPassDetail)
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
                            navigate('/')
                        }
                      });
                }
            })
        navigate('/login')

    }
    return (
        <div className='container'>
            <div className='forgot-section'>
                <div className='flex-grow-1 py-5  '>
                    <div className='forgot-title'>
                        <h4 className='fw-bold lh-lg fs-1 text-center mb-1'>Forgot Password</h4>
                        <p><span className='text-danger'>*</span> Required fields</p>
                    </div>
                    <div className='input-div-wrap'>
                        <label>Email<span className='text-danger'>*</span> </label>
                        <input
                            type="text"
                            name="email"
                            value={forgotpassword.email}
                            placeholder='Enter email id'
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
                        <div class="mb-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={config.REACT_APP_SITE_KEY}
                            />
                            <p className={error.capchaErr ? "validationfield" : "visibility-block"}>
                                {error.capchaErr}
                            </p>
                        </div>

                        <button
                            type="button"
                            className="green-btn border-0 me-2"
                            onClick={Submit}
                        >Submit</button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Forgot