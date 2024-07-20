import React from 'react';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import styles from "./showcase.module.css";
import SideMenus from './components/SideMenus';
import TopMenus from './components/TopMenus';
import { AuthProvider } from '../api/components/AuthProvider';

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
                <div className={styles.side_menus}>
                    <SideMenus />
                </div>

                <main className={styles.children}>
                    <TopMenus />
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </main>

            </div>
        </div>
    );
};

export default ShowcaseLayout;

