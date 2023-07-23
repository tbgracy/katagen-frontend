import { Clothing } from "../../types/clothing";
import { Outfit } from "../../types/outfit"
import Button from "../Button"
import ClothingCard from "../ClosetSection/ClothingCard";

export default function Result({ outfit }: { outfit: Outfit }) {
    const cls: Array<Clothing> = [];
    if (outfit.accessory) cls.push(outfit.accessory);
    if (outfit.haut) cls.push(outfit.haut);
    if (outfit.bas) cls.push(outfit.bas);
    if (outfit.shoe) cls.push(outfit.shoe);
    const clsElement: Array<JSX.Element> = [];

    const ids = {
        'accessory': 'accessory',
        'haut': 'haut',
        'bas': 'bas',
        'shoe': 'shoe',
    }

    for (let ankanjo of cls) {
        if (typeof (ankanjo) !== typeof ("")) {
            if (!ankanjo.image.startsWith('https://nomeniavojoe.pythonanywhere.com/')){
                ankanjo.image = 'https://nomeniavojoe.pythonanywhere.com/' + ankanjo.image;
            }
            clsElement.push(
                <div id={ids[ankanjo.category]}>
                    <ClothingCard key={ankanjo.id} clothing={ankanjo} />
                </div>
            );
        }
    }

    return <section id="generation-result">
        <div className="result-list">
            {clsElement}

        </div>
        <Button label={'Générer une autre tenue'} handleClick={() => { window.location.reload() }} />
    </section>
}