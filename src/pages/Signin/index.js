import React, { useState, useEffect } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from "../../services/firebaseConfig"
import useAuth from '../../hooks/useAuth'

export default function Signin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    errorFirebase,
  ] = useSignInWithEmailAndPassword(auth);

  const handleLogin = () => {
    if (!email || !password ) {
      setError('Preencha todos os campos')
      return
    }

    signInWithEmailAndPassword(email, password)
  }

  
  useEffect(() => {
    if (user) {
      navigate("/home")
    }
  }, [user])


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
        <span className='error'>{error || errorFirebase?.message}</span>
        <Button
          Text="Entrar"
          onClick={handleLogin}
          loading={loading}
        />
        <span>
          <span>Não tem uma conta?</span> <strong><Link to="/signup">Registre-se</Link></strong>
        </span>
      </div>
    </div>
  )
}