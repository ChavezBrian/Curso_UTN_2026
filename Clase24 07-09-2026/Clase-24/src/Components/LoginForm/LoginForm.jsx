import React from 'react'
import './LoginForm.css'

export default function LoginForm() {
  function handleSubmit(evento) {
    evento.preventDefault()
    const form = evento.target
    const email = form.email.value
    const password = form.password.value
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit" className="btn-submit">
        Iniciar Sesión
      </button>
    </form>
  )
}
