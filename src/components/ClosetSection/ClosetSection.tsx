import { useEffect, useMemo, useState } from "react";
import { FaPlus } from "react-icons/fa";

import Button from "../Button";
import ClothList from "./ClothList";
import NewClothingForm from "../NewClothingForm";
import { Clothing } from "../../types/clothing";
import ClotheServices from "../../services/clothesService";
import { ClotheContext } from "../context";
import { ClipLoader } from "react-spinners";

export default function ClosetSection() {
    const [dialogBox, setDialogBox] = useState<HTMLDialogElement | undefined>(undefined);
    const [clothes, setClothes] = useState<Array<Clothing>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const contextValue = useMemo(
        () => ({ clothes, refreshClothingList }),
        [clothes],
    );

    function toggleNewClothingForm() {
        if (dialogBox != undefined) {
            dialogBox.open ? dialogBox.close() : dialogBox.showModal();
        }
    }

    function refreshClothingList() {
        setIsLoading(true);
        const response = ClotheServices.getAllClothes();
        response.then((value) => {
            setIsLoading(false);
            setClothes(value);
        });
        clothes;

    }

    useEffect(() => {
        refreshClothingList();
    }, []);

    return <section id='closet'>
        <h2>Armoire</h2>
        <ClotheContext.Provider value={contextValue}>
            {isLoading
                ? <div className="loader-container"><ClipLoader /></div>
                : <ClothList clothes={contextValue.clothes} />
            }
            <Button label={<FaPlus />} handleClick={toggleNewClothingForm} />
            <NewClothingForm setDialogBox={(dia) => setDialogBox(dia)} />
        </ClotheContext.Provider>
    </section>
}