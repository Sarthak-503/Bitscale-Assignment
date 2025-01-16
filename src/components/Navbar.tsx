import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const Navbar = () => {
  return (
    <Box sx={{
      width:'100%',
      height:'52px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      border:'1px solid red'
    }}>
      {/* Arrow And Name  */}
      <Box sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      }}>
        <ArrowBackIcon/>
        <Typography>Name of file</Typography>
      </Box>

      {/* AutoSave And Profile Icon  */}
      <Box></Box>
    </Box>
  );
};

export default Navbar;
