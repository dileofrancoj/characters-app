import { Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { iCharacter } from "../../types/character";
import Character from "../Character";
import Loading from "../common/Loading";

const Characters = (): JSX.Element => {
  const [characters, loading] = useFetch("character");
  console.log(characters);

  if (loading) return <Loading />;

  return (
    <>
      <Row className="justify-content-center mt-5">
        {characters?.results &&
          characters.results.length > 0 &&
          characters.results.map((character: iCharacter) => (
            <Character key={character.id} />
          ))}
      </Row>
    </>
  );
};

export default Characters;
