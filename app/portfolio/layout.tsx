import React from 'react';
import { ReactNode } from 'react';
import type { Metadata } from "next";
import styles from "./portfolio.module.css"
import Sidebar from './components/Sidebar';
import BottomMenu from './components/BottomMenu';
import { seoData } from '@/data/seoData';

export const metadata: Metadata = {
  title: `${seoData.portfolio_title}`,
  description: `${seoData.portfolio_des}`,
};

interface PortfolioLayoutProps {
  children: ReactNode;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({ children }) => {
  return (
    <div className="mx-auto w-[100%]">
        <div className={`${styles.layout}`}>
          <div className={`${styles.sidebar} w-full h-full`}>
            <Sidebar />
          </div>
          <main className="px-4">
            {children}
          </main>
          
        </div>
        <BottomMenu />
    </div>
  );
};

export default PortfolioLayout;

