import { Clothing } from "../../types/clothing";
import ClothingCard from "./ClothingCard";

export default function ClothList({ clothes }: { clothes: Array<Clothing> }) {
    const clothingCards = clothes.map((clothing) => {
        return <ClothingCard key={clothing.id} clothing={clothing} />
    });

    return <div id='clothing-list'>
        {clothingCards}
    </div>
}