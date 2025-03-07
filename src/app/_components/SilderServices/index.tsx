import Image from "next/image";
import line from "../../../../public/line-1.png";

const Services = () => {
  return (
    <section className="relative w-full h-[830px] z-0 bg-[white] overflow-hidden">
      <div className="absolute flex flex-col items-center justify-end space-y-10 z-10 top-[70px] sm:top-[120px] mr-6 sm:mr-10 px-6 w-full max-w-[1700px]">
        <Image src={line} alt="line-image" className="w-[170px] lg:w-[350px] h-0.5"/>
        <h2 className="text-[#B97271] font-bold text-3xl lg:text-[35px] text-center" data-aos="flip-up">
            Nossos Serviços Mais Procurados
        </h2>
        <Image src={line} alt="line-image" className="w-[170px] lg:w-[350px] h-0.5 "/>
      </div>
    </section>
  );
};
export default Services;
