import { Store } from '@/models/map'
import { useCallback, useState } from 'react'
import { mutate } from 'swr'

export const CURRENT_STORE_KEY = '/current-store'

const useCurrentStore = () => {
  const [expended, setExpended] = useState(false)

  const setCurrentStore = useCallback((store: Store) => {
    mutate(CURRENT_STORE_KEY, store)
  }, [])

  const clearCurrentStore = useCallback(() => {
    mutate(CURRENT_STORE_KEY, null)
  }, [])

  return {
    expended,
    setExpended,
    setCurrentStore,
    clearCurrentStore,
  }
}
export default useCurrentStore
