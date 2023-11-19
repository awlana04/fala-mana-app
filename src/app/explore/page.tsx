import Link from 'next/link'

export default function Explore() {
  return (
    <header className="w-screen grid self-end justify-items-end transition">
      <Link href="/explore/sign-in">
        <button className="w-28 m-8 mr-10 p-2 bg-black text-white font-medium text-lg hover:bg-white hover:text-black">
          Acessar
        </button>
      </Link>
    </header>
  )
}
