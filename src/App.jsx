import LandingPage from "../components/LandingPage";
import SetupPage from "../components/SetupPage"
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SetupPage" element={<SetupPage />} />
     </Routes>
    </>
  );
}
