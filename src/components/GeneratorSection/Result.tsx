import { Outfit } from "../../types/outfit"
import Button from "../Button"
import ClothingCard from "../ClosetSection/ClothingCard";

export default function Result({ outfit }: { outfit: Outfit }) {

    return <section id="generation-result">
        <div className="result-list">
            <ClothingCard key={outfit.accessory.id} clothing={outfit.accessory} />
            <ClothingCard key={outfit.haut.id} clothing={outfit.haut} />
            <ClothingCard key={outfit.bas.id} clothing={outfit.bas} />
            <ClothingCard key={outfit.shoe.id} clothing={outfit.accessory} />
        </div>
        <Button label={'Generate another outfit'} handleClick={() => { window.location.reload() }} />
    </section>
}