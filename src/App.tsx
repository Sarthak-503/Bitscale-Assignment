import { Box } from "@mui/material"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      border:'1px solid rgba(218, 218, 218, 0.6)',
      borderRadius:'1rem',
      height:'100vh'
      // m:1
    }}>

    <Navbar/>
    </Box>
    </>
  )
}

export default App
