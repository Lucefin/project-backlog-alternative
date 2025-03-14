import React from 'react'
import { Gamepad2 } from 'lucide-react'

const ProfileForm: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="avatar" className="block text-gray-700 font-semibold mb-2">
            Avatar
          </label>
          <input
            type="file"
            id="avatar"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="banner" className="block text-gray-700 font-semibold mb-2">
            Banner
          </label>
          <input
            type="file"
            id="banner"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700 font-semibold mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            rows={3}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
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

export default ProfileForm
