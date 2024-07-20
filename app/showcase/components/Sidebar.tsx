import { Button } from "@/components/ui/button"
import styles from "../showcase.module.css"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command";

import { RiKeyFill } from "react-icons/ri";
import { HiDatabase } from "react-icons/hi";
import { IoTimeSharp } from "react-icons/io5";
import { IoFileTrayFullSharp } from "react-icons/io5";
import { SiGraphql } from "react-icons/si";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import Link from "next/link";
  

const Sidebar = () => {
    return (
        <div className={`pt-3 sticky top-2`}>
            <div>
            {/* <Command className="rounded-none border shadow-md bgSub xline"> */}
            <Command className={`${styles.command} rounded-none border-none`}>
                {/* <CommandInput placeholder="Type a command or search..." /> */}
                <CommandList>
                    {/* <CommandEmpty>No results found.</CommandEmpty> */}
                    <CommandGroup heading="Showcase">

                        <a href="#webdev">
                        <CommandItem className={styles.command_item}>
                            <Collapsible>
                                <CollapsibleTrigger className="text-sm flex flex-row items-center">
                                    <RiKeyFill className="mr-2 h-6 w-6" />
                                    Authentication
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <Link href="/showcase/auth/register">
                                        Register
                                    </Link>
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    <Link href="/showcase/auth/login">
                                        Login
                                    </Link>
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    Forgot Password
                                </CollapsibleContent>
                            </Collapsible>
                        </CommandItem>
                        </a>

                        <a href="#pm">
                        <CommandItem className={styles.command_item}>
                            <Collapsible>
                                <CollapsibleTrigger className="text-sm flex flex-row items-center">
                                    <HiDatabase className="mr-2 h-6 w-6" />
                                    API / Fetch / Display
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    Create
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    Read
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    Update
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    Delete
                                </CollapsibleContent>
                            </Collapsible>
                        </CommandItem>
                        </a>

                        <a href="#marketing">
                        <CommandItem className={styles.command_item}>
                            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                            <IoTimeSharp className="mr-2 h-6 w-6" />
                            <span>Real-time</span>
                        </CommandItem>
                        </a>

                        <a href="#art">
                        <CommandItem className={styles.command_item}>
                            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                            <IoFileTrayFullSharp className="mr-2 h-6 w-6" />
                            <span>State Management</span>
                        </CommandItem>
                        </a>

                        <a href="#art">
                        <CommandItem className={styles.command_item}>
                            {/* <RocketIcon className="mr-2 h-4 w-4" /> */}
                            <SiGraphql className="mr-2 h-6 w-6" />
                            <span>GraphQL</span>
                        </CommandItem>
                        </a>

                        <a href="#art">
                        <CommandItem className={styles.command_item}>
                            <Collapsible className="">
                                <CollapsibleTrigger className="text-sm flex flex-row items-center"><SiGraphql className="mr-2 h-6 w-6" /> GraphQL</CollapsibleTrigger>
                                <CollapsibleContent>
                                    Basic
                                </CollapsibleContent>
                                <CollapsibleContent>
                                    Intermediet
                                </CollapsibleContent>
                            </Collapsible>
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