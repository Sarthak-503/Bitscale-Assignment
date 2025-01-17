import { Box } from "@mui/material";
import ActionBar from "./ActionBar/ActionBar";
import OperationPanel from "./OperationalBar/OperationPanel";

const Toolbar = () => {
  return (
   
      <Box
        sx={{
          mt:"2.9%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingX: 2.5,
          mb:'2.4%'
        }}
      >
        <ActionBar />
        <OperationPanel/>
      </Box>
  );
};

export default Toolbar;
