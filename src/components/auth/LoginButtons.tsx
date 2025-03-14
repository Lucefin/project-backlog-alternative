import React, { useState } from 'react'
import { Gamepad2 } from 'lucide-react'
import { supabase } from '../../config/supabaseClient'

const LoginButtons: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  const handleLogin = async (provider: string) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider as any,
    })
    if (error) console.error('Error logging in:', error)
  }

  const handleCloseModal = () => setShowModal(false)

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Login with Gaming Platforms</h2>
      <button
        onClick={() => handleLogin('steam')}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-3"
      >
        <Gamepad2 name="Steam" className="mr-2" />
        Login with Steam
      </button>
      <button
        onClick={() => handleLogin('playstation')}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-3"
      >
        <Gamepad2 name="Playstation" className="mr-2" />
        Login with PlayStation
      </button>
      <button
        onClick={() => handleLogin('xbox')}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mb-3"
      >
        <Gamepad2 name="Xbox" className="mr-2" />
        Login with Xbox
      </button>
      <button
        onClick={() => setShowModal(true)}
        className="w-full flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
				<Gamepad2 name="Email" className="mr-2" />
        Email/Password Login
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm mx-auto relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none">
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">
                  Password
                </label>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Login
              </button>
            </form>
            <p className="mt-4 text-center">
              Don't have an account? <a href="#" className="text-blue-500 underline">Register</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginButtons
