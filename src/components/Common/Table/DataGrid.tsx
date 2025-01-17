import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import CustomImage from "../CustomImage";
import Chatgpt from "../../../assets/Icons/DataGrid/Chatgpt.png";
import EnrichCompany from "../../../assets/Icons/DataGrid/EnrichCompany.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import AddIcon from "@mui/icons-material/Add";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
const columns: GridColDef[] = [
  { field: "id", headerName: "", width: 20, sortable: false },
  {
    field: "play",
    headerName: "",
    width: 70,
    sortable: false,
    renderCell: () => (
      <PlayCircleFilledWhiteOutlinedIcon
        fontSize="medium"
        sx={{ color: "#1976d2", cursor: "pointer" }}
      />
    ),
  },
  {
    field: "firstName",
    width: 253,
    sortable: false,
    renderHeader: () => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "0.1rem",
        }}
      >
        <Box
          sx={{
            width: "18px",
            height: "19px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            mx: "0.2rem",
          }}
        >
          A
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
          }}
        >
          Input Column
        </Typography>
      </Box>
    ),
  },
  {
    field: "lastName",
    headerName: "Enrich Company",
    width: 253,
    sortable: false,
    renderHeader: () => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "0.1rem",
        }}
      >
        <CustomImage
          width="15rem"
          height="15rem"
          src={Chatgpt}
          alt="Chatgpt Image"
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
            mx: "0.2rem",
          }}
        >
          Input Column
        </Typography>
      </Box>
    ),
  },
  {
    field: "age",
    headerName: "Age",
    width: 253,
    sortable: false,
    renderHeader: () => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          py: "0.1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            mr: "4.5rem",
          }}
        >
          <CustomImage
            width="15rem"
            height="15rem"
            src={EnrichCompany}
            alt="Enrich Company"
          />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "550",
              fontSize: "14px",
              color: "#1C1B1F",
              lineHeight: "16.94px",
              ml: "0.3rem",
            }}
          >
            Enrich Company
          </Typography>
        </Box>
        <PlayArrowOutlinedIcon
          fontSize="medium"
          sx={{
            p: "0.1rem",
          }}
        />
      </Box>
    ),
  },
  {
    field: "fullName",
    headerName: "Full name",
    width: 430,
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    renderHeader: () => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "0.1rem",
        }}
      >
        <AddIcon
          fontSize="medium"
          sx={{
            p: "0.1rem",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
            mx: "0.2rem",
          }}
        >
          Add Column
        </Typography>
      </Box>
    ),
  },
];

const rows = [
  {
    id: 1,
    lastName: "Bitscale Evaluation - Account relevancy check.csv",
    firstName: "Oct 12, 2024 at 14:08 PM",
    age: "Bitscale Evaluation - Account relevancy check.csv",
    fullname: "Jon Snow",
  },
  {
    id: 2,
    lastName: "cell data size exceeds limit",
    firstName: "Oct 12, 2024 at 14:08 PM",
    age: "BMW Evaluation - Relevancy check.csv",
    fullname: "Cersei Lannister",
  },
  {
    id: 3,
    lastName: "Loading data, Please wait",
    firstName: "Oct 12, 2024 at 14:08 PM",
    age: "Google Evaluation - Lilevancy check.csv",
    fullname: "Jaime Lannister",
  },
  {
    id: 4,
    lastName: "Loading data, Please wait",
    firstName: "Oct 12, 2024 at 14:08 PM",
    age: "Apple Evaluation - Olvancy check.csv",
    fullname: "Arya Stark",
  },
  {
    id: 5,
    lastName: "Loading data, Please wait",
    firstName: "Oct 12, 2024 at 14:08 PM",
    age: "Figma Evaluation - Evancy check.csv",
    fullname: "Daenerys Targaryen",
  },
  { id: 6, lastName: "", firstName: "", age: "", fullname: "" },
  { id: 7, lastName: "", firstName: "", age: "", fullname: "" },
  { id: 8, lastName: "", firstName: "", age: "", fullname: "" },
  { id: 9, lastName: "", firstName: "", age: "", fullname: "" },
];

export default function Datagrid() {
  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={25}
        columnHeaderHeight={25}
        disableRowSelectionOnClick
        disableColumnMenu
        disableColumnResize
        sx={{
          border: "1px solid red", // Outer Table border
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #E2E2E3",

            "& .MuiDataGrid-columnHeader": {
              backgroundColor: "#F6F6F6",
              borderRight: "1px solid #E2E2E3",
            },
            "& .MuiDataGrid-columnHeader[data-field='firstName']": {
              backgroundColor: "#FEF2C7",
            },
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiTablePagination-root": {
            overflow: "hidden",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #e0e0e0",
            borderRight: "1px solid #e0e0e0",
            textAlign: "left", // Align text to the left
          },
        }}
      />
    </Paper>
  );
}
