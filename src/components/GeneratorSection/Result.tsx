import { Outfit } from "../../types/outfit"
import Button from "../Button"
import ClothingCard from "../ClosetSection/ClothingCard";

export default function Result({ outfit }: { outfit: Outfit }) {

    return <section id="generation-result">
        <div className="result-list">
            <div id="accessory">
                <ClothingCard key={outfit.accessory.id} clothing={outfit.accessory} />
            </div>
            <div id="haut">
                <ClothingCard key={outfit.haut.id} clothing={outfit.haut} />
            </div>
            <div id="bas">
                <ClothingCard key={outfit.bas.id} clothing={outfit.bas} />
            </div>
            <div id="shoe">
                <ClothingCard key={outfit.shoe.id} clothing={outfit.accessory} />
            </div>
        </div>
        <Button label={'Generate another outfit'} handleClick={() => { window.location.reload() }} />
    </section>
}