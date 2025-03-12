import { CalendarCheck } from 'lucide-react'

const ScheduleButton = () => {
    return (
        <a
            target='_blank'
            href='https://salaor11.gendo.app/?fbclid=PAZXh0bgNhZW0CMTEAAaafqITk35uG8BhRx7xPk1A7DcdKx7LWwJzrTZVL_uF7qKz0IVPW8_1xo-Y_aem_DfxrjAAQQoAfOIIkK7qOng#/'
            className='flex bg-[#B97271] sm:gap-4 gap-2 items-center justify-center text-center hover:opacity-100 hover:scale-110 duration-300 cursor-pointer py-3 px-6 rounded-2xl opacity-80 drop-shadow-lg z-10 font-semibold sm:text-sm text-[12px] w-fit leading-none text-white'
        >
            <CalendarCheck className='h-4 w-4 lg:h-6 lg:w-6' />
            <span className="pt-[3px]">REALIZE SEU AGENDAMENTO</span>
        </a>
    )
}

export default ScheduleButton
