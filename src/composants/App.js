import { Container } from 'react-bootstrap';
import Signup from'./Signup';

function App() {
  return (
    <Container className="d_flex align-items-center justify-content-center" style={{maxWidth: "400px"}}>
      <Signup/>
    </Container>
  );
}

export default App;
