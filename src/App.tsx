import './App.css';
import Search from './components/search/Search';
import DataViewer from './components/dataViewer/DataViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Container>
                <Row>
                    <Col>
                        <Search />
                    </Col>
                    <Col xs={12} md={8}>
                        <DataViewer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
