
export function Character(character) {
  return (
    <div className="text-center p-5">
      <h3 className="pb-2">{character.name}</h3>
      <img src={character.image} alt={character.name} className="img-fluid rounded-pill pt-3" />
      <p className="pt-3">{`Origin: ${character.origin && character.origin.name}`}</p>
    </div>
  );
}
export default Character;