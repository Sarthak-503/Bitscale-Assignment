import { Box, Typography } from "@mui/material";
import CustomImage from "../CustomImage";

interface TitleAndIconProps {
  title: string;
  icon: string;
}
const TitleAndIcon: React.FC<TitleAndIconProps> = ({ title, icon }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          mx: 1,
          py: 1,
          px: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CustomImage src={icon} alt={title} />
        </Box>
        <Typography
          variant="subtitle2"
          sx={{
            mx: "0.5rem",
            whiteSpace: "nowrap",
            overflow: "hidden", 
            // textOverflow: "ellipsis",
          }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};

export default TitleAndIcon;
