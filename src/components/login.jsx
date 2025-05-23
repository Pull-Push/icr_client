import React from "react";

export default function LoginMain() {
    return(
        <div className="mainDiv">
            <img src="" alt="logo" />
            <h1>ICR</h1>
            <h2>Incident Command and Response</h2>
            <div className="loginDiv">
                <form action="/login" method="post">
                
                <label htmlFor="log-email">Email:</label>
                <input type="email" name="log-email" id="log-email" />
                <label htmlFor="log-password">Password:</label>
                <input type="password" name="log-password" id="log-password" />
                
                <button type="submit">Log In</button>
                </form>
            </div>
            <div className="registerDiv">
                <form action="/register" method="post">
                
                <label htmlFor="reg-first-name">First Name:</label>
                <input type="text" name="reg-first-name" id="reg-first-name" />
                <label htmlFor="reg-last-name">Last Name:</label>
                <input type="text" name="reg-last-name" id="reg-last-name" />

                <label htmlFor="reg-email">Email:</label>
                <input type="email" name="reg-email" id="reg-email" />
                <label htmlFor="reg-password">Password:</label>
                <input type="password" name="reg-password" id="reg-password" />
                <label htmlFor="ver-password">Verify Password:</label>
                <input type="password" name="ver-password" id="ver-password" />

                <label htmlFor="reg-terms">I Agree to the terms and Conditions</label>
                <input type="checkbox" name="reg-terms" id="reg-terms" required/>
                <button type="submit">Register</button>
                </form>
            </div>
            
        </div>
        
    )
}