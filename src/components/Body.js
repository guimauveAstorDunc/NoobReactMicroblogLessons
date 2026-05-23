import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

export default function Body({ sidebar, children }) {
    return (
        <Container>
            <Stack direction="horizontal" className="Body">
                {
                    /* A remidner that && in JSX evaluates the right side
                        if the left side is true. */
                    sidebar && <Sidebar />
                }
                <Container className="Content">
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}