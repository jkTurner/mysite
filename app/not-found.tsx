import Image from "next/image";


const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-[1280px] mx-auto minH">
            <h1 className="text-center mb-2">404 | Page Not Found</h1>
            <div className="flex flex-col max-w-[540px] text-center gap-3">
                <h2>Meow!</h2>
                <p>Oh no! It seems you&apos;ve wandered off the beaten path. This page is lost in the internet&apos;s alleyways, just like a curious cat.</p>
                <p className="mb-4">Remember, even the best of us sometimes chase the wrong mouse!</p>
            </div>
            <Image
                src="/images/404/cat-peeping.gif"
                alt="Cat Peeping GIF"
                width={300}
                height={300}
                unoptimized
            />
        </div>
    )
}

export default NotFound;