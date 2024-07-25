import React from 'react';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import styles from "./contact.module.css"
import { AuthProvider } from '../api/components/AuthProvider';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Showcase",
    description: "A showcase of Jakkrit Turner's skills",
};

interface ShowcaseLayoutProps {
    children: ReactNode;
};

const ShowcaseLayout: React.FC<ShowcaseLayoutProps> = ({ children }) => {
    return (
        <div className="mx-auto w-[100%]">
            <div className={`${styles.layout}`}>

                <main className={`${styles.children}`}>
                    {children}
                    {/* <div className="flex justify-center mt-2 h-full bg-amber-700">
                        <div className="flex self-end">
                            <div className="chat chat-end self-start">
                                <div className="chat-bubble">Have a wonderful day!</div>
                            </div>
                            <div>
                            <Image
                                src="/images/contact/cute-cat.png"
                                alt="cute-cat"
                                height={200}
                                width={200}
                                priority
                                className={styles.cat_image}
                            />
                            </div>
                        </div>
                    </div> */}
                </main>

            </div>
        </div>
    );
};

export default ShowcaseLayout;

