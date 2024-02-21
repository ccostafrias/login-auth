import React from 'react'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

export default function Home() {
  const { signout } = useAuth()

  return (
    <main className='container'>
      <h1>Home</h1>
      <Button 
        Text="Sair"
        onClick={signout}
      />
    </main>
  )
}