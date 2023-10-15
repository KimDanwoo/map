import MapSection from '@/components/map/MapSection'

export default async function Home() {
  const stores = require('../../public/stores.json')

  return <MapSection stores={stores} />
}
