interface CardContainerProps {
    children: React.ReactNode;
    radius?: number,
    width?: string,
    height?: string,
    color?: string,
    shadow?: boolean,
    opacity?: string,
    padding?: number,
    gap?: number,
    direction?: 'row' | 'column',
    className?: string,
}

const CardContainer: React.FC<CardContainerProps> = ({ children, radius, width, height, color, shadow, opacity, padding, gap, direction }) => {
    return (
        <article className={`flex mx-auto items-center justify-center ${color ? color : 'bg-[#B97271]'} ${opacity ? opacity : 'opacity-100'} ${shadow ? 'drop-shadow-lg' : 'shadow-none'}`} style={{
            width: width ? width : 'auto',
            height: height ? height : 'auto',
            borderRadius: radius ? radius : 16,
            padding: padding ? padding : 16,
            flexDirection: direction ? direction : 'row',
            gap: gap ? gap : 10,
        }}>
            {children}
        </article>
    )
}

export default CardContainer;