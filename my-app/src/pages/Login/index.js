import { useState } from 'react';
import firebase from "firebase";
import { Link } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handlePassChange = (e) => {
    setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        setError(error.message);
    }
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <p>Вход в личный кабинет</p>
        <div>
            <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            />
        </div>
        <div>
            <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
            />
        </div>
        <div>
            {error && <p>{error}</p>}
            <button type="submit">Войти</button>
        </div>
        <hr />
        <p>
            У вас нет учетной записи? <Link to="/signup">Регистрация</Link>
        </p>
        </form>
    </div>
    );
};
