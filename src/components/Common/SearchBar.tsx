import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <Box>
        {/* <TextField
          label="Search Leads"
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            width: "100%",
            "& ..MuiTextField-root":{
              height:'2rem'
            },
            "& .MuiInputBase-root": {
              height: "2rem", 
              display: "flex",
              alignItems: "center"
            },
            "& .MuiInputBase-input": {
              paddingBottom: '1px',
              marginBottom:'1px',
              textAlign: "initial", 
              fontSize:'16px'
            },

          }}
        /> */}
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            style: {
              height: "32px", // Adjust the height here
              padding: "0 8px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "32px", // Ensures consistent height for the entire component
            },
            width: 300,
          }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
