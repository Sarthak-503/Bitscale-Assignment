import { Box, Typography } from "@mui/material";

interface TitleAndIconProps {
  title: string;
  Icon: React.ElementType;
}
const TitleAndIcon: React.FC<TitleAndIconProps> = ({ title, Icon }) => {
  // const CustomICon = Icon
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
          <Icon />
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
