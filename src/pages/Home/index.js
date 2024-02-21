import React from 'react'
import Button from '../../components/Button'
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

export default function Home() {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <main className='container'>
      <h1>Home</h1>
      <Button 
        Text="Sair"
        onClick={() => signOut()}
        loading={loading}
      />
    </main>
  )
}