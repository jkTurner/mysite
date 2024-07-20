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
        skill: 'Viral Marketing and How to Craft Contagious Content',
        description: "University of Pennsylvania",
        // documentUrl: '/files/cert/itil.pdf', 
    },
    {
        id: 2,
        skill: 'Marketing Analytics',
        description: "University of Virginia",
    },
];

const MarketingCredentials = () => {

    return (
        <div className="mb-5 mt-3">
            {/* <h3 className="font-bold mb-4">Credentials:</h3> */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Issuer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {credentialsData.map((credential, index) => (
                            <tr key={credential.id} className="hover">
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

export default MarketingCredentials;
