'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PanInfo, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiCircle } from 'react-icons/fi';
import parse from 'html-react-parser';

import feminismo from '../../../public/background.jpg';
import feminismo2 from '../../../public/feminismo2.jpeg';
import violencia from '../../../public/violencia.jpg';
import penha from '../../../public/penha.jpg';
import carolina from '../../../public/carolina-maria-de-jesus.jpeg';
import katherine from '../../../public/katherine_johnson.jpg';

export default function Start() {
  const slides = [
    {
      title: 'Formas de Violência',
      image: [{ src: violencia, alt: 'Violência', width: 400, height: 300 }],
      text: 'Nenhuma violência ocorre de forma isolada, geralmente, uma sempre vem acompanhada de alguma outra, justamente para que o agressor possa manter a vítima sob o seu completo domínio.  O ambiente doméstico não é o único lugar em que esses ataques podem ocorrer, os ambientes públicos, de trabalho e acadêmicos também não estão imunes. De acordo com o <strong>artigo 7º, inciso I ao V, da Lei nº 11.340/2006 (Lei Maria da Penha)</strong>, estão previstas 5 formas de violência contra a mulher, são elas: <br /> <br /><strong>Física</strong>, é todo e qualquer ato que venha pôr a integridade física da mulher em risco; <strong>Psicológica</strong>, são falas, gritos e atitudes com a intenção de fragilizar, desestabilizar e danificar o emocional dessa mulher; <strong>Moral</strong>, tudo aquilo que é feito ou dito de forma caluniosa e difamatória contra a vítima; <strong>Sexual</strong>, além de estar ligada ao fato de obrigar uma mulher a manter relações sexuais contra a sua vontade (estupro), refere-se a comportamentos que causem a ela desconforto, dor ou repulsa durante o ato sexual e <strong>Patrimonial</strong>, é entendida como atos que visam causar prejuízos materiais e financeiros à vítima, a deixando totalmente dependente de seu abusador.',
    },
    {
      title:
        'As Políticas Públicas de Enfrentamento à Violência Contra as Mulheres no Brasil',
      image: [{ src: penha, alt: 'penha', width: 400, height: 300 }],
      text: 'No ano de 2011, ficou instituída a <strong>Política Nacional de Enfrentamento à Violência contra as Mulheres</strong> a partir da Secretaria de Políticas para as Mulheres, no qual o então Governo dedicou-se a esclarecer, instruir e informar a população a respeito do tema explicita e didaticamente como uma de suas preocupações e prioridades. O documento reúne resultados de pesquisas e números da época a respeito das violências contra as mulheres, bem como instrui seus meios de atuação. Entre eles estão: <br /> <br />Centros de Referência de Atendimento à Mulher, Núcleos de Atendimento à Mulher, Casas-Abrigo, Casas de Acolhimento Provisório, Delegacias Especializadas de Atendimento à Mulher (DEAMs), Núcleos ou Postos de Atendimento à Mulher nas Delegacias Comuns, Polícia Civil e Militar, Instituto Médico Legal, Defensorias da Mulher, Juizados de Violência Doméstica e Familiar, Central de Atendimento à Mulher – Ligue 180, Ouvidoria da Mulher, Serviços de Saúde voltados para o atendimento dos casos de violência sexual e doméstica, Posto de Atendimento Humanizado nos Aeroportos e Núcleo da Mulher da Casa do Migrante.',
    },
    {
      title:
        'Educação Como Instrumento de Emancipação e Empoderamento Feminino',
      image: [{ src: feminismo2, alt: 'Feminismo', width: 250, height: 50 }],
      text: 'Através da educação a mulher adquire confiança, conhecimento e habilidade para poder participar ativamente da vida social, econômica e política. A mesma também consolida a formação da cidadania, consciência crítica e direitos das mulheres. Historicamente, meninas e mulheres encontram muitas barreiras para terem acesso e uma boa educação, pois durante muito tempo, foram proibidas da educação formal, a qual era concebida aos homens, sendo destinadas apenas para o matrimônio e a maternidade. A história do Brasil mostra que a educação foi uma das principais bandeiras das mulheres que lutam pela emancipação, em uma sociedade fortemente patriarcal, escravista e oligárquica, na qual a mulher mesmo pertencendo à elite, tinha um papel subalterno e de submissão. <br /> <br />Uma das pioneiras por essa luta, foi a escritora Nísia Floresta (Pseudônimo de Dionísia Gonçalves Pinto), lutou pelos direitos das mulheres, dos indígenas e dos escravizados, abrindo a primeira escola para meninas no Brasil em 1836. Nísia tornou-se a percussora do feminismo no Brasil, é das mais importantes intelectuais do seu tempo.',
    },
    {
      title: 'Os Desafios e Conquistas das Mulheres Negras na Sociedade',
      image: [
        {
          src: carolina,
          alt: 'Fotografia da escritora negra brasileira, Carolina Maria de Jesus, autora do livro, Quarto de Despejo: Diário de uma favelada.',
          width: 400,
          height: 300,
        },
        {
          src: katherine,
          alt: 'Fotografia de Katherine Johnson, matemática astronomica negra da Nasa que contribuiu demasiadamente para a operação do Apollo 11.',
          width: 300,
          height: 80,
        },
      ],
      text: 'Atualmente, o mundo do trabalho e a forma como estrutura-se a sociedade contemporânea alimentam o racismo, o patriarcado e, consequentemente, os imbróglios na ascensão das mulheres negras, em que o sistema capitalista perpetua a divisão sexual e racial do trabalho, beneficiando os detentores do poder e os intelectuais a serviço das classes dominantes. Na sociedade brasileira atual, os indivíduos brancos continuam beneficiando-se do entorno, enquanto a população afrodescendente segue reivindicando uma sociedade mais igualitária e  à procura de garantia dos direitos como cidadão. <br /> <br /> No livro intitulado Quarto de Despejo: diário de uma favelada, Carolina Maria de Jesus, uma mulher negra que obteve apenas 2 anos de estudos formalmente, encontrou na escrita a maneira de fugir da invisibilidade social vivenciada pela mesma há anos. Além disto, durante a guerra fria, a NASA em disputa com URSS na corrida espacial deve um nome que contribuiu demasiadamente para o sucesso do Apollo 11, a matemática e física afro-americana Katharine Johnson, em que a mesma recebeu diversas premiações por sua precisão na navegação astronômica.',
    },
    {
      title: 'Movimentos Sociais e a Defesa dos Direitos das Mulheres',
      image: [{ src: feminismo, alt: 'Feminismo', width: 300, height: 200 }],
      text: '<strong>Movimento Feminista:</strong> Surgem como forma das mulheres irem ás ruas lutar pelos seus direitos. Este movimento já fez várias conquistas, como a fundação da primeira escola para meninas no Brasil pela ativista Nísia Floresta, além do sufrágio feminino, delegacia da mulher e a criação da lei Maria da Penha. <br /> <br /><strong>Movimento das Mulheres Indígenas:</strong>  atuação das mulheres indígenas em prol da superação das desigualdades e da defesa dos direitos dos seus povos e seus territórios têm se transformado. Elas passaram a assumir posição de liderança e a participar em processos eleitorais, sendo candidatas a cargos do Executivo e do Legislativo, ocupando cada vez mais espaços públicos e de decisão. <br /> <br /><strong>Movimento Feminino Negro:</strong> O movimento das mulheres negras denunciava tanto atitudes machistas dentro do ativismo negro, quanto as desigualdades e o racismo que permeavam o movimento feminino. Seja em partidos políticos, coletivos de mulheres, produções acadêmicas, elas apontavam a necessidade não só do fim do racismo, como também do sexismo e capitalismo.',
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
    <div className="p-10 max-sm:p-3 max-lg:p-4 max-2xl:p-6 text-white">
      <div className="p-6 max-2xl:p-3 max-lg:p-4 px-12 max-sm:px-5 max-lg:px-8 max-2xl:px-8 bg-red-600 duration-500 overflow-hidden rounded-3xl cursor-grab">
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
                className="w-12 h-12 mt-[15%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
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
                      className="opacity-1 max-lg:opacity-0 max-sm:w-44 max-2xl:w-80 max-sm:h-28 max-2xl:h-44 rounded-lg pointer-events-none"
                    />
                  );
                })}
              </div>
            </div>

            {isLastSlide ? (
              <div className="w-12 h-12 mt-[15%]">
                <Link href="/">
                  <button className="text-black font-medium text-xl max-md:text-base max-lg:text-xl hover:underline">
                    Voltar
                  </button>
                </Link>
              </div>
            ) : (
              <FiChevronRight
                onClick={nextSlide}
                className="w-12 h-12 mt-[15%] cursor-pointer text-black hover:bg-black hover:text-red-600 rounded-full duration-500"
              />
            )}
          </div>

          <h3 className="mt-4 max-2xl:mt-2 py-4 max-md:py-2 text-2xl max-md:text-2xl max-lg:text-4xl font-semibold">
            {slides[currentIndex].title}
          </h3>

          <p className="text-xl max-lg:text-3xl">
            {parse(slides[currentIndex].text)}
          </p>

          <footer className="mt-5 max-sm:mt-2 max-2xl:mt-4 px-4 flex justify-center">
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
