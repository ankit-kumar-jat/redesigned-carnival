import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "pages/not-found"
import Home from "pages/home"
import Layout from "components/layout"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
