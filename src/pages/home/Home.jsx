import { Container } from "@mui/material";
import Hero from "./Hero";
import Join from "./Join";
import Resto from "../../components/Resto";
import Meeting from "../../components/Wedding";

const Home = () => {
  return (
    <div className="mt-4 mb-4">
      <Container sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Hero />
        <Join />
        <Resto />
        <Meeting />
      </Container>
    </div>
  );
};

export default Home;
