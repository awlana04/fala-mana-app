'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';

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
      image: [{ src: violencia, alt: 'Violência', width: 600, height: 500 }],
      text: 'Estão previstos cinco tipos de violência doméstica e familiar contra a mulher na Lei Maria da Penha: física, psicológica, moral, sexual e patrimonial − Capítulo II, art. 7º, incisos I, II, III, IV e V.',
    },
    {
      title: 'Lei Maria da Penha',
      image: [{ src: penha, alt: 'penha', width: 600, height: 500 }],
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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full p-10 text-white">
      <div className="w-fit h-fit p-6 px-10 bg-slate-600 duration-500">
        <div className="flex">
          {isFirstSlide ? (
            <div className="w-8" />
          ) : (
            <FiChevronLeft
              onClick={prevSlide}
              className="w-8 h-8 mt-[10%] cursor-pointer hover:bg-white hover:text-black rounded-2xl duration-500"
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
                    className="rounded-2xl duration-100000"
                  />
                );
              })}
            </div>
          </div>

          {isLastSlide ? (
            <div className="w-8 h-8 mt-[10%]">
              <Link href="/">
                <button className="text-lg hover:underline">Voltar</button>
              </Link>
            </div>
          ) : (
            <FiChevronRight
              onClick={nextSlide}
              className="w-8 h-8 mt-[10%] cursor-pointer hover:bg-white hover:text-black rounded-2xl duration-500"
              // className="w-6 h-6 absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-20 cursor-pointer hidden group-hover:block"
            />
          )}
        </div>

        <div className="p-4 flex justify-center">
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="px-1 cursor-pointer"
              >
                <FiCircle
                  className="w-4 h-4"
                  fill={currentIndex === slideIndex ? '#FFFFFF' : 'none'}
                />
              </div>
            );
          })}
        </div>

        <h3 className="mt-2 py-4 text-2xl font-semibold">
          {slides[currentIndex].title}
        </h3>
        <p className="text-lg">{slides[currentIndex].text}</p>
      </div>
    </div>
  );
}
