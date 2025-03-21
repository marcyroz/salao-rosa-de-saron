"use client";

import Image from "next/image";
import line from "../../../../public/line-1.png";
import bronzeImage from "../../../../public/carouselPhotos/bronze.png";
import dia_da_noivaImage from "../../../../public/carouselPhotos/dia_da_noiva.png";
import luzesImage from "../../../../public/carouselPhotos/luzes.png";
import manicureImage from "../../../../public/carouselPhotos/manicure.png";
import mechasImage from "../../../../public/carouselPhotos/mechas.png";
import progressivaImage from "../../../../public/carouselPhotos/progressiva.png";
import sobrancelhaImage from "../../../../public/carouselPhotos/sobrancelha.png";
import emblaCarouselImage from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import CardContainer from '@/app/_components/CardContainer';
import ScheduleButton from '@/app/_components/ScheduleButton';

/* Array dos services*/
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
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="relative w-full h-[830px] z-0 bg-white overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute flex flex-col items-center justify-end space-y-10 z-10 top-[70px] sm:top-[120px] left-1/2 -translate-x-1/2 w-full max-w-[1700px] px-4">
        {/* Titulo do service*/}
        <div data-aos="flip-up">
          <Image
            src={line}
            alt="line-image"
            className="w-[170px] lg:w-[350px] h-0.5"
          />
        </div>
        <h2
          className="text-[#B97271] font-bold text-3xl lg:text-[35px] text-center"
          data-aos="flip-up"
        >
          Nossos Serviços Mais Procurados
        </h2>
        <div data-aos="flip-up">
          <Image
            src={line}
            alt="line-image"
            className="w-[170px] lg:w-[350px] h-0.5 "
          />
        </div>
        {/* Carrossel de imagens*/}
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
                    <article className="flex flex-col h-full mt-1 cursor-pointer select-none">
                      <div className="mb-4 flex items-center ml-1">
                        <Image
                          src={item.image}
                          alt="carousel photos select-none"
                        />
                      </div>
                      <div className="mb-4">
                        <h2 className="flex bg-[white] text-[#B97271] font-semibold items-center justify-center p-3 rounded-full opacity-80 drop-shadow-lg z-10 font-poppins text-[20px] leading-[100%] tracking-[0%] select-none">
                          {item.title}
                        </h2>
                      </div>
                      <div className="text-center font-medium select-none">
                        <h3>{item.description}</h3>
                      </div>
                    </article>
                  </CardContainer>
                </div>
              ))}
            </div>
          </div>
          <button
            className="
              flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 bg-[#ececec] drop-shadow-lg rounded-full
              -left-2 w-20 h-20
              min-[640px]:-left-2 min-[640px]:w-20 min-[640px]:h-20         
              min-[730px]:-left-2 min-[730px]:w-20 min-[730px]:h-20         
              min-[1000px]:-left-4 min-[1000px]:w-16 min-[1000px]:h-16       
              min-[1600px]:-left-6 min-[1600px]:w-12 min-[1600px]:h-12   
              min-[1700px]:-right-9 min-[1700px]:w-12 min-[1700px]:h-12       
            "
            onClick={scrollPrev}
          >
            <ChevronLeft
              className="
                w-10 h-10 text-[#B97271]
                min-[1000px]:w-8 min-[1000px]:h-8
                min-[1600px]:w-6 min-[1600px]:h-6
              "
            />
          </button>

          <button
            className="
              flex items-center justify-center absolute top-1/2 -translate-y-1/2 z-10 bg-[#ececec] drop-shadow-lg rounded-full
              -right-2 w-20 h-20
              min-[640px]:-right-2 min-[640px]:w-20 min-[640px]:h-20         
              min-[730px]:-right-2 min-[730px]:w-20 min-[730px]:h-20         
              min-[1000px]:-right-4 min-[1000px]:w-16 min-[1000px]:h-16       
              min-[1600px]:-right-6 min-[1600px]:w-12 min-[1600px]:h-12       
              min-[1700px]:-right-9 min-[1700px]:w-12 min-[1700px]:h-12       
            "
            onClick={scrollNext}
          >
            <ChevronRight
              className="
                w-10 h-10 text-[#B97271]
                min-[1000px]:w-8 min-[1000px]:h-8
                min-[1600px]:w-6 min-[1600px]:h-6
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;
