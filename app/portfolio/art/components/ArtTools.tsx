"use client";

import React, { useState } from 'react';
import styles from "../about.module.css"

interface ArtTools {
    id: number;
    skill: string;
    description: string;
}

const artToolsData: ArtTools[] = [
    {
        id: 1,
        skill: 'Adobe Photoshop',
        description: 'My most powerful digital art tool for image editing, graphic design, and digital painting.',
        // documentUrl: '/files/cert/itil.pdf', 
    },
    {
        id: 2,
        skill: 'Figma',
        description: 'A collaborative interface design tool used for creating user interfaces, wireframes, and prototypes with real-time collaboration.',
    },
    {
        id: 3,
        skill: 'Wondershare Filmora',
        description: 'A user-friendly video editing software that allows for easy editing, adding effects, transitions, and audio to create polished videos.',
    },
    {
        id: 4,
        skill: 'CapCut',
        description: "A versatile video editing app known for its intuitive interface and features for creating and editing videos on mobile devices.",
    },
];

const ArtTools = () => {

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
                        {artToolsData.map((artTool, index) => (
                            <tr key={artTool.id} className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                                <th>{index + 1}</th>
                                <td>{artTool.skill}</td>
                                <td>{artTool.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ArtTools;
