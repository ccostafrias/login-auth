import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export default function Signin() {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email || !password ) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, password)

    if (res) {
      setError(res)
      return
    }

    navigate("/home")
  }


  return (
    <div className='container'>
      <h1 className='title'>Sistema de Login</h1>
      <div className='form'>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={e => (setEmail(e.target.value), setError(""))}
        />
        <Input
          type="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={e => (setPassword(e.target.value), setError(""))}
        />
        <span className='error'>{error}</span>
        <Button
          Text="Entrar"
          onClick={handleLogin}
        />
        <span>
          <span>Não tem uma conta?</span> <strong><Link to="/signup">Registre-se</Link></strong>
        </span>
      </div>
    </div>
  )
}