import Navbar from "./layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { HeroesContextProvider } from "./context/heroesContext";

function App() {
  return (
    <>
      <HeroesContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HeroesContextProvider>
    </>
  );
}

export default App;
