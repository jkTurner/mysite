import { Playfair_Display } from "next/font/google";
import { showcaseText } from "./components/showcaseText";
import Findings from "./components/Findings";

const playfair = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], 
    display: 'swap',
});

const ShowcasePage = () => {
    return (
        <div className="flex flex-col gap-6">
            <h1 className={`${playfair.className} text-4xl font-medium textHero`}>Welcome to the <span className="text-jkAccent">Showcase</span></h1>
            <p>{showcaseText.intro}</p>

            <hr className="xuderline" />

            <h2 className="font-medium">What you&apos;ll find :</h2>
            <Findings />
            <hr className="xuderline" />
            
            <h2 className="font-medium">Try It Out</h2>
            <p>{showcaseText.try_it}</p>

            <h2 className="font-medium">Get Started</h2>
            <p>{showcaseText.lets_go}</p>
        </div>
    )
}

export default ShowcasePage;