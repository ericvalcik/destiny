import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
       <Image src={'/suit-turned-away.png'} width={500} height={500} priority />
      <Image src={'/suit-turned-away.png'} width={500} height={500} priority />
    </main>
  )
}
