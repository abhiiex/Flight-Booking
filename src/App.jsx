import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../src/Page/Home.jsx";
import "./App.jsx";
import AppRoutes from "./Routes/AppRoutes.jsx";
// import Admin from "./admin/Admin";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;