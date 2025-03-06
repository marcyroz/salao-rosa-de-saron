import Image from 'next/image';
import hero from '../../../../public/hero.png';
import CardContainer from '../CardContainer';
import ScheduleButton from '../ScheduleButton';
import bg1 from '../../../../public/asset-1.png';
import bg2 from '../../../../public/asset-2.png';
import bg3 from '../../../../public/asset-3.png';

const Hero = () => {
    return (
        <section className="relative w-full h-[830px] z-0 bg-[#C3A3A3] overflow-hidden">

            <div className="absolute flex flex-col items-end justify-end gap-6 z-10 top-[120px] sm:mr-10 px-6 w-full max-w-[1700px]">
                <h1 className="text-3xl lg:text-5xl md:text-4xl text-end" data-aos="fade-left">
                    <b className="font-bold">O melhor salão de beleza da <br />Região: </b>Salão Rosa de Saron, <br />vem realçar sua beleza!
                </h1>
                <div data-aos="zoom-in">
                    <ScheduleButton />
                </div>
            </div>

            <Image src={bg2} alt='background-image-1' className='z-1 absolute -left-4 bottom-7 h-[500px] w-[200px] lg:h-[700px] lg:w-[300px]' />
            <Image src={bg1} alt='background-image-2' className="z-0 absolute left-[-16px] lg:left-[90px] h-[300px] w-[300px] lg:h-[450px] lg:w-[450px]" />
            <Image src={bg3} alt='background-image-3' className='z-1 absolute right-0 bottom-0 h-[500px] w-[300px] lg:h-[700px] lg:w-[450px]' />

            <div className='absolute z-1 bottom-12' data-aos="zoom-in" data-aos-delay="300">
                <Image src={hero} alt='Sirlei Santos' className='object-cover lg:hidden' height={400} quality={100} priority />
            </div>

            <div className="absolute left-[240px] bottom-[200px] z-1" data-aos='fade-right' data-aos-delay='600'>
                <CardContainer >
                    <div className="flex justify-end items-center h-full w-full">
                        <p className="text-sm">
                            Há <span className="font-bold">mais de 14 anos</span> no ramo
                            <br />
                            <span className="font-bold">transformando vidas</span>
                            <br />
                            através da estética
                        </p>
                    </div>
                </CardContainer>
            </div>

            <div className="absolute left-[100px] bottom-[70px] z-1" data-aos='fade-right' data-aos-delay='1000'>

                <CardContainer>
                    <div className="flex justify-end items-center h-full w-full">
                        <p className="text-sm">
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

            <div className="hidden lg:block" >
                <div className="absolute left-2 bottom-8 w-auto z-10" data-aos="zoom-in" data-aos-delay="300">
                    <Image
                        src={hero}
                        alt="Hero"
                        className="object-contain"
                        quality={100}
                        height={620}
                    />
                </div>

                <div className="absolute left-[240px] bottom-[260px] z-1" data-aos='fade-right' data-aos-delay='600'>
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

                <div className="absolute left-[330px] bottom-[70px] z-1" data-aos='fade-right' data-aos-delay='1000'>
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
