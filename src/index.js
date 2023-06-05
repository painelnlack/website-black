import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { users } from "./data/users";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Login from "views/Login.js";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Nome de usuário ou senha incorretos");
    }
  };



  const PrivateRoute = ({ element: Component }) =>
    isLoggedIn ? (
      <Component />
    ) : (
      <Navigate to="/login" />
    );

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Login
            username={username}
            password={password}
            handleLogin={handleLogin}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        }
      />
      <Route path="/" element={<PrivateRoute element={Index} />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
