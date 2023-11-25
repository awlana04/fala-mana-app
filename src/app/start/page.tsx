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
      image: [
        {
          src: feminismo,
          alt: 'Feminismo',
          width: 600,
          height: 500,
        },
        {
          src: feminismo2,
          alt: 'Feminismo',
          width: 300,
          height: 200,
        },
      ],
      text: 'O caminho entre os direitos das mulheres e as lutas para a igualdade das minorias em geral estiveram sempre entrelaçados. Na época do Brasil Colônia (1500-1822), pouco foi conquistado. Vivia-se uma cultura enraizada de repressão às minorias, desigualdade e de patriarcado. As mulheres eram propriedade de seus pais, maridos, irmãos ou quaisquer que fossem os chefes da família. Nesse período, a luta das mulheres era focada em algumas carências extremamente significativas à época: direito à vida política, educação, direito ao divórcio e livre acesso ao mercado de trabalho.',
    },
    {
      title: 'Tipos de Violência',
      image: [{ src: violencia, alt: 'Violência', width: 500, height: 400 }],
      text: 'Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha: física, psicológica, moral, sexual e patrimonial − Capítulo II, art. 7º, incisos I, II, III, IV e V.',
    },
    {
      title: 'Lei Maria da Penha',
      image: [{ src: penha, alt: 'penha', width: 500, height: 400 }],
      text: 'A Lei Maria da Penha também teve uma importante vitória em fevereiro de 2012, em decisão do STF, quando foi estabelecido que qualquer pessoa poderia registrar formalmente uma denúncia de violência contra a mulher, e não apenas quem está sob essa violência.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  const prevSlide = () => {
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full p-10 text-white">
      <div className="min-w-min min-h-min p-6 px-10 bg-slate-600">
        <div className="flex group">
          {isFirstSlide ? (
            <div className="w-6 hidden group-hover:block" />
          ) : (
            <FaChevronLeft
              onClick={prevSlide}
              className="w-6 h-6 mt-[10%] cursor-pointer hidden group-hover:block"
              // className="w-6 h-6 absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-20 cursor-pointer hidden group-hover:block"
            />
          )}

          <div className="m-auto px-4 flex">
            <div className="grid grid-flow-col gap-x-6">
              {slides[currentIndex].image.map((images, index) => {
                return (
                  <Image
                    key={index}
                    src={images.src}
                    width={images.width}
                    height={images.height}
                    alt={slides[currentIndex].title}
                    className="rounded-2xl"
                  />
                );
              })}
            </div>
          </div>

          {isLastSlide ? (
            <div className="w-6 hidden group-hover:block" />
          ) : (
            <FaChevronRight
              onClick={nextSlide}
              className="w-6 h-6 mt-[10%] cursor-pointer hidden group-hover:block"
              // className="w-6 h-6 absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-20 cursor-pointer hidden group-hover:block"
            />
          )}
        </div>

        <h3 className="mt-6 py-4 text-2xl font-semibold">
          {slides[currentIndex].title}
        </h3>
        <p className="text-lg">{slides[currentIndex].text}</p>
      </div>
    </div>
  );
}
