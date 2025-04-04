import Image from 'next/image';
import ScheduleButton from '@/app/_components/ScheduleButton';
import bg1 from '../../../../public/assetsImages/asset-4.png';

const About = () => {
    return (
        <section id='about' className='relative w-full h-[935px] sm:h-[1050px] bg-[#F1F1F1] overflow-hidden flex items-center justify-center pt-[90px] sm:pt-[150px] pb-[80px]'>

            <Image src={bg1} alt='imagem de fundo' className='absolute z-0 right-0 bottom-0 sm:bottom-10 w-[300px] sm:w-[500px]' />

            <div className='flex flex-col mx-auto text-[#B97271] space-y-15 sm:space-y-20 container max-w-[960px] px-6 sm:px-10 z-10'>
                <h2 className='font-bold text-3xl lg:text-[35px]' data-aos="fade-left">Sobre o ROSA DE SARON: O melhor salão da região</h2>

                <div className='space-y-5 max-w-[600px]'>
                    <p className='text-[20px] sm:text-2xl leading-8 sm:leading-13' data-aos="fade-left">O<span className='font-semibold italic'> SALÃO ROSA DE SARON</span> é um refúgio de beleza e transformação com<span className='font-semibold italic'> mais de 14 anos de experiência no ramo.</span> Aqui, cada detalhe é pensado para proporcionar um<span className='font-semibold italic'> ambiente acolhedor e sofisticado,</span> onde você pode relaxar e se permitir um momento de cuidado pessoal.</p>
                    <p className='text-[20px] sm:text-2xl leading-8 sm:leading-13' data-aos="fade-left">No <span className='font-semibold italic'>nosso salão</span> você verá que <span className='font-semibold italic'>é possível transformar sua beleza de dentro para fora, em um espaço onde cada cliente é tratado como único.</span></p>
                </div>

                <div data-aos="zoom-in">
                    <ScheduleButton />
                </div>
            </div>
        </section>
    );
}

export default About;
