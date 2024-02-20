import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailsPage from './pages/DetailsPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;