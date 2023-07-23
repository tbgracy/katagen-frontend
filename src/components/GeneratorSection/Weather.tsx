import { useEffect, useState } from "react"
import { FaThermometerThreeQuarters } from "react-icons/fa";

export default function Weather() {
    const [temperature, setTemperature] = useState();

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

    return <article id="weather">
        <FaThermometerThreeQuarters />  {temperature} &deg; C
    </article>
}