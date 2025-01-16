
interface ImageProps{
    src:string;
    alt:string;
}
const CustomImage:React.FC<ImageProps> = ({src,alt}) => {
  return (
    <>
     <img src={src} alt={alt} width={'20rem'} height={'20rem'}/> 
    </>
  )
}

export default CustomImage
