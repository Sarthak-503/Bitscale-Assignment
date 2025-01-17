import { Box } from '@mui/material'
import DataGrid from './DataGrid'

const Table = () => {
  return (
    <>
      <Box sx={{
        width:'100%',
        height:'89%',
        border:'1px solid yellow'
     }}>
        <DataGrid />
        </Box> 
    </>
  )
}

export default Table
