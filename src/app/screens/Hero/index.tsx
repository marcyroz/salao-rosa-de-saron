import Image from 'next/image';
import image from '../../../../public/hero.png';
import CardContainer from '@/app/_components/CardContainer';
import ScheduleButton from '@/app/_components/ScheduleButton';
import bg1 from '../../../../public/asset-1.png';
import bg2 from '../../../../public/asset-2.png';
import bg3 from '../../../../public/asset-3.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[830px] bg-[#C3A3A3] overflow-hidden">

            <div className="absolute flex flex-col items-end justify-end gap-6 z-10 top-[70px] sm:top-[120px] right-0 px-6 sm:pr-10 lg:pr-20 max-w-[90%] sm:max-w-[580px] lg:max-w-[800px] ml-auto">
                <h1 className="text-3xl lg:text-5xl sm:text-4xl text-end" data-aos="fade-left">
                    <b className="font-bold">O melhor salão de beleza da Região: </b>Salão Rosa de Saron, vem realçar sua beleza!
                </h1>
                <div data-aos="zoom-in">
                    <ScheduleButton />
                </div>
            </div>

            <Image src={bg2} alt='background-image-1' className='z-0 absolute -left-4 bottom-7 h-[500px] w-[200px] lg:h-[700px] lg:w-[300px]' />
            <Image src={bg1} alt='background-image-2' className="z-0 absolute left-[-16px] lg:left-[90px] h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]" />
            <Image src={bg3} alt='background-image-3' className='z-0 absolute right-0 bottom-0 h-[500px] w-[300px] lg:h-[700px] lg:w-[450px]' />

            <div className='absolute z-10 bottom-12' data-aos="zoom-in" data-aos-delay="100">
                <Image src={image} alt='Sirlei Santos' className='object-cover lg:hidden' height={400} quality={100} priority />
            </div>

            <div className='w-full items-end justify-end lg:hidden'>
                <div className="absolute right-5 bottom-[200px] sm:right-[80px] sm:bottom-[240px] z-10" data-aos='fade-right' data-aos-delay='200'>
                    <CardContainer opacity='opacity-90'>
                        <div className="flex justify-end items-center h-full w-full">
                            <p className="text-sm sm:text-lg">
                                Há <span className="font-bold">mais de 14 anos</span> no ramo
                                <br />
                                <span className="font-bold">transformando vidas</span>
                                <br />
                                através da estética
                            </p>
                        </div>
                    </CardContainer>
                </div>

                <div className="absolute right-5 sm:right-[130px] bottom-[70px] z-10" data-aos='fade-right' data-aos-delay='300'>
                    <CardContainer opacity='opacity-90'>
                        <div className="flex justify-end items-center h-full w-full">
                            <p className="text-sm sm:text-lg">
                                Ganhador do prêmio <span className="font-bold">Top Of Mind, </span> um
                                <br />
                                reconhecimento para
                                <span className="font-bold"> empresas e</span>
                                <br />
                                <span className="font-bold">profissionais que se destacam</span> em seus
                                <br />
                                respectivos segmentos
                            </p>
                        </div>
                    </CardContainer>
                </div>
            </div>


            <div className="hidden lg:block" >
                <div className="absolute left-2 bottom-8 w-auto z-10" data-aos="zoom-in" data-aos-delay="100">
                    <Image
                        src={image}
                        alt="Hero"
                        className="object-contain"
                        quality={100}
                        height={620}
                    />
                </div>

                <div className="absolute left-[240px] bottom-[260px] z-0" data-aos='fade-right' data-aos-delay='200'>
                    <CardContainer opacity="opacity-80" width="500px" height="145px">
                        <div className="flex justify-end items-center h-full w-full">
                            <p className="text-lg">
                                Há <span className="font-bold">mais de 14 anos</span> no ramo
                                <br />
                                <span className="font-bold">transformando vidas</span>
                                <br />
                                através da estética
                            </p>
                        </div>
                    </CardContainer>
                </div>

                <div className="absolute left-[330px] bottom-[70px] z-0" data-aos='fade-right' data-aos-delay='300'>
                    <CardContainer opacity="opacity-80" width="524px" height="145px">
                        <div className="flex justify-end items-center h-full w-full">
                            <p className="text-lg">
                                Ganhador do prêmio <span className="font-bold">Top Of Mind, </span> um
                                <br />
                                reconhecimento para
                                <span className="font-bold">empresas e</span>
                                <br />
                                <span className="font-bold">profissionais que se destacam</span> em seus
                                <br />
                                respectivos segmentos
                            </p>
                        </div>
                    </CardContainer>
                </div>
            </div>

        </section >
    );
};

export default Hero;
