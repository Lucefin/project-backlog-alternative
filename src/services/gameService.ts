import { supabase } from '../config/supabaseClient'

const fetchSteamGames = async (userId: string) => {
  const response = await fetch(`https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${import.meta.env.VITE_STEAM_API_KEY}&steamid=${userId}&format=json`)
  const data = await response.json()
  return data.response.games
}

const fetchPlayStationGames = async (accessToken: string) => {
  const response = await fetch('https://api.playstation.com/v1/kamino/users/me/trophies', {
    headers: { Authorization: `Bearer ${accessToken}` },
  })
  const data = await response.json()
  return data.trophies
}

const fetchXboxGames = async (accessToken: string) => {
  const response = await fetch('https://xboxapi.com/v2/account/Xuid(1234567890)/achievements', {
    headers: { 'X-AUTH': accessToken },
  })
  const data = await response.json()
  return data.achievements
}

const syncGamesWithSupabase = async (games: any[]) => {
  const { error } = await supabase.from('games').insert(games)
  if (error) console.error('Error syncing games:', error)
}

export { fetchSteamGames, fetchPlayStationGames, fetchXboxGames, syncGamesWithSupabase }
