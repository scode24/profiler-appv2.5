import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Main from "./pages/Main";
import Skills from "./pages/Skills";
import Starter from "./pages/Starter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Starter />} />
        <Route exact path="/:username" element={<Main />}>
          <Route path="about" element={<About />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
