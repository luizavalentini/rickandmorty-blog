import CharacterList from "components/Character/CharacterList";
function SobreMim() {
    return (
        <>
            <div className="bg-dark text-white">
                <h1 className="text-center display-1 py-4">Characters</h1>
                <CharacterList />
            </div>
        </>
    );
}
export default SobreMim;