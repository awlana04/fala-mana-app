'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PanInfo, motion } from 'framer-motion';
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
    <body className="w-full h-full p-16 text-white">
      <div className="w-fit h-fit p-6 px-12 bg-red-600 duration-500 overflow-hidden rounded-3xl">
        <motion.div
          drag="x"
          dragDirectionLock
          dragConstraints={{ left: 0, right: 0 }}
          dragMomentum={false}
          dragElastic={0.5}
          dragPropagation={true}
          onDragEnd={swipeSlide}
          dragTransition={{ bounceStiffness: 800, bounceDamping: 15 }}
          className="cursor-grab"
        >
          <motion.div className="flex">
            {isFirstSlide ? (
              <div />
            ) : (
              <FiChevronLeft
                onClick={prevSlide}
                className="w-12 h-12 mt-[20%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
              />
            )}

            <div className="m-auto px-4 flex">
              <motion.div className="grid grid-flow-col gap-x-6">
                {slides[currentIndex].image.map((images, index) => {
                  return (
                    <Image
                      key={index}
                      src={images.src}
                      width={images.width}
                      height={images.height}
                      alt={slides[currentIndex].title}
                      className="rounded-lg duration-1000"
                    />
                  );
                })}
              </motion.div>
            </div>

            {isLastSlide ? (
              <motion.div className="w-12 h-12 mt-[20%]">
                <Link href="/">
                  <button className="text-black font-medium text-xl hover:underline">
                    Voltar
                  </button>
                </Link>
              </motion.div>
            ) : (
              <FiChevronRight
                onClick={nextSlide}
                className="w-12 h-12 mt-[20%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
              />
            )}
          </motion.div>

          <h3 className="mt-6 py-4 text-2xl font-semibold">
            {slides[currentIndex].title}
          </h3>
          <p className="text-lg">{slides[currentIndex].text}</p>

          <footer className="mt-8 px-4 flex justify-center">
            {slides.map((slide, slideIndex) => {
              return (
                <motion.div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="px-1 cursor-pointer"
                >
                  <FiCircle
                    className="w-5 h-5 text-black"
                    fill={currentIndex === slideIndex ? '#000000' : 'none'}
                  />
                </motion.div>
              );
            })}
          </footer>
        </motion.div>
      </div>
    </body>
  );
}
