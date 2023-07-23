import { useEffect, useState } from "react";
import { Outfit } from "../../types/outfit";
import ClotheServices from "../../services/clothesService";
import { FaThermometerThreeQuarters } from "react-icons/fa";
import Result from "./Result";
import GenerationForm from "./GenerationForm";
import { ClipLoader } from "react-spinners";

export default function GeneratorSection() {
    const [outfit, setOutfit] = useState<Outfit>();
    const [temperature, setTemperature] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let lat = 0;
        let long = 0;
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
            });

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,rain&forecast_days=1`)
                .then(res => res.json())
                .then(result => {
                    setTemperature(result.hourly.temperature_2m[0]);
                });
        }
        fetchData();
    }, []);

    function handleGeneration(
        temparture: number,
        type: 'sport' | 'plage' | 'casual' | 'formel',
        useTemp: boolean,
    ) {
        setIsLoading(true);
        const response = ClotheServices.generate(
            temparture,
            type,
            useTemp,
        )
        setIsLoading(false);
        response.then((value) => setOutfit(value));
    }

    return <section id="generator">
        <h2>Générateur</h2>
        <article id="weather">
            <FaThermometerThreeQuarters />  {temperature} &deg; C
        </article>
        {outfit != undefined
            ? <Result outfit={outfit} />
            : isLoading ? <ClipLoader /> : <GenerationForm temperature={temperature} handleGeneration={handleGeneration} />
        }
    </section>
}