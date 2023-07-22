import { useEffect, useState } from "react"

export default function Weather() {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            // console.log(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,rain&forecast_days=1`);
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,rain&forecast_days=1`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                    console.log(result);
                });
        }
        fetchData();
    }, [lat, long]);

    return <article id="weather">
        long: {lat} lat : {long}
        {JSON.stringify(data)}
    </article>
}