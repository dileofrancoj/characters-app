import { Col } from "react-bootstrap";
import { iCharacter } from "../../types/character";
export interface iCharacterProps {
  character: iCharacter;
}

const Character: React.FC<iCharacterProps> = ({
  character,
}: iCharacterProps): JSX.Element => {
  return (
    <Col md={8} className="mt-2 mb-2">
      <p>{character.name}</p>
    </Col>
  );
};

export default Character;
