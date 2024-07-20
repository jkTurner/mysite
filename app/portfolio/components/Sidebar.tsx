import { Button } from "@/components/ui/button"
import styles from "../portfolio.module.css"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiTwotoneCode } from "react-icons/ai"
import { PiListChecksFill } from "react-icons/pi";
import { BsChatHeartFill } from "react-icons/bs";
import { MdColorLens } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className={`pt-3 sticky top-2`}>
            <div>
            {/* <Command className="rounded-none border shadow-md bgSub xline"> */}
            <Command className={`${styles.command} rounded-none border-none`}>
                {/* <CommandInput placeholder="Type a command or search..." /> */}
                <CommandList>
                    {/* <CommandEmpty>No results found.</CommandEmpty> */}
                    <CommandGroup heading="Ares of Expertise">

                        <a href="#webdev">
                        <CommandItem className={styles.command_item}>
                            <AiTwotoneCode className="mr-2 h-6 w-6" />
                            <span>Web Development</span>
                        </CommandItem>
                        </a>

                        <a href="#pm">
                        <CommandItem className={styles.command_item}>
                            {/* <FaceIcon className="mr-2 h-4 w-4" /> */}
                            <PiListChecksFill className="mr-2 h-6 w-6" />
                            <span>Project Management</span>
                        </CommandItem>
                        </a>

                        <a href="#marketing">
                        <CommandItem className={styles.command_item}>
                            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                            <BsChatHeartFill className="mr-2 h-6 w-6" />
                            <span>Marketing</span>
                        </CommandItem>
                        </a>

                        <a href="#art">
                        <CommandItem className={styles.command_item}>
                            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
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