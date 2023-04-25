import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./context";
import { login } from "./service";

const LoginPage = () => {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    remind: false,
  });

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials, onLogin);
  };

  const buttonDisabled = !credentials.email || !credentials.password;

  return (
    <div>
      <h1>Login in to Nodepop</h1>
      <form onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          required
          onChange={handleChange}
          value={credentials.username}
        />
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          require
          onChange={handleChange}
          value={credentials.password}
        />
        <label for="remind">Recordarme</label>
        <input
          id="remind"
          name="remind"
          type="checkbox"
          onChange={handleChange}
          value={credentials.remind}
        />
        <button type="submit" disabled={buttonDisabled}>
          Submit
        </button>
      </form>
      <NavLink to="/adverts">adverts</NavLink>
    </div>
  );
};

export default LoginPage;
