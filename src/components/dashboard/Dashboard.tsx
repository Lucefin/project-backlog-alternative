import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

const Dashboard: React.FC = () => {
  const { session } = useAuth()
  const [stats, setStats] = useState({
    totalGames: 0,
    completedGames: 0,
    playtimePerGenre: {},
    difficultyOfCompletions: {},
    rarestAchievements: [],
  })

  useEffect(() => {
    if (session?.user) {
      const fetchUserStats = async () => {
        try {
          // Fetch user stats from Supabase
          const { data, error } = await supabase.from('games').select('*')
          if (error) throw error

          // Calculate stats
          const totalGames = data.length
          const completedGames = data.filter(game => game.completed).length
          const playtimePerGenre = {}
          const difficultyOfCompletions = {}

          data.forEach(game => {
            if (!playtimePerGenre[game.genre]) playtimePerGenre[game.genre] = 0
            playtimePerGenre[game.genre] += game.playtime

            if (!difficultyOfCompletions[game.difficulty]) difficultyOfCompletions[game.difficulty] = 0
            difficultyOfCompletions[game.difficulty]++
          })

          const rarestAchievements = data.flatMap(game => game.achievements)
            .filter(achievement => achievement.rarity === 'rare')

          setStats({ totalGames, completedGames, playtimePerGenre, difficultyOfCompletions, rarestAchievements })
        } catch (error) {
          console.error('Error fetching user stats:', error)
        }
      }

      fetchUserStats()
    }
  }, [session])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <p>Total Games: {stats.totalGames}</p>
      <p>Completed Games: {stats.completedGames}</p>
      <div>
        <h3 className="font-semibold mt-4">Playtime per Genre:</h3>
        {Object.entries(stats.playtimePerGenre).map(([genre, playtime]) => (
          <p key={genre}>{genre}: {playtime} hours</p>
        ))}
      </div>
      <div>
        <h3 className="font-semibold mt-4">Difficulty of Completions:</h3>
        {Object.entries(stats.difficultyOfCompletions).map(([difficulty, count]) => (
          <p key={difficulty}>{difficulty}: {count} games</p>
        ))}
      </div>
      <div>
        <h3 className="font-semibold mt-4">Rarest Achievements:</h3>
        {stats.rarestAchievements.map((achievement, index) => (
          <p key={index}>{achievement.name}</p>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
