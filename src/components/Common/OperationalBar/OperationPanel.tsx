import { Box, Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
const OperationPanel = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "16%",
          height:'inherit',
          mr:'1'
        }}
      >
        <Button
          variant="outlined"
          size="small"
          startIcon={<AutoAwesomeOutlinedIcon />}
          sx={{
            background: "#1F2A37",
            color: "white",
            borderRadius: 1,
            fontSize:'0.7rem',
          }}
        >
          Enrich
        </Button>
        <Box sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center',
          ml:2, // 15.168px
        }}>
          <ShareOutlinedIcon fontSize="small" sx={{
            mx:'0.2rem',
            p:'0.1rem',

          }}/>
          <SaveAltIcon fontSize="small" sx={{
            mx:'0.2rem',
            p:'0.1rem',
          }}/>

          {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
        </Box>
      </Box>
    </>
  );
};

export default OperationPanel;
