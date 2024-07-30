import Link from "next/link";
import Navbar from "../navbar/Navbar";

const Header = () => {
    return (
        <div className="max-w-[100%] bgHeader">
            
            <div className="max-w-[1280px] mx-auto px-5 py-6 h-[85px] flex items-center justify-between">

                <div>
                    <Link href="/">
                        <div className="font-light italic tracking-wider leading-5 text-white">JAKKRIT</div>
                        <div className="font-bold italic leading-none text-white">TURNER</div>
                    </Link>
                </div>

                <div className="font-light text-right text-xs bg-vio">
                    <Navbar />
                </div>

            </div>
        </div>
    )
}

export default Header;