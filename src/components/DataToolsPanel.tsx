import { Box } from "@mui/material";
import Toolbar from "./Common/Toolbar";
import DataGrid from "./Common/Table/DataGrid";

const DataToolsPanel = () => {
  return (
    <>
      <Box
        sx={{
          width: "95.6%",
          height: "100%",
        }}
      >
        <Toolbar />
        <DataGrid/>
      </Box>
    </>
  );
};

export default DataToolsPanel;
