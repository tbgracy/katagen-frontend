export default function Colors({ data }: { data: Array<string> }) {
    const colorElements = data.map(
        (color, i) => <li key={i}><span className="color-item" style={{ backgroundColor: color }}></span></li>
    );

    return <ul className="color-container">
        {colorElements}
    </ul>
}