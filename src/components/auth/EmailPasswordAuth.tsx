import React from 'react'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const EmailPasswordAuth: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Email/Password Authentication</h2>
      <RegisterForm />
      <LoginForm />
    </div>
  )
}

export default EmailPasswordAuth
