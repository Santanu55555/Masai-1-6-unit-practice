import Navbar from "./components/Navbar";
import Container from '@mui/material/Container';
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <Container maxWidth="xlg">
      <Navbar />
      <AllRoutes />
    </Container>
  );
}

export default App;
