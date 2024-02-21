import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import DetailsPage from './pages/DetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import UsersPage from './pages/UsersPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
             <Route path="/details/:id" element={<DetailsPage />} />
             <Route path="/aboutpage" element={<AboutPage />} />
             <Route path="/users" element={<UsersPage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;