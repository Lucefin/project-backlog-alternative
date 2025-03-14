import React from 'react'
import ThemeSwitcher from './components/ui/ThemeSwitcher'
import { useAuth } from './hooks/useAuth'
import LoginButtons from './components/auth/LoginButtons'

const App: React.FC = () => {
  const { session } = useAuth()

  return (
    <div className="bg-base-200 min-h-screen">
      <header className="p-4 bg-base-100 shadow-md">
        <h1 className="text-xl font-bold">GameTracker Dashboard</h1>
        <ThemeSwitcher />
      </header>
      <main className="container mx-auto p-4">
        {session ? (
          <div>Welcome, {session.user.email}!</div>
        ) : (
          <LoginButtons />
        )}
      </main>
    </div>
  )
}

export default App
