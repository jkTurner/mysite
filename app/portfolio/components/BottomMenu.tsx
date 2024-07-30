import { AiTwotoneCode } from "react-icons/ai"
import { PiListChecksFill } from "react-icons/pi";
import { BsChatHeartFill } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";
import styles from "../portfolio.module.css"

const BottomMenu = () => {
    return (
        <div className={styles.bottom_menu}>
            <div className="btm-nav z-10 h-[70px]">

                <button>
                    <a href="#webdev">
                        <div className="flex flex-row items-center">
                            <AiTwotoneCode className="mr-2 h-6 w-6" />
                            <span className="text-xs">Web Development</span>
                        </div>
                    </a>
                </button>

                <button>
                    <a href="#pm">
                        <div className="flex flex-row items-center">
                            <PiListChecksFill className="mr-2 h-6 w-6" />
                            <span className="text-xs">Project Management</span>
                        </div>
                    </a>
                </button>

                <button>
                    <a href="#marketing">
                        <div className="flex flex-row items-center">
                        <BsChatHeartFill className="mr-2 h-6 w-6" />
                        <span className="text-xs">Marketing</span>
                        </div>
                    </a>
                </button>

                <button>
                    <a href="#art">
                        <div className="flex flex-row items-center">
                            <MdColorLens className="mr-2 h-6 w-6" />
                            <span className="text-xs">Art</span>
                        </div>
                    </a>
                </button>

            </div>
        </div>
    )
}

export default BottomMenu;