import React from "react";
import { Grid } from "@mui/material";

import "./Login2.css";
import womenimg from "../images/women with tab 1.svg";
import googleimg from "../images/google 1.svg";
import fbimg from "../images/facebook 1.svg";
import thunder from "../images/thunderbolt 1.svg";

const Login = () => {

    return(
        
        <div className="outer-container">

            
            <div className="login-container">

                <div className="login-cont-box form">

                    <h2>LOGIN</h2>
                        <p  >How to get started lorem ipsum dolor at?</p>
                    <input
                    className="input-user"
                        name="userName"
                        type="text"
                        placeholder="Username"
                    />
                <br/>
                    <input
                        className="input-password"
                        name="userPassword"
                        type="password"
                        placeholder="Password"
                    />
                <br/>

                    <button className="login-btn">Login Now</button>
                    <br/><br/>

                    <p><strong>Login</strong>&nbsp; with Others</p>

                    <button className="google-btn"> <img src={googleimg} alt="icon"/> Login with &nbsp;<strong>google</strong></button>
                    <br/>
                    <button className="facebook-btn"><img src={fbimg} alt="icon"/> Login with &nbsp;<strong>facebook</strong></button>

                </div>


            </div>
              
            <div className="image-container">

                        <div className="img-container-txt">
                            <p>
                                Very Good <br/>
                                work are <br />
                                waiting for <br />
                                                you login <br />
                                Now!!!
                            </p>
                            <div className="img-container-img">
                                <img src ={womenimg} alt="" />
                            </div>
                            <div className="image-thunder">
                                <img src={thunder} alt="" />
                            </div> 

                        </div>    
                                    
                                    
            </div>

            
        </div>

    );
};
export default Login;
