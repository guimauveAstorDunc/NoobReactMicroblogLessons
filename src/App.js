import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Body from './components/Body';
import Posts from './components/Posts';

export default function App() {
  return (
    // Parent Container
    <Container fluid className="App">
      <Header /> {/* Navbar */}

      <Body sidebar>
        <Posts />
      </Body>

    </Container>
  );
}
