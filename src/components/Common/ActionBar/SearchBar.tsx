import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <Box sx={{
        my:'0.1px',
        mr:'1.5rem'
      }}>
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{
                  color:'#1F2A37'
                }}/>
              </InputAdornment>
            ),
            style: {
              height: "32px", // Adjust the height here
              padding: "0 8px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "32px", 
              borderColor: "#D1D5DB", 
              backgroundColor: "#F9FAFB", 
              borderRadius: "8px",
            },
            width: 300,
          }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
