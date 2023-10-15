'use client'
import useCurrentStore, { CURRENT_STORE_KEY } from '@/hooks/currentStore'
import React from 'react'
import useSWR from 'swr'
import styles from './PlaceToolbar.module.css'
import { IoIosArrowUp } from 'react-icons/io'
import PlaceDetail from './PlaceDetail'
import { useRouter } from 'next/navigation'

export default function PlaceToolbar() {
  const { data: currentStore } = useSWR(CURRENT_STORE_KEY)
  const { expended, setExpended, setCurrentStore } = useCurrentStore()
  const PlaceToolbarHeight = () => {
    if (!expended && currentStore) return 'h-[80px]'
    if (expended && currentStore) return 'h-full'
  }
  const router = useRouter()
  const goToMap = () => {
    if (expended) {
      router.push(`
      /?zoom=15&lat=${currentStore.coordinates[0]}&lng=${currentStore.coordinates[1]}
    `)
    }
    setExpended(!expended)
  }

  return (
    <div className={`${styles.mapDetail} ${PlaceToolbarHeight()}`}>
      <div className="flex">
        {!currentStore && <p>매장을 선택해주세요</p>}
        {currentStore && <p>{currentStore.name}</p>}
        <button
          disabled={!currentStore}
          className="disabled:text-gray-300 "
          onClick={goToMap}
        >
          <IoIosArrowUp
            className={`${styles.arrowButton} ${
              expended ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>
      {currentStore && <PlaceDetail expended={expended} />}
    </div>
  )
}
