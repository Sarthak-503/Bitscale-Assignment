
interface ImageProps{
    src:string;
    alt:string;
    width:string;
    height:string;
    
}
const CustomImage:React.FC<ImageProps> = ({src,alt,width='20rem',height='20rem'}) => {
  return (
    <>
     <img src={src} alt={alt}  width={width} height={height}/> 
    </>
  )
}

export default CustomImage
