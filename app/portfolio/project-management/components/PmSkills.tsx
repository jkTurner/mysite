"use client";

import React, { useState } from 'react';

interface Credential {
    id: number;
    skill: string;
    description: string;
}

const credentialsData: Credential[] = [
    {
        id: 1,
        skill: 'IT Service Management',
        description: 'Utilizing best practices from frameworks like ITIL to align IT services with business needs, ensuring efficient and effective service delivery.',
    },
    {
        id: 2,
        skill: 'Agile Methodologies',
        description: 'Implementing agile practices to improve flexibility, speed, and quality of project delivery.',
    },
    {
        id: 3,
        skill: 'Time Management',
        description: 'Planning and controlling how hours are allocated in a day to effectively accomplish project goals.',
    },
    {
        id: 4,
        skill: 'Resource Management',
        description: "Efficient and effective deployment and allocation of an organization's resources when and where they are needed.",
    },
    {
        id: 5,
        skill: 'Communication',
        description: 'Conveying information to team members and stakeholders clearly and effectively.',
    },
    {
        id: 6,
        skill: 'Risk Management',
        description: "Identifying, assessing, and controlling threats to an organization's capital and earnings.",
    },
    {
        id: 7,
        skill: 'Budgeting',
        description: "Planning and controlling the finances of a project, ensuring completion within the approved budget.",
    },
    {
        id: 8,
        skill: 'Team Leadership',
        description: 'Leading a team towards achieving a common goal, including motivating team members and resolving conflicts.',
    },
    {
        id: 9,
        skill: 'Problem Solving',
        description: 'Finding solutions to difficult or complex issues that arise during a project.',
    },
    {
        id: 10,
        skill: 'Quality Management',
        description: "Ensuring that a project's outputs meet the required standards and satisfy customer expectations.",
    },
    {
        id: 11,
        skill: 'Stakeholder Management',
        description: 'Implementing agile practices to improve flexibility, speed, and quality of project delivery.',
    },
];

const PmSkills = () => {

    return (
        <div className="mb-5 mt-3">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="border-line">
                            <th></th>
                            <th>Skill</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {credentialsData.map((credential, index) => (
                            <tr key={credential.id} className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                                <th>{index + 1}</th>
                                <td>{credential.skill}</td>
                                <td>{credential.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PmSkills;
