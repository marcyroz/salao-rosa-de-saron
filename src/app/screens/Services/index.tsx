"use client";

import Image from "next/image";
import line from "../../../../public/assetsImages/asset-8.png";
import bronzeImage from "../../../../public/carouselPhotos/bronze.png";
import dia_da_noivaImage from "../../../../public/carouselPhotos/dia-da-noiva.png";
import luzesImage from "../../../../public/carouselPhotos/luzes.png";
import manicureImage from "../../../../public/carouselPhotos/manicure.png";
import mechasImage from "../../../../public/carouselPhotos/mechas.png";
import progressivaImage from "../../../../public/carouselPhotos/progressiva.png";
import sobrancelhaImage from "../../../../public/carouselPhotos/sobrancelha.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import CardContainer from '@/app/_components/CardContainer';

const services = [
  {
    image: dia_da_noivaImage,
    title: "Dia da noiva",
    description:
      "Oferecemos um pacote completo para que você se sinta deslumbrante no momento mais importante da sua vida. Maquiagem, penteado e cuidados exclusivos para tornar seu casamento ainda mais inesquecível!",
  },
  {
    image: sobrancelhaImage,
    title: "Sobrancelha henna",
    description:
      "Realce sua beleza com sobrancelhas perfeitamente definidas! A henna é a escolha ideal para corrigir falhas e dar mais expressão ao seu olhar, garantindo um efeito natural e duradouro.",
  },
  {
    image: manicureImage,
    title: "Pé e mão",
    description:
      "Suas mãos e pés merecem um cuidado especial! Deixe suas unhas impecáveis com nosso serviço de manicure e pedicure, que une beleza e saúde para você arrasar no dia a dia.",
  },
  {
    image: luzesImage,
    title: "Luzes",
    description:
      "As luzes são perfeitas para quem deseja um visual iluminado e cheio de estilo! Com técnicas profissionais, garantimos um efeito natural e harmonioso para valorizar seu cabelo.",
  },
  {
    image: progressivaImage,
    title: "Progressiva",
    description:
      "Cabelos lisos, alinhados e sem frizz por muito mais tempo! A progressiva proporciona fios sedosos, hidratados e com brilho intenso, garantindo praticidade no dia a dia.",
  },
  {
    image: bronzeImage,
    title: "Bronze",
    description:
      "Quer aquela pele dourada e radiante o ano todo? O bronzeamento artificial é seguro e proporciona um tom uniforme e natural, realçando sua beleza de forma saudável. Temos diversas opções disponíveis!",
  },
  {
    image: mechasImage,
    title: "Mechas",
    description:
      "Dê mais luz e movimento aos seus cabelos com mechas personalizadas! Ilumine seu visual com técnicas modernas que valorizam sua cor natural e deixam seu cabelo ainda mais sofisticado.",
  },
];
const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 1 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section id="services" className="relative w-full h-[830px] z-0 bg-[#F1F1F1] overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute flex flex-col items-center justify-end space-y-10 z-10 top-[70px]  left-1/2 -translate-x-1/2 w-full max-w-[1700px] px-4">

        <div data-aos="flip-up">
          <Image
            src={line}
            alt="linha do título"
            className="w-[170px] lg:w-[350px] h-0.5"
          />
        </div>
        <h2
          className="text-[#B97271] font-semibold text-3xl lg:text-[35px] text-center"
          data-aos="flip-up"
        >
          Nossos Serviços Mais Procurados
        </h2>

        <div data-aos="flip-up">
          <Image
            src={line}
            alt="linha do título"
            className="w-[170px] lg:w-[350px] h-0.5"
          />
        </div>

        <div className="relative mt-8 w-full" data-aos="flip-up">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex justify-items-center">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex-[0_0_100%] min-w-0 px-3
                    min-[700px]:flex-[0_0_calc(100%/2)]    
                    min-[930px]:flex-[0_0_calc(100%/3)]   
                    min-[1300px]:flex-[0_0_calc(100%/4)]   
                    min-[1600px]:flex-[0_0_calc(100%/5)]   
                  "
                >
                  <CardContainer width="292px" height="488px" auto>
                    <article className="flex flex-col h-full mt-1 select-none">
                      <div className="mb-4 flex items-center ml-1">
                        <Image
                          src={item.image}
                          alt={item.title}
                        />
                      </div>
                      <div className="mb-4">
                        <h2 className="flex bg-[white] text-[#B97271] font-semibold items-center justify-center p-3 rounded-full opacity-80 drop-shadow-lg z-10 font-poppins text-[20px] leading-[100%] tracking-[0%] select-none">
                          {item.title}
                        </h2>
                      </div>
                      <div className="text-center font-medium select-none">
                        <p>{item.description}</p>
                      </div>
                    </article>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="relative h-full w-full max-w-[1700px] mx-auto">
              <button
                className="
        flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 bg-[#ececec] cursor-pointer
        drop-shadow-lg rounded-full pointer-events-auto
        left-3 w-16 h-16   
        sm:left-4 sm:w-14 sm:h-14
        md:-left-2 md:w-16 md:h-16
        lg:-left-2 lg:w-20 lg:h-20
        xl:-left-6 xl:w-24 xl:h-24
        2xl:-left-10 2xl:w-28 2xl:h-28
      "
                onClick={scrollPrev}
              >
                <ChevronLeft
                  className="
          w-8 h-8 text-[#B97271]  
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
        "
                />
              </button>

              <button
                className="
        flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 bg-[#ececec] cursor-pointer
        drop-shadow-lg rounded-full pointer-events-auto
        right-3 w-16 h-16  
        sm:right-4 sm:w-14 sm:h-14
        md:-right-2 md:w-16 md:h-16
        lg:-right-2 lg:w-20 lg:h-20
        xl:-right-6 xl:w-24 xl:h-24
        2xl:-right-10 2xl:w-28 2xl:h-28
      "
                onClick={scrollNext}
              >
                <ChevronRight
                  className="
          w-8 h-8 text-[#B97271]  
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          lg:w-12 lg:h-12
          xl:w-14 xl:h-14
        "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
