import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
        <input type="password" placeholder="ConfirmPassword" required />
        <input type="email" placeholder="Email" requiredrequired />
        <button>Register</button>
        <p>This an error</p>
        <span>
          Do you have an account ? <Link to="/login">to Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
