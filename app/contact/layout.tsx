import React from 'react';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import styles from "./contact.module.css"
import { seoData } from '@/data/seoData';

export const metadata: Metadata = {
    title: `${seoData.contact_title}`,
    description: `${seoData.contact_des}`,
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
                </main>
            </div>
        </div>
    );
};

export default ShowcaseLayout;