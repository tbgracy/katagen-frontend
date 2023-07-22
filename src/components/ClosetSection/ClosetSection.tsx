import { Clothing } from "../../types/clothing";
import Button from "../Button";
import { FaPlus } from "react-icons/fa";
import ClothList from "./ClothList";
import { useEffect, useRef, useState } from "react";
import NewClothingForm from "../NewClothingForm";
import ClotheServices from "../../services/clothesService";

const clothes: Array<Clothing> = [
    {
        id: 2,
        image: 'https://placehold.co/600x400/png',
        type: 'sport',
        category: 'haut',
        hot: false,
        colors: ['blue', 'orange'],
    },
    {
        id: 3,
        image: 'https://placehold.co/600x400/png',
        type: 'sport',
        category: 'haut',
        hot: true,
        colors: ['blue', 'teal', 'yellow'],
    },
    {
        id: 4,
        image: 'https://placehold.co/600x400/png',
        type: 'sport',
        category: 'haut',
        hot: false,
        colors: ['blue', 'orange'],
    },
    {
        id: 5,
        image: 'https://placehold.co/600x400/png',
        type: 'sport',
        category: 'haut',
        hot: false,
        colors: ['blue', 'orange'],
    }
];

export default function ClosetSection() {
    const [dialogBox, setDialogBox] = useState<HTMLDialogElement | undefined>(undefined);

    function toggleNewClothingForm() {
        if (dialogBox != undefined) {
            dialogBox.open ? dialogBox.close() : dialogBox.showModal();
        }
    }

    // const [clothes, setClothes] = useState<Array<Clothing>>([]);

    // useEffect(() => {
    //     const result = ClotheServices.getAllClothes();
    //     result.then((value) => { setClothes(value) });
    // }, []);

    return <section id='closet'>
        <h2>Closet</h2>
        <ClothList clothes={clothes} />
        <Button label={<FaPlus />} handleClick={toggleNewClothingForm} />
        <NewClothingForm setDialogBox={(dia) => setDialogBox(dia)} />
    </section>
}