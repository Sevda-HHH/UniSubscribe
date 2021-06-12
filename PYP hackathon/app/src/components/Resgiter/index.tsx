import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/style/register.scss";

export const Register = () => {

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const [confirmPass, setConfirmPass] = useState('')

    const handleChangeRegister = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target
        setFormState((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegisterSubmit = () => {
        if (formState.email && formState.password && confirmPass) {
            if (formState.password === confirmPass) {
                //    dispatch register action ))
            } else {
                //    alert "Password didn't match "
            }
        } else {
            // alert "fill the form "
        }
    }

    return (
        <div id="body">
            <div className="wrapper__area" id="wrapper_Area">
                <div className="forms__area">

                    {/* FORM START */}

                    <form onChange={handleRegisterSubmit} className="sign-up__form" id="signUpForm">
                        <h1 className="form__title">Sign Up!</h1>

                        <div className="input__group">
                            <label className="field">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="test@code.edu.az"
                                    value={formState.email}
                                    onChange={handleChangeRegister}
                                    id="signUpEmail" />
                            </label>
                            <span className="input__icon"><i className="bx bx-at"></i></span>
                            {/* <small className="input__error_message"></small> */}
                        </div>

                        <div className="input__group">
                            <label className="field">
                                <input
                                    type="password"
                                    name="password"
                                    value={formState.password}
                                    onChange={handleChangeRegister}
                                    placeholder="Password123$#%..."
                                    id="signUpPassword" />
                            </label>
                            <span className="input__icon"><i className="bx bx-lock"></i></span>
                            <span className="showHide__Icon"><i className="bx bx-hide"></i></span>
                            {/* <small className="input__error_message"></small> */}
                        </div>

                        <div className="input__group confirm__group">
                            <label className="field">
                                <input
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    value={confirmPass}
                                    onChange={evt => setConfirmPass(evt.target.value)}
                                    id="signUpConfirmPassword" />
                            </label>
                            <span className="input__icon"><i className="bx bx-lock"></i></span>
                            <span className="showHide__Icon"><i className="bx bx-hide"></i></span>
                            <small className="input__error_message"></small>
                        </div>
                        <button type="submit" className="submit-button" id="signUpSubmitBtn">Sign Up</button>
                    </form>
                    {/* FORM END */}


                </div>

                <div className="aside__area" id="aside_Area">
                    <div className="sign-up__aside-info">
                        <img src="https://e.top4top.io/p_1945sidbp2.png" alt="Image" />
                        <p>To Keep connected with us please login with your personal info</p>
                        <button id="aside_signIn_Btn">
                            <Link to="/login">    Sign In</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
