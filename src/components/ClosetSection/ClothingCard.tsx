import { Clothing } from "../../types/clothing";
import Button from "../Button";

import { FaTrash } from "react-icons/fa";
import { FaTshirt, FaHatCowboy, FaShoePrints } from "react-icons/fa";
import { FaSnowflake, FaSun } from "react-icons/fa";
import Colors from "./Colors";

export default function ClothingCard({clothing}: {clothing: Clothing}) {
    const typeIcons = {
        'sport': null,
        'plage': null,
        'casual': null,
        'formel': null,
    };
    const categoryIcons = {
        'haut': <FaTshirt />,
        'bas': <FaHatCowboy />,
        'shoe': <FaShoePrints />,
        'accessory': <FaHatCowboy />,
    };

    return <article className="clothing-card">
        <img src={clothing.image} alt="" />
        <Colors data={clothing.colors}/>
        <Button label={<FaTrash />}/>
        {categoryIcons[clothing.category]}
        {clothing.hot ? <FaSun /> : <FaSnowflake />}
    </article>
}
