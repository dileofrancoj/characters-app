import { Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { iCharacter } from "../../types/character";
import Character from "../Character";
import Loading from "../common/Loading";

const Characters = (): JSX.Element => {
  const [characters, loading] = useFetch("character");
  const { results }: { results: iCharacter[] } = characters;

  if (loading) return <Loading />;

  return (
    <>
      <Row className="justify-content-center mt-5">
        {results &&
          results.length > 0 &&
          results.map((character: iCharacter) => (
            <Character key={character.id} character={character} />
          ))}
      </Row>
    </>
  );
};

export default Characters;
