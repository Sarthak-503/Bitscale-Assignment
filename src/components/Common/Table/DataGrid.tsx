import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import CustomImage from "../CustomImage";
import Chatgpt from "../../../assets/Icons/DataGrid/Chatgpt.png";
import EnrichCompany from "../../../assets/Icons/DataGrid/EnrichCompany.png";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
const columns: GridColDef[] = [
  { field: "id", headerName: "", width: 20, sortable: false },
  { field: "play", headerName: "", width: 70, sortable: false },
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
            mx: "0.1rem",
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
        <CustomImage src={Chatgpt} alt="Chatgpt Image" />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
            mx: "0.1rem",
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
            alignItems:'center',
            justifyContent: "space-evenly",
            mr:'4.5rem',
          }}
        >
          <CustomImage src={EnrichCompany} alt="Enrich Company" />
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
        <CustomImage src={Chatgpt} alt="Chatgpt Image" />
        <Typography
          variant="body2"
          sx={{
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
            mx: "0.1rem",
          }}
        >
          Input Column
        </Typography>
      </Box>
    ),
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, fullname: "Jon Snow" },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42, fullname: "Cersei Lannister" },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45, fullname: "Jaime Lannister" },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, fullname: "Arya Stark" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null, fullname: "Daenerys Targaryen" },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150, fullname: "Melisandre" },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44, fullname: "Ferrara Clifford" },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36, fullname: "Rossini Frances" },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65, fullname: "Harvey Roxie" }
]

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
              borderRight: "1px solid #E2E2E3",
            },
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "550",
            fontSize: "14px",
            color: "#1C1B1F",
            lineHeight: "16.94px",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #e0e0e0",
            "&:hover": {
              cursor: "pointer",
            },
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none", // Remove column separators
          },

          "& .MuiDataGrid-footerContainer": {
            display: "flex",
            minHeight: "40px",
            height: "40px",
            marginBottom: "4px",
          },
          "& .MuiTablePagination-root": {
            overflow: "hidden",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #e0e0e0",
            borderRight: "1px solid #e0e0e0",
          },
        }}
      />
    </Paper>
  );
}
