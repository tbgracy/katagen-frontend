import { useEffect, useState } from "react"

export default function Weather() {
    const [lat, setLat] = useState<number>();
    const [long, setLong] = useState<number>();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPosition = async () => {
            navigator.geolocation.getCurrentPosition(function (position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=9c9b0b0b0b0b0b0b0b0b0b0b0b0b0b0b`)
                .then(res => res.json())
                .then(result => {
                    setData(result);
                    console.log(result);
                });
        }
        fetchPosition();
    }, [lat, long]);

    return <article id="weather">
        long: {lat} lat : {long}
    </article>
}