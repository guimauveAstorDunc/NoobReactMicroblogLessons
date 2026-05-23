import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        /* Likely to be deleted later, but while it's still new to me,
            "sticky" in this case refers to the Navbar staying on screen
            regardless of the user's scrolling. */
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Navbar.Brand>Microblog</Navbar.Brand>
            </Container>
        </Navbar>
    );
}