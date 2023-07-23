import { useState } from "react";
import { Outfit } from "../../types/outfit";
import ClotheServices from "../../services/clothesService";
import Result from "./Result";
import GenerationForm from "./GenerationForm";
import { ClipLoader } from "react-spinners";

export default function GeneratorSection() {
    const [outfit, setOutfit] = useState<Outfit>();
    const [isLoading, setIsLoading] = useState(false);

    function handleGeneration(
        type: 'sport' | 'plage' | 'casual' | 'formel',
        useTemp: boolean,
    ) {
        setIsLoading(true);
        const response = ClotheServices.generate(
            type,
            useTemp,
        )
        setIsLoading(false);
        response.then((value) => setOutfit(value));
    }

    return <section id="generator">
        <h2>Générateur</h2>
        {outfit != undefined
            ? <Result outfit={outfit} />
            : isLoading ? <ClipLoader /> : <GenerationForm handleGeneration={handleGeneration} />
        }
    </section>
}