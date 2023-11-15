import Image from 'next/image'
import {Hero} from '@/components'
import {Navbar,Footer} from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
    </main>
  )
}
