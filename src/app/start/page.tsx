'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PanInfo, delay, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';

import feminismo from '../../../public/background.jpg';
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
          width: 500,
          height: 400,
        },
        {
          src: feminismo2,
          alt: 'Feminismo',
          width: 250,
          height: 50,
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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const swipeSlide = (event: any, info: PanInfo) => {
    const initialDrag = info.point.x;
    const finalDrag = info.point.x + info.offset.x;

    if (initialDrag > finalDrag) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="p-16 max-md:p-3 max-lg:p-4 max-2xl:p-6 text-white">
      <div className="p-6 max-2xl:p-3 max-lg:p-4 px-12 max-md:px-5 max-lg:px-8 max-2xl:px-8 bg-red-600 duration-500 overflow-hidden rounded-3xl cursor-grab">
        <motion.div
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          dragElastic={0.5}
          dragPropagation={true}
          onDragEnd={swipeSlide}
          dragTransition={{ bounceStiffness: 800, bounceDamping: 15 }}
        >
          <div className="flex">
            {isFirstSlide ? (
              <div />
            ) : (
              <FiChevronLeft
                onClick={prevSlide}
                className="w-12 h-12 mt-[20%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
              />
            )}

            <div className="m-auto px-2 flex">
              <div className="grid grid-flow-col gap-x-6 max-md:gap-x-2">
                {slides[currentIndex].image.map((images, index) => {
                  return (
                    <Image
                      key={index}
                      src={images.src}
                      width={images.width}
                      height={images.height}
                      alt={slides[currentIndex].title}
                      className="max-sm:w-44 max-2xl:w-80 max-sm:h-28 max-2xl:h-44 rounded-lg pointer-events-none"
                    />
                  );
                })}
              </div>
            </div>

            {isLastSlide ? (
              <div className="w-12 h-12 mt-[20%]">
                <Link href="/">
                  <button className="text-black font-medium text-xl max-md:text-base max-lg:text-xl hover:underline">
                    Voltar
                  </button>
                </Link>
              </div>
            ) : (
              <FiChevronRight
                onClick={nextSlide}
                className="w-12 h-12 mt-[20%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
              />
            )}
          </div>

          <h3 className="mt-6 max-md:mt-4 max-2xl:mt-2 py-4 max-md:py-2 text-2xl max-md:text-2xl max-lg:text-4xl font-semibold">
            {slides[currentIndex].title}
          </h3>
          <p className="text-lg max-md:text-lg max-lg:text-3xl">
            {slides[currentIndex].text}
          </p>

          <footer className="mt-8 max-md:mt-2 max-2xl:mt-4 px-4 flex justify-center">
            {slides.map((slide, slideIndex) => {
              return (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="px-1 cursor-pointer"
                >
                  <FiCircle
                    className="w-5 h-5 text-black"
                    fill={currentIndex === slideIndex ? '#000000' : 'none'}
                  />
                </div>
              );
            })}
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
