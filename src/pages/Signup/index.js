import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useAuth from '../../hooks/useAuth'
import { auth } from "../../services/firebaseConfig"

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [emailConfirm, setEmailConfirm] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);


  const handleSignup = () => {
    if (!email || !emailConfirm || !password || !passwordConfirm) {
      setError('Preencha todos os campos')
      return
    }
    else if (email !== emailConfirm || password !== passwordConfirm) {
      setError('E-mail ou senha não são equivalentes')
      return
    }

    const res = signup(email, password)

    if (res) {
      setError(res)
      return
    }

    navigate("/")
  }


  return (
    <div className='container'>
      <h1 className='title'>Sistema de Login</h1>
      <div className='form'>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={e => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Digite seu E-mail novamente"
          value={emailConfirm}
          onChange={e => [setEmailConfirm(e.target.value), setError("")]}
        />
        <Input
          type="password" 
          placeholder="Digite sua senha"
          value={password}
          onChange={e => [setPassword(e.target.value), setError("")]}
        />
         <Input
          type="password" 
          placeholder="Digite sua senha novamente"
          value={passwordConfirm}
          onChange={e => [setPasswordConfirm(e.target.value), setError("")]}
        />
        <span className='error'>{error}</span>
        <Button
          Text="Inscrever-se"
          onClick={handleSignup}
        />
        <span>
          <span>Já tem uma conta?</span> <strong><Link to="/">Entre</Link></strong>
        </span>
      </div>
    </div>
  )
}