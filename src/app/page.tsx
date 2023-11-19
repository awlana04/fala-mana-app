import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../public/logo.svg'

export default function Home() {
  return (
    <body className="grid-flow-col transition">
      <Image
        src={Logo}
        alt="Logo do feminismo"
        width={160}
        className="mt-24 m-auto"
      />

      <div className="text-center mt-20">
        <Link href="/start">
          <button className="w-48 p-3 text-xl font-semibold bg-black text-white hover:bg-white hover:text-black">
            Começar
          </button>
        </Link>
        <Link href="/explore">
          <p className="mt-4 text-lg font-medium hover:text-white hover:underline">
            Explorar
          </p>
        </Link>
      </div>
    </body>
  )
}
