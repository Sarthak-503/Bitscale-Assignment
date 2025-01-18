import { Box, Button } from "@mui/material";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
const OperationPanel = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "14%",
          height: "inherit",
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
            fontSize: "0.6rem",
            width: "5rem",
            p: "1.2rem",
            height: "1vh",
          }}
        >
          Enrich
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <ShareOutlinedIcon
            sx={{
              mx: "0.2rem",
              p: "0.1rem",
              fontSize: "1.7rem",
            }}
          />
          <SaveAltIcon
            fontSize="medium"
            sx={{
              mx: "0.2rem",
              p: "0.1rem",
              fontSize: "1.7rem",
            }}
          />
          <DeleteOutlinedIcon
            fontSize="medium"
            sx={{
              mx: "0.2rem",
              p: "0.1rem",
              color: "#E02424",
              fontSize: "1.7rem",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default OperationPanel;
