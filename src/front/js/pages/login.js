import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"; 

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${process.env.BACKEND_URL}api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                setError(data.msg || "Error al iniciar sesión");
                return;
            }

            const data = await response.json();
            localStorage.setItem("token", data.access_token); // Guardar el token
            window.location.href = "/"; // Redirigir al inicio
        } catch (error) {
            setError("Error inesperado al iniciar sesión");
        }
    };

    return (
        <div className="container">
            {error && <p style={{ color: "red" }}>{error}</p>}
            <main className="form-signin w-100 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                <input
                        id="email"
                        placeholder="Email"
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                <label htmlFor="email" className="form-label">Email</label>
                </div> 
                <div className="form-floating">
                <input
                        id="password"
                        placeholder="Password"
                        className="form-control"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                <label htmlFor="password" className="form-label">Password</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                <div className="mt-3">
                        <Link to="/signup">Don't have an account? Sign up</Link>
                    </div>
            </form>
            </main>
        </div>
)}
