import React from "react";
import "../../src/assets/scss/login.scss";

function Login({ handleLogin, setUsername, setPassword, username, password }) {
  return (
    <main>
      <div className="container">
        <h2>Login</h2>
        <form className="form" onSubmit={handleLogin}>
          <div>
            <input
              className="input"
              type="text"
              placeholder="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="input"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className="submit-btn" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
