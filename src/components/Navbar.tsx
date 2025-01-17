import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
const Navbar = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #E5E5E5",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "52px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          ml: "1rem",
          mr: "1rem",
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
            Name of the file
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
            // mr: "",
          }}
        >
          {/* AutoSave and title  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ToggleOnIcon
              fontSize="large"
              sx={{
                color: "#0E9F6E",
                // p: "0.1rem",
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
          <AccountCircleOutlinedIcon
            fontSize="medium"
            sx={{
              backgroundColor: "#FEECDC",
              mr: "1rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
