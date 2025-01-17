import Box from "@mui/material/Box";
import CustomImage from "./Common/CustomImage";
import  Puzzle from "../assets/Icons/Sidebar/puzzle.png";
import Circle from "../assets/Icons/Sidebar/circle.png";
import Table from "../assets/Icons/Sidebar/table.png";
import Database from "../assets/Icons/Sidebar/Database.png";
import CreditCard from "../assets/Icons/Sidebar/circle.png";
// import PuzzleImage from "../../src/assets/Icons/puzzle.png";
// import TableImage from "../../src/assets/Icons/table.png";
// import Database from "../../src/assets/Icons/Database.png";
// import CreditCard from "../../src/assets/Icons/CreditCard.png";

export default function Sidebar() {
  return (
    <>
      <Box
        borderRight={"2px solid"}
        borderColor="#E5E5E5"
        sx={{
          height: "100%",
          width: "4.3%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "space-between",
            marginTop: "2rem",
            width: "36px",
          }}
        >
          {/* Box1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "20%",
              alignItems: "center", 
            }}
          >
            <CustomImage src={Table} alt="Table Image" />
            <CustomImage src={Circle} alt="Circle Image" />
            <CustomImage src={Puzzle} alt="Puzzle Image" />
          </Box>

          {/* Box2 */}
          <Box
            sx={{
              height: "20%",
              display: "flex",
              flexDirection:'column',
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <CustomImage src={CreditCard} alt="CreditCard Image" />
            <CustomImage src={Database} alt="Database Image" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
