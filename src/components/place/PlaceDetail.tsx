import { CURRENT_STORE_KEY } from '@/hooks/currentStore'
import React from 'react'
import useSWR from 'swr'
import styles from './PlaceDetail.module.css'
import { IoIosArrowUp } from 'react-icons/io'
import Image from 'next/image'

export default function PlaceDetail() {
  const { data: currentStore } = useSWR(CURRENT_STORE_KEY)
  console.log(currentStore)
  return (
    <div
      className={`${styles.mapDetail} ${
        currentStore ? 'h-[80px]' : 'h-[40px]'
      }`}
    >
      <div className="flex">
        {!currentStore && <p>매장을 선택해주세요</p>}
        {currentStore && <p>{currentStore.name}</p>}
        <button disabled={!currentStore} className="disabled:text-gray-300">
          <IoIosArrowUp />
        </button>
      </div>
      {currentStore && (
        <div>
          {/* <Image src={currentStore.images[0]} width={120} height={120} alt="" /> */}
        </div>
      )}
    </div>
  )
}
