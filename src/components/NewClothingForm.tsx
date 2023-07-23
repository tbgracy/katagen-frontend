import { SyntheticEvent, useContext, useEffect, useRef, useState } from "react"
import Button from "./Button"
import { FaTimes } from "react-icons/fa"
import { baseUrl } from "../services/constants";
import ClotheServices from "../services/clothesService";
import { ClipLoader } from "react-spinners";
import { ClotheContext } from "./context";

export default function NewClothingForm({ setDialogBox }: { setDialogBox: (dialogBox: HTMLDialogElement) => void }) {
    const [isLoading, setIsLoading] = useState(false);
    const { clothes, refreshClothingList } = useContext(ClotheContext);
    clothes;
    const dialogElement = useRef<HTMLDialogElement>(null);
    const formElement = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setDialogBox(dialogElement.current!);
    });

    function handleImagePreview(e: SyntheticEvent) {
        e.preventDefault();
    }

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        setIsLoading(true);
        const res = ClotheServices.save(formElement.current!);
        res.then(() => {
            setIsLoading(false);
            refreshClothingList();
            dialogElement.current?.close();
        })
    }

    return <dialog ref={dialogElement} id="new-clothing">
        <form ref={formElement} action={`${baseUrl}/clothes`} method="POST" onSubmit={handleSubmit}>
            <h2>Nouvelle pièce</h2>
            <img src="" alt="" />
            <div>
                <label htmlFor="image">Photo</label>
                <input type="file" name="image" id="image" accept="image/*" onChange={handleImagePreview} />
            </div>
            <div>
                <label htmlFor="label">Nom</label>
                <input type="text" name="label" id="label" />
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value="sport">Sport</option>
                    <option value="plage">Plage</option>
                    <option value="casual">Décontracté</option>
                    <option value="formel">Formel</option>
                </select>
            </div>
            <div>
                <label htmlFor="type">Catégorie</label>
                <select name="category" id="type">
                    <option value="haut">Haut</option>
                    <option value="bas">Bas</option>
                    <option value="shoe">Chaussure</option>
                    <option value="accessory">Accessoire</option>
                </select>
            </div>
            <div>
                <label htmlFor="weather-hot">Hot</label>
                <input type="radio" name="weather" id="weather-hot" value="hot" />
                <label htmlFor="weather-cold">Cold</label>
                <input type="radio" name="weather" id="weather-cold" value="cold" />
            </div>
            <div>
                <label htmlFor="colors">Colors</label>
                {/* <input type="text" name="hexcode" id="colors" /> */}
                <input type="color" name="hexcode" id="colors" />
            </div>
            <div id="action-container">
                {isLoading
                    ? <ClipLoader />
                    : <Button label={'Enregistrer'} />
                }
            </div>
        </form>
        <Button label={<FaTimes />} handleClick={() => dialogElement.current?.close()} />
    </dialog>
}