import { SyntheticEvent, useEffect, useRef } from "react"
import Button from "./Button"
import { FaTimes } from "react-icons/fa"
import { baseUrl } from "../services/constants";

export default function NewClothingForm({ setDialogBox }: { setDialogBox: (dialogBox: HTMLDialogElement) => void }) {
    const dialogElement = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        setDialogBox(dialogElement.current!);
    });

    function handleImagePreview(e: SyntheticEvent) {
    }

    return <dialog ref={dialogElement} id="new-clothing">
        <form action={`${baseUrl}/clothes`} method="POST">
            <h2>Nouvelle pièce</h2>
            <img src="" alt="" />
            <label htmlFor="image">Photo</label>
            <input type="file" name="image" id="image" accept="image/*" onChange={handleImagePreview} />
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
                <option value="sport">Sport</option>
                <option value="plage">Plage</option>
                <option value="casual">Décontracté</option>
                <option value="formel">Formel</option>
            </select>
            <ul>
                <li>
                    <label htmlFor="weather-hot">Hot</label>
                    <input type="radio" name="weather" id="weather-hot" />
                </li>
                <li>
                    <label htmlFor="weather-cold">Cold</label>
                    <input type="radio" name="weather" id="weather-cold" />
                </li>
            </ul>
            <label htmlFor="colors">Colors</label>
            <input type="text" name="colors" id="colors" />
            <Button label={'Enregistrer'} />
        </form>
        <Button label={<FaTimes />} handleClick={() => dialogElement.current?.close()} />
    </dialog>
}