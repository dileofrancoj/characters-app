import { Row, Col } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import Loading from "../common/Loading";

const Characters = (): JSX.Element => {
  const [characters, loading] = useFetch("character");
  console.log(characters);

  return (
    <>
      {loading && <Loading />}
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <p>Personajes</p>
        </Col>
      </Row>
    </>
  );
};

export default Characters;
