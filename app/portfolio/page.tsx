import React from 'react';
import WebDev from './web-dev/WebDev';
import ProjectManagement from './project-management/ProjectManagement';
import Marketing from './marketing/Marketing';
import Art from './art/Art';

const PortfolioPage: React.FC = () => {

    return (
        <div className="flex flex-col">
            <WebDev />
            <ProjectManagement />
            <Marketing />
            <Art />
        </div>
    );
};
export default PortfolioPage;

