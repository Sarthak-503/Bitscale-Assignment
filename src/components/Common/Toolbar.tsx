import { Box, Typography } from "@mui/material"

const Toolbar = () => {
  return (
    <Box sx={{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingX:2.5
    }}>
      <Typography>Sarthak</Typography>
    </Box>
  )
}

export default Toolbar
