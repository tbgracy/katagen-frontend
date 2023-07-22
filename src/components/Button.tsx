export default function Button({ label, handleClick }: { label: string | JSX.Element, handleClick?: () => void }) {
    return <button onClick={handleClick}>
        {label}
    </button>
}