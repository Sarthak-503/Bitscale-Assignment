import { Box } from "@mui/material";
import TitleAndIcon from "./TitleAndIcon";
import Column from "../../../assets/Icons/ActionBar/Column.png";
import Filter from "../../../assets/Icons/ActionBar/Filter.png";
import Row from "../../../assets/Icons/ActionBar/Row.png";
import Sort from "../../../assets/Icons/ActionBar/Sort.png";
import SearchBar from "../SearchBar";
const ActionBar = () => (
  <>
    <SearchBar />
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems:'center',
      }}
    >
      <TitleAndIcon icon={Row} title="1/1 Row" />
      <TitleAndIcon icon={Column} title="3/3 Column" />
      <TitleAndIcon icon={Filter} title="0 Filter" />
      <TitleAndIcon icon={Sort} title="Sort" />
    </Box>
  </>
);

export default ActionBar;
