import CardContainer from '../CardContainer'
import image from '../../../../public/top-of-mind.svg'
import Image from 'next/image'

const TopOfMind = () => {
    return (
        <div className="absolute top-[910px] log:top-[920px] w-full z-[9999]">
            <CardContainer radius={25}>
                <Image src={image} alt="Top Of Mind" className='w-12 h-10 lg:w-25 lg:h-20' />
            </CardContainer>
        </div>
    );
};

export default TopOfMind;
