import Hero from "./components/hero/Hero";
import Highlights from "./components/highlights/Highlights";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-start">
      <Hero />
      <Highlights />
    </div>
  );
}
