import { CalendarCheck } from 'lucide-react'

const ScheduleButton = () => {
    return (
        <button className='flex bg-[#B97271] sm:gap-4 gap-2 items-center justify-center hover:opacity-100 hover:scale-110  duration-300 cursor-pointer p-3 rounded-xl opacity-80 drop-shadow-lg z-10'>
            <CalendarCheck className='h-5 w-5 lg:h-7 lg:w-7' />
            <a target='_blank' href='https://salaor11.gendo.app/?fbclid=PAZXh0bgNhZW0CMTEAAaafqITk35uG8BhRx7xPk1A7DcdKx7LWwJzrTZVL_uF7qKz0IVPW8_1xo-Y_aem_DfxrjAAQQoAfOIIkK7qOng#/' className='font-semibold sm:text-sm text-[12px]'>REALIZE SEU AGENDAMENTO</a>
        </button>
    )
}

export default ScheduleButton