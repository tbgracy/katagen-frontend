import { Clothing } from "../../types/clothing";
import Button from "../Button";
import Colors from "./Colors";
import ClotheServices from "../../services/clothesService";

import { FaTrash } from "react-icons/fa";
import { FaTshirt, FaHatCowboy, FaShoePrints } from "react-icons/fa";
import { FaSnowflake, FaSun } from "react-icons/fa";
import { useContext, useState } from "react";
import { ClotheContext } from "../context";
import { ClipLoader } from "react-spinners";

export default function ClothingCard({ clothing }: { clothing: Clothing }) {
    const { clothes, refreshClothingList } = useContext(ClotheContext);
    const [isDeleting, setIsDeleting] = useState(false);

    clothes;

    // const typeIcons = {
    //     'sport': null,
    //     'plage': null,
    //     'casual': null,
    //     'formel': null,
    // };

    const categoryIcons = {
        'haut': <FaTshirt />,
        'bas': <FaHatCowboy />,
        'shoe': <FaShoePrints />,
        'accessory': <FaHatCowboy />,
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
        {categoryIcons[clothing.category]}
        {clothing.hot ? <FaSun /> : <FaSnowflake />}
    </article>
}
