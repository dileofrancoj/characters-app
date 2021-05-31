import { Row, Col, InputGroup, FormControl } from "react-bootstrap";

const Search = (): JSX.Element => {
  return (
    <Row className="justify-content-center mt-5">
      <Col md={6} sm={6}>
        <InputGroup>
          <FormControl placeholder="Buscar..." />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;
