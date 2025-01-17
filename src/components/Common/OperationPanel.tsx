import { Box, Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
const OperationPanel = () => {
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AutoAwesomeOutlinedIcon />}
        sx={{
          background: "#1F2A37",
          color: "white",
          borderRadius: 1,
        }}
      >
        Enrich
      </Button>
      <Box>
      <ShareOutlinedIcon/>
      <SaveAltIcon/>
      
      {/* <FontAwesomeIcon icon="fa-solid fa-trash-can" /> */}
      </Box>
    </>
  );
};

export default OperationPanel;
