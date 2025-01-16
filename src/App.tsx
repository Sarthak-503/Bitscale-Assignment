import { Box } from "@mui/material"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      borderBottom:'1px solid rgba(218, 218, 218, 0.6)',
      borderRadius:'1rem',
      height:'100vh',
      // overflow:'hidden'
    }}>

    <Navbar/>
    </Box>
    </>
  )
}

export default App
