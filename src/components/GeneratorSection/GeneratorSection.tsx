import { useState } from "react";
import { Clothing } from "../../types/clothing";
import Button from "../Button";
import Weather from "./Weather";

type Outfit = {
    body: Clothing,
    legs: Clothing,
    feet: Clothing,
    accessory: Clothing,
}

function Result({ outfit }: { outfit: Outfit }) {
    return <section id="result">
        <h3>Result</h3>
        <p>
            {JSON.stringify(outfit)}
        </p>
        <Button label={'Generate another outfit'} handleClick={() => { }} />
    </section>
}

function GenerationForm({ getOutfit }: { getOutfit: () => void }) {

    return <form action="">
        <label htmlFor="weather-input">Prendre en compte le temps qu'il fait </label>
        <input type="checkbox" name="weather" id="weather-input" />
        <label htmlFor="type-input">Type de tenue</label>
        <select defaultValue={'sport'} name="type" id="type-input">
            <option value="sport">Sport</option>
            <option value="plage">Plage</option>
            <option value="casual" selected>Décontracté</option>
            <option value="formel">Formel</option>
        </select>
        <Button label={'Generate outfit'} handleClick={getOutfit} />
    </form>
}

export default function GeneratorSection() {
    const [outfit, setOutfit] = useState<Outfit>();

    function getOutfit() {
        setOutfit({
            body: {
                id: 1,
                image: 'https://placehold.co/600x400/png',
                type: 'sport',
                category: 'haut',
                hot: false,
                colors: ['blue', 'orange'],
            },
            legs: {
                id: 2,
                image: 'https://placehold.co/600x400/png',
                type: 'sport',
                category: 'haut',
                hot: false,
                colors: ['blue', 'orange'],
            },
            feet: {
                id: 3,
                image: 'https://placehold.co/600x400/png',
                type: 'sport',
                category: 'haut',
                hot: false,
                colors: ['yellow', 'gray'],
            },
            accessory: {
                id: 4,
                image: 'https://placehold.co/600x400/png',
                type: 'sport',
                category: 'haut',
                hot: false,
                colors: ['blue', 'teal'],
            },
        });
    }

    return <section id="generator">
        <h2>Générateur</h2>
        <Weather />
        {outfit != undefined ? <Result outfit={outfit} /> : <GenerationForm getOutfit={getOutfit} />}
    </section>
}