import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                {/* the "end" keyword
                    indicates that the page is only active
                    if the URL matches the "to" tag EXACTLY.
                    
                    If the homepage didn't have this,
                    the homepage would always be considered "active,"
                    because every page extends from the homepage. */}
                <Nav.Link as={NavLink} to="/" end>Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}