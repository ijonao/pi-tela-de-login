import React, { useState } from 'react';
import './Login.css'; // Estilos externos

function Login() {
  const [username, setUsername] = useState('johnny');
  const [password, setPassword] = useState('senha1');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificações de validação
    if (username === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    // Simula o envio correto dos dados para login
    console.log('Logando com:', { username, password });

    // Se necessário, você pode redirecionar para outra página após o login bem-sucedido
    setError('');
    alert('Login realizado com sucesso!'); // Feedback de sucesso
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Bem-vindo ao Sistema Escolar</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              aria-label="Campo para inserir nome de usuário"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              aria-label="Campo para inserir senha"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
