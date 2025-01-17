import { Box } from "@mui/material";
import ActionBar from "./ActionBar/ActionBar";
import OperationPanel from "./OperationalBar/OperationPanel";

const Toolbar = () => {
  return (
   
      <Box
        sx={{
          mt:"1.8%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingX: 2.5,
          mb:'1.8%'
        }}
      >
        <ActionBar />
        <OperationPanel/>
      </Box>
  );
};

export default Toolbar;
