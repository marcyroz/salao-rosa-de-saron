import Image from 'next/image';
import logo from '../../../../public/logos/logo.svg';
import CardContainer from '../CardContainer';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { CalendarCheck } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-[#B97271] w-full py-10 flex flex-col items-center justify-center'>

            <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto items-start lg:items-center text-left px-6 sm:px-10 '>

                <div className='flex flex-col gap-6 sm:items-center'>
                    <div className='flex flex-col w-[295px]'>
                        <h3 className='font-semibold text-[20px] sm:text-2xl'>Contatos</h3>
                        <span className='text-sm sm:text-lg'>WhatsApp <a className='underline'>(13) 99640-2047</a></span>
                        <span className='text-sm sm:text-lg'>Tel fixo <a className='underline'>(13) 3481-6349</a></span>
                    </div>

                    <div className='flex flex-col w-[295px]'>
                        <h3 className='font-semibold text-[20px] sm:text-2xl'>Horários</h3>
                        <span className='text-sm sm:text-lg'>De terça a sábado das 9h às 18h</span>
                    </div>
                </div>

                <div className='flex sm:mx-auto sm:items-center sm:justify-center w-[295px]'>
                    <Image src={logo} alt='logo rosa de saron' width={200} className='my-6' priority />
                </div>

                <div className='flex flex-col gap-8 sm:items-center'>
                    <div className='flex flex-col w-[295px]'>
                        <h3 className='font-semibold text-[20px] sm:text-2xl'>Endereço</h3>
                        <a target='_blank' href='https://www.google.com/maps/place/Salao+Rosa+De+Saron/@-23.9987413,-46.4505503,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1e97c5c157bb:0xc4e49f433afbceeb!8m2!3d-23.9987462!4d-46.4479754!16s%2Fg%2F11f3r2_2x9?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D' className='text-sm sm:text-lg cursor-pointer'>
                            Rua Silvia Dias 167, Vila Sônia <br /> Praia Grande-SP
                        </a>

                        <div className='flex gap-4 pt-6'>
                            <a target='_blank' href='https://www.instagram.com/salaorosasaronpg/' className='cursor-pointer'>
                                <CardContainer color='bg-white' padding={8} radius={12}>
                                    <InstagramLogo color='#B97271' className='w-8 h-8' weight="bold" />
                                </CardContainer>
                            </a>

                            <a target='_blank' href={`https://wa.me/5513996402047?text=Olá! Vim do site e gostaria de agendar um horário com vocês.`} className='cursor-pointer'>
                                <CardContainer color='bg-white' padding={8} radius={12}>
                                    <WhatsappLogo color='#B97271' className='w-8 h-8' weight="fill" />
                                </CardContainer>
                            </a>

                            <a target='_blank' href='https://salaor11.gendo.app/?fbclid=PAZXh0bgNhZW0CMTEAAaafqITk35uG8BhRx7xPk1A7DcdKx7LWwJzrTZVL_uF7qKz0IVPW8_1xo-Y_aem_DfxrjAAQQoAfOIIkK7qOng#/' className='cursor-pointer'>
                                <CardContainer color='bg-white' padding={8} radius={12}>
                                    <CalendarCheck color='#B97271' className='w-8 h-8' />
                                </CardContainer>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}

export default Footer;