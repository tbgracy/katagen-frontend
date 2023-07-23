import { Clothing } from "../../types/clothing";
import Button from "../Button";
import Colors from "./Colors";
import ClotheServices from "../../services/clothesService";

import { FaTrash } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaSnowflake, FaSun, FaRunning, FaWater, FaGlassMartini, FaGlasses } from "react-icons/fa";
import { useContext, useState } from "react";
import { ClotheContext } from "../context";
import { ClipLoader } from "react-spinners";

export default function ClothingCard({ clothing }: { clothing: Clothing }) {
    const { clothes, refreshClothingList } = useContext(ClotheContext);
    const [isDeleting, setIsDeleting] = useState(false);

    clothes;
    console.log(clothing.image);

    const typeIcons = {
        'sport': <FaRunning />,
        'plage': <FaWater />,
        'casual': <FaGlassMartini />,
        'formel': <FaGlasses />,
    };

    const categoryIcons = {
        'haut': <FaTshirt />,
        'bas': '👖',
        'shoe': '👞',
        'accessory': '📿',
    };

    async function handleDelete() {
        setIsDeleting(true);
        const result = await ClotheServices.delete(clothing);
        setIsDeleting(false);
        if (result) {
            refreshClothingList();
        } else {
            alert("Problème lors de la suppression");
        }
    }

    const deleteButtonContent = isDeleting ? <ClipLoader color="white" /> : <FaTrash />;

    return <article className="clothing-card">
        <img src={clothing.image} alt="" />
        <Colors data={[clothing.hexcode!]} />
        <Button label={deleteButtonContent} handleClick={handleDelete} />
        <ul className="icons">
            <li className="category" title={clothing.category}>
                {categoryIcons[clothing.category]}
            </li>
            <li className="type" title={clothing.type}>
                {typeIcons[clothing.type]}
            </li>
            <li className="weather">
                {clothing.hot ? <FaSun /> : <FaSnowflake />}
            </li>
        </ul>
    </article>
}
