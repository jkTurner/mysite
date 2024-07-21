"use client";

import React, { useState } from 'react';
import styles from "../about.module.css"

interface ArtSkills {
    id: number;
    skill: string;
    description: string;
}

const artSkillData: ArtSkills[] = [
    {
        id: 1,
        skill: 'Digital Painting',
        description: 'Creating digital artwork using digital tools and software, combining traditional painting techniques with modern technology.',
        // documentUrl: '/files/cert/itil.pdf', 
    },
    {
        id: 2,
        skill: 'UX/UI Design',
        description: 'Designing user experiences and interfaces that are intuitive, engaging, and visually appealing, focusing on user satisfaction, interaction, and functionality.',
    },
    {
        id: 3,
        skill: 'Interface Design',
        description: 'Crafting the visual layout and elements of software interfaces to ensure usability, accessibility, and a pleasant user experience.',
    },
    {
        id: 4,
        skill: 'Print Design',
        description: "Designing materials for print media, including brochures, posters, and business cards, with a focus on layout, typography, and visual impact.",
    },
    {
        id: 5,
        skill: 'Video Editing',
        description: 'Editing and assembling video footage to create compelling and polished visual stories, including the addition of effects, transitions, and audio.',
    },
];

const ArtSkills = () => {

    return (
        <div className="mb-5 mt-3">
            {/* <h3 className="font-bold mb-4">Credentials:</h3> */}
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
                        {artSkillData.map((artSkill, index) => (
                            <tr key={artSkill.id} className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                                <th>{index + 1}</th>
                                <td>{artSkill.skill}</td>
                                <td>{artSkill.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArtSkills;
