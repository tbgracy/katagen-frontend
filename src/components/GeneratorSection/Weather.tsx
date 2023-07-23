import { useEffect, useState } from "react"

export default function Weather() {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [temperature, setTemperature] = useState();

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,rain&forecast_days=1`)
                .then(res => res.json())
               .then(result => {
                    setTemperature(result.hourly.temperature_2m[0]);
                });
        }
        fetchData();
    }, [lat, long]);

    return <article id="weather">
        {temperature} &deg; C
    </article>
}