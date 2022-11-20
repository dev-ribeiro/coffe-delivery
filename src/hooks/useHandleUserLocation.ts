import { useEffect, useState } from 'react'

const storageKey = '@ignite-coffee-delivery___v1___location'

export function useHandleUserLocation() {
  const storageData = JSON.parse(localStorage.getItem(storageKey)!)
  const initialState = storageData || ''
  const [location, setLocation] = useState(initialState)

  function getUserLocation() {
    if (!storageData) {
      const interaction = prompt('Informe sua cidade')
      localStorage.setItem(storageKey, JSON.stringify(interaction))
      setLocation(interaction)
    }

    return storageData
  }

  return { location, getUserLocation }
}
