import { Controls } from "../components/sections/Controls"
import { Deck } from "../components/sections/Deck"
import { Header } from "../components/sections/Header"

const Page = () => {
    return (
        <>
            <Header />
            <main className="page-container">
                <Controls />
                <Deck />
            </main>
        </>
    )
}

export default Page