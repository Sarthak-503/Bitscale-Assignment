import { Box } from "@mui/material";
import TitleAndIcon from "./TitleAndIcon";
import ViewWeekOutlinedIcon from '@mui/icons-material/ViewWeekOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined'; // TODO Correct Sort
import SearchBar from "./SearchBar";
const ActionBar = () => (
  <>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width:'65%'// TODO 58%
      }}
    >
      <Box>
        <SearchBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TitleAndIcon Icon={TableRowsOutlinedIcon} title="1/1 Row" />
        <TitleAndIcon Icon={ViewWeekOutlinedIcon} title="3/3 Column" />
        <TitleAndIcon Icon={FilterAltOutlinedIcon} title="0 Filter" />
        <TitleAndIcon Icon={SwapVertOutlinedIcon} title="Sort" />
      </Box>
    </Box>
  </>
);

export default ActionBar;
