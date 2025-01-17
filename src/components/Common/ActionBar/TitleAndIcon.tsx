import { Box, Typography } from "@mui/material";
import CustomImage from "../CustomImage";

interface TitleAndIconProps{
    title:string;
    icon:string;
}
const TitleAndIcon:React.FC<TitleAndIconProps> = ({title,icon}) => {
  return (
    <>
      <Box sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        mx:'1rem',
        py:1,
        px:1.5,
        
      }}>
        <Typography variant="caption" sx={{
          mx:'0.5rem'
        }}>{title}</Typography>
        <CustomImage src={icon} alt={title}/>

      </Box>
    </>
  )
}

export default TitleAndIcon
