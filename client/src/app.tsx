import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import Router from './app/router'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
