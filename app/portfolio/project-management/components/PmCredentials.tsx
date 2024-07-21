"use client";
import React, { useState } from 'react';
import styles from "./pm.module.css"

interface Credential {
    id: number;
    skill: string;
    description: string;
}

const credentialsData: Credential[] = [
    {
        id: 1,
        skill: 'Bachelor of Science in Business Administration with a concentration in Project Management',
        description: "Purdue University Global",
        // documentUrl: '/files/cert/itil.pdf', 
    },
    {
        id: 2,
        skill: 'ITIL Foundation Certificate in IT Service Management',
        description: "PeopleCert",
    },
];

const PmCredentials = () => {

    return (
        <div className="mb-5 mt-3">
            {/* <h3 className="font-bold mb-4">Credentials:</h3> */}
            <div className="overflow-x-auto">
                <table className={`table`}>
                    <thead>
                        <tr className="border-line">
                            <th></th>
                            <th>Title</th>
                            <th>Issuer</th>
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

export default PmCredentials;
