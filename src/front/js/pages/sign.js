import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; 

export const Sign = () => {
return (
    <div className="container">
        <main className="form-signin w-100 m-auto">
        <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            
        </form>
        </main>
    </div>
)}
