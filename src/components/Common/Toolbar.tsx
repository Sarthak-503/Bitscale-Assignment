import { Box } from "@mui/material";
import ActionBar from "./ActionBar/ActionBar";
import OperationPanel from "./OperationPanel";

const Toolbar = () => {
  return (
    <Box
      sx={{
        width: "95.6%",
        paddingX: 2.5,
        border: "1px solid red",
      }}
    >
      <Box
        sx={{
          mt:"2.9%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <ActionBar />
        <OperationPanel/>
      </Box>
    </Box>
  );
};

export default Toolbar;
