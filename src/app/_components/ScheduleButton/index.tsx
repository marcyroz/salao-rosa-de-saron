import { CalendarCheck } from 'lucide-react'

const ScheduleButton = () => {
    return (
        <button className='flex bg-[#B97271] gap-4 items-center justify-center hover:opacity-100 hover:scale-110  duration-300 cursor-pointer p-3 rounded-xl opacity-80 drop-shadow-lg'>
            <CalendarCheck />
            <a target='_blank' href='https://salaor11.gendo.app/?fbclid=PAZXh0bgNhZW0CMTEAAaafqITk35uG8BhRx7xPk1A7DcdKx7LWwJzrTZVL_uF7qKz0IVPW8_1xo-Y_aem_DfxrjAAQQoAfOIIkK7qOng#/' className='font-semibold text-sm'>REALIZE SEU AGENDAMENTO</a>
        </button>
    )
}

export default ScheduleButton