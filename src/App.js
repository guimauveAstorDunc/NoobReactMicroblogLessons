import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    // Parent Container
    <Container fluid className="App">
      <BrowserRouter>

        <Header /> {/* Navbar */}

        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
    </Container>
  );
}
