import React, { useState } from 'react'
import { supabase } from '../../config/supabaseClient'

const ReviewForm: React.FC = () => {
  const [gameTitle, setGameTitle] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [rating, setRating] = useState(5)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { error } = await supabase.from('reviews').insert([{ game_title: gameTitle, review_text: reviewText, rating }])
      if (error) throw error
      alert('Review submitted successfully!')
      setGameTitle('')
      setReviewText('')
      setRating(5)
    } catch (error) {
      console.error('Error submitting review:', error)
    }
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="gameTitle" className="block text-gray-700 font-semibold mb-2">
            Game Title
          </label>
          <input
            type="text"
            id="gameTitle"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reviewText" className="block text-gray-700 font-semibold mb-2">
            Review Text
          </label>
          <textarea
            id="reviewText"
            rows={3}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-semibold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default ReviewForm
