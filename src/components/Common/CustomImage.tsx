
interface ImageProps{
    src:string;
    alt:string;
}
const CustomImage:React.FC<ImageProps> = ({src,alt}) => {
  return (
    <>
     <img src={src} alt={alt} /> 
    </>
  )
}

export default CustomImage
