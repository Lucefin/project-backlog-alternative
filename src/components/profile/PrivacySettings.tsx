import React from 'react'
import { Gamepad2 } from 'lucide-react'

const PrivacySettings: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="visibility" className="block text-gray-700 font-semibold mb-2">
            Completion Data Visibility
          </label>
          <select
            id="visibility"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="public">Public</option>
            <option value="friends">Friends Only</option>
            <option value="private">Private</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default PrivacySettings
