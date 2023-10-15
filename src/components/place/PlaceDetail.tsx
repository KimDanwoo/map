import React from 'react'
import { CURRENT_STORE_KEY } from '@/hooks/currentStore'
import useSWR from 'swr'
import Image from 'next/image'
import { CiLocationOn, CiPhone } from 'react-icons/ci'

type Props = {
  expended: boolean
}

export default function PlaceDetail({ expended }: Props) {
  const { data: currentStore } = useSWR(CURRENT_STORE_KEY)

  return (
    <div>
      <div className="flex justify-center">
        {currentStore.images.map((image: string, idx: number) => (
          <Image
            src={image}
            className="w-[140px] h-[100px] m-2"
            width={120}
            height={40}
            alt=""
            priority
            key={idx}
          />
        ))}
      </div>
      {expended && (
        <div className="p-4">
          <h4 className="font-bold">설명</h4>
          <p>{currentStore.description}</p>
          <h4 className="font-bold">기본정보</h4>
          <p>
            <CiLocationOn />
            <span className="ml-2">{currentStore.address}</span>
          </p>
          <p>
            <CiPhone />
            <span className="ml-2">{currentStore.phone}</span>
          </p>
          <h4 className="font-bold">메뉴</h4>
          {currentStore.menus.map(
            (
              { name, price }: { name: string; price: string },
              index: number
            ) => (
              <p key={index}>
                <span>{name}</span>
                <span className="ml-2">{price}</span>
              </p>
            )
          )}
        </div>
      )}
    </div>
  )
}
