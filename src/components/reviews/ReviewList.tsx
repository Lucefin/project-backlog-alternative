import React, { useEffect, useState } from 'react'
import { supabase } from '../../config/supabaseClient'

const ReviewList: React.FC = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data, error } = await supabase.from('reviews').select('*')
        if (error) throw error
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [])

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Recent Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4">
          <p><strong>{review.game_title}</strong></p>
          <p>{review.review_text}</p>
          <p>Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  )
}

export default ReviewList
