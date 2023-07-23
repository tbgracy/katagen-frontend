import { SyntheticEvent, useRef } from "react";
import Button from "../Button";

export default function GenerationForm(
    { temperature, handleGeneration }: {
        temperature: number,
        handleGeneration: (
            temparture: number,
            type: 'sport' | 'plage' | 'casual' | 'formel',
            useTemp: boolean
        ) => void
    }) {

    const useWeather = useRef<HTMLInputElement>(null);
    const typeInput = useRef<HTMLSelectElement>(null);

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        const useWeatherValue = useWeather.current?.value == 'on' ? true : false;
        handleGeneration(temperature, typeInput.current!.value as 'sport' | 'plage' | 'casual' | 'formel', useWeatherValue);
    }

    return <form onSubmit={handleSubmit} id="generation-form">
        <div>
            <label htmlFor="weather-input">Prendre en compte le temps qu'il fait </label>
            <input ref={useWeather} type="checkbox" name="weather" id="weather-input" />
        </div>
        <div>
            <label htmlFor="type-input">Type de tenue</label>
            <select ref={typeInput} defaultValue={'sport'} name="type" id="type-input">
                <option value="sport">Sport</option>
                <option value="plage">Plage</option>
                <option value="casual" selected>Décontracté</option>
                <option value="formel">Formel</option>
            </select>
        </div>
        <Button label={'Generate outfit'} />
    </form>
}