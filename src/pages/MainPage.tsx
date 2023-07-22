import Generator from "../components/GeneratorSection"
import Closet from "../components/ClosetSection"
import Navbar from "../components/Navbar"

export default function MainPage() {
    return <>
        <Navbar />
        <main>
            <Closet />
            <Generator />
        </main>
    </>
}