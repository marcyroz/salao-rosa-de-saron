import Image from 'next/image';
import CardContainer from '@/app/_components/CardContainer';
import bg1 from '../../../../public/asset-5.png';
import image from '../../../../public/reasons.png';

const Reasons = () => {
    return (
        <section className='bg-[#B97271] w-full h-[700px] lg:h-[600px] relative'>

            <div className='opacity-70 lg:opacity-100'>
                <Image
                    src={image}
                    alt='reason-image'
                    className='absolute w-[300px] lg:w-[310px] right-2 sm:right-10 bottom-0 z-20 object-contain'
                    data-aos="zoom-in"
                    data-aos-delay="300"
                />
            </div>


            <div className='w-full h-full relative flex items-center justify-center overflow-hidden'>
                <Image
                    src={bg1}
                    alt='background-image-5'
                    className='absolute right-0 -bottom-2 z-0 w-[300px] lg:w-[370px] opacity-60 lg:opacity-100'
                />

                <div className='flex justify-center items-center w-full h-full container max-w-[960px] px-6 sm:px-10 z-30'>
                    <div className='flex flex-col space-y-10 z-30 w-full'>
                        <h2 className='font-bold text-3xl sm:text-[35px] text-center' data-aos="fade-right">
                            Porque escolher o ROSA DE SARON?
                        </h2>

                        <div className='space-y-6' data-aos="fade-right" data-aos-delay="300">
                            <CardContainer radius={25} padding={20} color='bg-white' shadow>
                                <div className='px-5'>
                                    <span className='text-[#B97271] text-lg sm:text-2xl'>
                                        Parcelamos seu procedimento em até 3x sem juros
                                    </span>
                                </div>
                            </CardContainer>
                            <CardContainer radius={25} padding={20} color='bg-white' shadow>
                                <div className='px-5'>
                                    <span className='text-[#B97271] text-lg sm:text-2xl'>
                                        Diversidade de serviço, desde esmaltação à luzes
                                    </span>
                                </div>
                            </CardContainer>
                            <CardContainer radius={25} padding={20} color='bg-white' shadow>
                                <div className='px-5'>
                                    <span className='text-[#B97271] text-lg sm:text-2xl'>
                                        Contamos com mais de 8 profissionais para te atender
                                    </span>
                                </div>
                            </CardContainer>
                            <CardContainer radius={25} padding={20} color='bg-white' shadow>
                                <div className='px-5'>
                                    <span className='text-[#B97271] text-lg sm:text-2xl'>
                                        Espaço aconchegante e moderno, para seu conforto
                                    </span>
                                </div>
                            </CardContainer>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Reasons;
