import { useState, useEffect } from 'react'
import { supabase } from '../config/supabaseClient'

export function useAuth() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
      }
    )

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  return { session }
}
