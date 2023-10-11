import { Store } from '@/models/map'
import React, { useCallback } from 'react'
import { mutate } from 'swr'

export const STORE_KEY = '/stores'

export default function useStores() {
  const initializeStores = useCallback((stores: Store[]) => {
    mutate('STORE_KEY', stores)
  }, [])

  return {
    initializeStores,
  }
}
