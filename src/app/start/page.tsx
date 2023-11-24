'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import feminismo from '../../../public/feminismo.jpg';
import feminismo2 from '../../../public/feminismo2.jpeg';
import violencia from '../../../public/violencia.jpg';
import penha from '../../../public/penha.jpg';

export default function Start() {
  const slides = [
    {
      title: 'Feminismo',
      image: feminismo,
      text: 'O caminho entre os direitos das mulheres e as lutas para a igualdade das minorias em geral estiveram sempre entrelaçados. Na época do Brasil Colônia (1500-1822), pouco foi conquistado. Vivia-se uma cultura enraizada de repressão às minorias, desigualdade e de patriarcado. As mulheres eram propriedade de seus pais, maridos, irmãos ou quaisquer que fossem os chefes da família. Nesse período, a luta das mulheres era focada em algumas carências extremamente significativas à época: direito à vida política, educação, direito ao divórcio e livre acesso ao mercado de trabalho.',
    },
    {
      title: 'Tipos de Violência',
      image: violencia,
      text: 'Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha: física, psicológica, moral, sexual e patrimonial − Capítulo II, art. 7º, incisos I, II, III, IV e V.',
    },
    {
      title: 'Lei Maria da Penha',
      image: penha,
      text: 'A Lei Maria da Penha também teve uma importante vitória em fevereiro de 2012, em decisão do STF, quando foi estabelecido que qualquer pessoa poderia registrar formalmente uma denúncia de violência contra a mulher, e não apenas quem está sob essa violência.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full p-10 text-white">
      <div className="min-w-min min-h-min p-6 px-10 bg-slate-600 group">
        <FaChevronLeft
          onClick={prevSlide}
          className="w-6 h-6 absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-20 cursor-pointer hidden group-hover:block"
        />

        <Image
          src={slides[currentIndex].image}
          alt="Imagem"
          className="m-auto rounded-2xl"
          width={600}
          height={600}
        />

        <h3 className="mt-6 py-4 text-2xl font-semibold">{slides[1].title}</h3>
        <p className="text-lg">{slides[1].text}</p>

        <FaChevronRight
          onClick={nextSlide}
          className="w-6 h-6 absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-20 cursor-pointer hidden group-hover:block"
        />
      </div>
    </div>
  );
}
