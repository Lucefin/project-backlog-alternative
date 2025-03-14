import React, { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.setAttribute('data-theme', savedTheme)
    setTheme(savedTheme)
  }, [])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Theme Switcher</h2>
      <button onClick={toggleTheme} className="btn btn-primary flex items-center space-x-2">
        {theme === 'light' ? <Moon /> : <Sun />}
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeSwitcher
