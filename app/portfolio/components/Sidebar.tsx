import styles from "../portfolio.module.css"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { AiTwotoneCode } from "react-icons/ai"
import { PiListChecksFill } from "react-icons/pi";
import { BsChatHeartFill } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className={`pt-3 sticky top-2`}>
            <div>
            <Command className={`${styles.command} rounded-none border-none`}>
                <CommandList>
                    <CommandGroup heading="Ares of Expertise">

                        <a href="#webdev">
                        <CommandItem className={styles.command_item}>
                            <AiTwotoneCode className="mr-2 h-6 w-6" />
                            <span>Web Development</span>
                        </CommandItem>
                        </a>

                        <a href="#pm">
                        <CommandItem className={styles.command_item}>
                            <PiListChecksFill className="mr-2 h-6 w-6" />
                            <span>Project Management</span>
                        </CommandItem>
                        </a>

                        <a href="#marketing">
                        <CommandItem className={styles.command_item}>
                            <BsChatHeartFill className="mr-2 h-6 w-6" />
                            <span>Marketing</span>
                        </CommandItem>
                        </a>

                        <a href="#art">
                        <CommandItem className={styles.command_item}>
                            <MdColorLens className="mr-2 h-6 w-6" />
                            <span>Art</span>
                        </CommandItem>
                        </a>
                    </CommandGroup>
                </CommandList>
            </Command>
            </div>
        </div>
    )
}

export default Sidebar;