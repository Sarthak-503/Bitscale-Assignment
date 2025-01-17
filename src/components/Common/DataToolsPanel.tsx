import { Box } from "@mui/material";
import Toolbar from "./Toolbar";

const DataToolsPanel = () => {
  return (
    <>
      <Box
        sx={{
          width: "95.6%",
          paddingX: 2.5,
          border: "1px solid red",
          height: "100%",
        }}
      >
        <Toolbar />
      </Box>
    </>
  );
};

export default DataToolsPanel;
