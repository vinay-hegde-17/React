import "./App.css";
import CodeSplit from "./CodeSplit";
import ErrorBoundary from "./ErrorBoundary";
import Forwardref from "./Utils/Forwardref";
import HigherOrder from "./Utils/HigherOrder";
import HigherOrderHover from "./Utils/HigherOrderHover";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<CodeSplit/>}/>
    <Route path="/error" element={<ErrorBoundary/>}/>
    <Route path="/forward" element={<Forwardref/>}/>
    <Route path="/count" element={<HigherOrder/>}/>
    <Route path="*" element={<HigherOrderHover/>}/>
  </Routes>
</Router>
  );
}
export default App;
