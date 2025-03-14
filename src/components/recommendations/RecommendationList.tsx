import React, { useEffect, useState } from 'react'
import { supabase } from '../../config/supabaseClient'

const RecommendationList: React.FC = () => {
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        // Fetch recommendations based on user habits
        const { data, error } = await supabase.from('recommended_games').select('*')
        if (error) throw error
        setRecommendations(data)
      } catch (error) {
        console.error('Error fetching recommendations:', error)
      }
    }

    fetchRecommendations()
  }, [])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">You Might Like</h2>
      {recommendations.map((game, index) => (
        <div key={index} className="mb-4">
          <p><strong>{game.title}</strong></p>
          <p>{game.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecommendationList
