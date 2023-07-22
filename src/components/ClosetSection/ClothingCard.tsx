import { Clothing } from "../../types/clothing";
import Button from "../Button";

import { FaTrash } from "react-icons/fa";
import Colors from "./Colors";

export default function ClothingCard({clothing}: {clothing: Clothing}) {
    return <article className="clothing-card">
        <img src={clothing.image} alt="" />
        <Colors data={clothing.colors}/>
        <Button label={<FaTrash />}/>
    </article>
}
