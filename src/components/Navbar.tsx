import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  return (
    <Box sx={{
      borderBottom: "1px solid #E5E5E5",
    }}>

    <Box
      sx={{
        width: "100%",
        height: "52px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        mx: "1rem",
      }}
    >
      {/* Arrow And Name  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0.5rem",
          // width:'80px',
          alignItems: "center",
        }}
      >
        <ArrowBackIcon
          sx={{
            width: "18px",
            height: "18px",
            color: "#1F2A37",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            color: "#6B7280",
            width: "106px",
            height: "21px",
            ml: "1rem",
          }}
        >
          Name of file
        </Typography>
      </Box>

      {/* AutoSave And Profile Icon  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0.5rem",
          alignItems: "center",
          mr: "",
        }}
      >
        {/* AutoSave and title  */}
        <Box
          sx={{
            display: "flex",
          }}
        >
          <ArrowBackIcon
            sx={{
              width: "18px",
              height: "18px",
              color: "#1F2A37",
            }}
          />
          <Typography
            typography="body2"
            sx={{
              color: "#0E9F6E",
              width: "106px",
              height: "21px",
              ml: "1rem",
            }}
          >
            Auto Save
          </Typography>
        </Box>
        {/* Profile Icon  */}
        <ArrowBackIcon
          sx={{
            width: "18px",
            height: "18px",
            color: "#1F2A37",
          }}
        />
      </Box>
    </Box>
    </Box>

  );
};

export default Navbar;
