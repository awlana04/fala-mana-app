'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

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

  return (
    <div className="w-full p-10 text-white">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        init={false}
        navigation={true}
        freeMode={{ enabled: true, sticky: true, minimumVelocity: 4 }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, FreeMode]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <div className="w-fit h-fit p-6 px-10 bg-slate-600 duration-500">
              <div className="flex">
                <div className="m-auto px-4 flex">
                  {slide.image.map((image, index) => (
                    <div>
                      <Image
                        key={image.alt}
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="rounded-2xl px-4"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="mt-2 py-4 text-2xl font-semibold">
                {slide.title}
              </h3>
              <p className="text-lg pb-4">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
