import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../public/Logo.svg';

export default function Home() {
  return (
    <div className="h-full grid-flow-col transition">
      <div className="w-fit m-auto mt-24 max-md:mt-20 flex">
        <h1 className="m-auto p-6 max-md:p-3 text-5xl max-md:text-3xl text-red-600 font-bold">
          Fala, manas!
        </h1>

        <Image
          src={Logo}
          alt="Logo do feminismo"
          width={188}
          className="max-md:w-28"
        />
      </div>

      <div className="text-center mt-20 max-md:mt-14">
        <Link href="/start">
          <button className="w-52 h-20 p-4 text-3xl font-semibold bg-black text-red-600 rounded-lg hover:bg-red-600 hover:text-black">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
}
