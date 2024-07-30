import React from 'react';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import { seoData } from '@/data/seoData';

export const metadata: Metadata = {
    title: `${seoData.about_title}`,
    description: `${seoData.about_des}`,
};

interface ShowcaseLayoutProps {
    children: ReactNode;
};

const ShowcaseLayout: React.FC<ShowcaseLayoutProps> = ({ children }) => {
    return (
        <>
            {children}
        </>
    );
};

export default ShowcaseLayout;

