import React from 'react'

const RegisterForm: React.FC = () => {
  return (
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
        Register
      </button>
    </form>
  )
}

export default RegisterForm
