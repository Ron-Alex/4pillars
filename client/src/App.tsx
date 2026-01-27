import { BrowserRouter } from "react-router";
import './App.css';
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;