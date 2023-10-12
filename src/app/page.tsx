import MapSection from '@/components/map/MapSection'

export default function Home() {
  const stores = fetch('../../public/stores.json')

  return <MapSection />
}
