'use client'

import { useState } from 'react';
import CardContainer from '@/app/_components/CardContainer';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import ScheduleButton from '@/app/_components/ScheduleButton';
import Image from 'next/image';
import bg2 from '../../../../public/assetsImages/asset-7.png';

const FAQs = [
    {
        question: 'Como faço para agendar um horário?',
        answer: (
            <span>
                A forma mais prática e simples é acessando o nosso agendador <a
                    target='_blank'
                    href='https://salaor11.gendo.app/?fbclid=PAZXh0bgNhZW0CMTEAAaafqITk35uG8BhRx7xPk1A7DcdKx7LWwJzrTZVL_uF7qKz0IVPW8_1xo-Y_aem_DfxrjAAQQoAfOIIkK7qOng#/'
                    className="font-semibold">
                    clicando aqui
                </a>. Caso não queira, pode nos chamar no nosso WhatsApp (13) 99640-2047
                ou ligar no nosso telefone fixo (13) 3481-2829. Ou se preferir, pode ir diretamente ao nosso estabelecimento
                para realizar o agendamento pessoalmente.
            </span>
        )
    },
    {
        question: 'Qual o endereço do salão?',
        answer: (
            <span>
                Estamos localizados na <a target='_blank' href='https://www.google.com/maps/place/Salao+Rosa+De+Saron/@-23.9987413,-46.4505503,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce1e97c5c157bb:0xc4e49f433afbceeb!8m2!3d-23.9987462!4d-46.4479754!16s%2Fg%2F11f3r2_2x9?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D' className="font-semibold">Rua Silvia Dias 167, bairro Vila Sônia, na cidade de Praia Grande-SP.</a>
            </span>
        )
    },
    {
        question: 'Quais as formas de pagamento que vocês aceitam? Vocês parcelam?',
        answer: 'Aceitamos dinheiro em espécie, pix, débito ou crédito. Parcelamos em até 3x sem juros para valores à partir de 100,00.'
    },
    {
        question: 'Quais são os valores dos procedimentos?',
        answer: 'Os nossos valores variam de acordo com o procedimento escolhido, comprimento do cabelo, se o produto utilizado será nosso ou do cliente, etc. Mas no nosso agendador estão disponíveis as faixas de preço de cada procedimento a partir do momento em que estiver realizando o agendamento.'
    },
    {
        question: 'Preciso agendar um horário, ou posso ir direto no salão?',
        answer: 'Devido à alta demanda, o mais indicado é que realize o agendamento antes de vir ao estabelecimento, pois, apesar de possuirmos muitas funcionárias, as agendas costumam se encher algumas semanas antes, e as chances de haver disponibilidade no mesmo dia são baixíssimas.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id='faq' className='bg-[#F1F1F1] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8'>
            <div className='container flex flex-col items-center space-y-6 max-w-[900px]'>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-[360px] lg:-translate-x-[460px] -translate-y-1/2 z-0 w-[600px] lg:w-full max-w-[800px]">
                    <Image
                        src={bg2}
                        alt='reason-image'
                        className='w-full object-contain'
                    />
                </div>

                <div className='py-10 lg:py-20' data-aos="zoom-in">
                    <ScheduleButton />
                </div>

                <h2 className='text-[#B97271] font-bold text-3xl lg:text-[35px] text-center' data-aos="fade-left">
                    Perguntas Frequentes
                </h2>

                <div className='flex flex-col gap-5 pb-20 lg:pb-50' data-aos="fade-left" data-aos-delay="300">
                    {FAQs.map((faq, index) => (
                        <div key={index} className='flex flex-col gap-3'>

                            <button onClick={() => toggleFAQ(index)} className="w-full cursor-pointer hover:scale-102 duration-300">
                                <CardContainer
                                    radius={25}
                                    padding={20}
                                    color='bg-[#B97271]'
                                    gap={20}
                                    shadow
                                >

                                    {activeIndex === index ? (
                                        <Minus className='h-7 w-7 text-white' />
                                    ) : (
                                        <Plus className='h-7 w-7 text-white' />
                                    )}
                                    <span className='font-semibold flex-1 text-center text-white'>{faq.question}</span>
                                </CardContainer>
                            </button>

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={activeIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden z-10"
                            >
                                <CardContainer radius={35} padding={20} color='bg-[#D9D9D9]'>
                                    <p className='text-[#B97271] mx-3'>{faq.answer}</p>
                                </CardContainer>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
