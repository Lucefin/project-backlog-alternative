import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const Leaderboard: React.FC = () => {
  const { session } = useAuth()
  const [globalLeaderboard, setGlobalLeaderboard] = useState([])
  const [friendsLeaderboard, setFriendsLeaderboard] = useState([])

  useEffect(() => {
    if (session?.user) {
      const fetchLeaderboards = async () => {
        try {
          // Fetch global leaderboard from Supabase
          const { data: globalData, error: globalError } = await supabase.from('users').select('*').order('completed_games', { ascending: false }).limit(10)
          if (globalError) throw globalError

          // Fetch friends leaderboard from Supabase
          const { data: friendsData, error: friendsError } = await supabase.from('friends_leaderboard').select('*').eq('user_id', session.user.id).order('completed_games', { ascending: false }).limit(10)
          if (friendsError) throw friendsError

          setGlobalLeaderboard(globalData)
          setFriendsLeaderboard(friendsData)
        } catch (error) {
          console.error('Error fetching leaderboards:', error)
        }
      }

      fetchLeaderboards()
    }
  }, [session])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Leaderboards</h2>
      <div>
        <h3 className="font-semibold mt-4">Global Leaderboard:</h3>
        {globalLeaderboard.map((user, index) => (
          <p key={index}>{index + 1}. {user.username} - {user.completed_games} games completed</p>
        ))}
      </div>
      <div>
        <h3 className="font-semibold mt-4">Friends Leaderboard:</h3>
        {friendsLeaderboard.map((user, index) => (
          <p key={index}>{index + 1}. {user.username} - {user.completed_games} games completed</p>
        ))}
      </div>
    </div>
  )
}

export default Leaderboard
