import MasonryGrid from './components/MasonryGrid';

const ArtPage = () => {
    return (
        <div>
            <div className="flex flex-col gap-4 mb-4">
                <h1 className="text-[var(--jkAccent)]">Art Gallery</h1>
                <p>Welcome to my artwork showcase! Here, you&#39;ll find a diverse collection of my creative works across various categories. From detailed digital paintings to print designs, web design, logo design, and photography. This portfolio highlights a range of artistic skills and projects. Feel free to check them out and I hope you enjoy exploring the gallery.</p>
            </div>
            <MasonryGrid />
        </div>
    )
}

export default ArtPage;

