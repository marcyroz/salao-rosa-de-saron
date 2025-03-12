import Image from 'next/image';
import logo from '../../../../public/logo.svg';
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
                        <span className='text-sm sm:text-lg'>WhatsApp (13) 99640-2047</span>
                        <span>Tel fixo (13) 3481-6349</span>
                    </div>

                    <div className='flex flex-col w-[295px]'>
                        <h3 className='font-semibold text-[20px] sm:text-2xl'>Horários</h3>
                        <span className='text-sm sm:text-lg'>De segunda a sábado das 9h às 18h</span>
                    </div>
                </div>

                <div className='flex sm:mx-auto sm:items-center sm:justify-center w-[295px]'>
                    <Image src={logo} alt='logo rosa de saron' width={200} className='my-6' />
                </div>

                <div className='flex flex-col gap-8 sm:items-center'>
                    <div className='flex flex-col w-[295px]'>
                        <h3 className='font-semibold text-[20px] sm:text-2xl'>Endereço</h3>
                        <span className='text-sm sm:text-lg'>
                            Rua Silvia Dias 167, Vila Sônia <br /> Praia Grande-SP
                        </span>

                        <div className='flex gap-4 pt-6'>
                            <CardContainer color='bg-white' padding={8} radius={12}>
                                <InstagramLogo color='#B97271' className='w-8 h-8' weight="bold" />
                            </CardContainer>
                            <CardContainer color='bg-white' padding={8} radius={12}>
                                <WhatsappLogo color='#B97271' className='w-8 h-8' weight="fill" />
                            </CardContainer>
                            <CardContainer color='bg-white' padding={8} radius={12}>
                                <CalendarCheck color='#B97271' className='w-8 h-8' />
                            </CardContainer>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    );
}

export default Footer;