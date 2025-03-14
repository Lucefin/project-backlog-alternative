import React, { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { fetchSteamGames, syncGamesWithSupabase } from '../../services/gameService'

const GameTracker: React.FC = () => {
  const { session } = useAuth()

  useEffect(() => {
    if (session?.user) {
      const fetchAndSyncGames = async () => {
        try {
          const steamGames = await fetchSteamGames(session.user.id)
          syncGamesWithSupabase(steamGames)
        } catch (error) {
          console.error('Error fetching and syncing games:', error)
        }
      }

      fetchAndSyncGames()
    }
  }, [session])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Game Tracker</h2>
      <p>Fetching and syncing games...</p>
    </div>
  )
}

export default GameTracker
