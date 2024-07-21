"use client";

import React, { useState } from 'react';
import CertModal from './CertModal';
import styles from "../about.module.css"

interface Credential {
    id: number;
    title: string;
    issuer: string;
    documentUrl: string;
}

const credentialsData: Credential[] = [
    {
        id: 1,
        title: 'ITIL Foundation',
        issuer: 'People Cert',
        documentUrl: '/files/cert/itil.pdf', // Replace with actual URL
    },
    {
        id: 2,
        title: 'Introduction to Artificial Intelligence',
        issuer: 'IBM',
        documentUrl: '/files/cert/ai.pdf', // Replace with actual URL
    },
    {
        id: 3,
        title: 'Marketing Analytics',
        issuer: 'University of Virginia',
        documentUrl: '/files/cert/marketing-analytics.pdf', // Replace with actual URL
    },
    {
        id: 4,
        title: 'Viral Marketing and How to Craft Contagious Content',
        issuer: 'Wharton University of Pennsylvania',
        documentUrl: '/files/cert/viral-marketing.pdf', // Replace with actual URL
    },
];

const Credentials = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCredential, setSelectedCredential] = useState<Credential | null>(null);

    const handleViewClick = (credential: Credential) => {
        setSelectedCredential(credential);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCredential(null);
    };

    return (
        <div className="mb-5 mt-3">
            <h3 id="credentials" className="font-bold mb-4 ml-3">Credentials:</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="border-line">
                            <th></th>
                            <th>Title</th>
                            <th>Issuer</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {credentialsData.map((credential, index) => (
                            <tr key={credential.id} className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                                <th>{index + 1}</th>
                                <td>{credential.title}</td>
                                <td>{credential.issuer}</td>
                                <td>
                                    <button
                                        className={`btn btn-active btn-sm ${styles.about_buttons}`}
                                        onClick={() => handleViewClick(credential)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <CertModal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedCredential && (
                    <div>
                        <h2 className="text-lg font-bold mb-4">{selectedCredential.title}</h2>
                        <embed src={selectedCredential.documentUrl} type="application/pdf" width="600" height="400" />
                    </div>
                )}
            </CertModal>
        </div>
    );
};

export default Credentials;





// <div className="mb-5 mt-10">
//     <div className="overflow-x-auto">
//         <table className="table">
//             {/* head */}
//             <thead>
//             <tr>
//                 <th></th>
//                 <th>Title</th>
//                 <th>Issuer</th>
//                 <th></th>
//             </tr>
//             </thead>
//             <tbody>
//             {/* row 1 */}
//             <tr className="hover">
//                 <th>1</th>
//                 <td>ITIL Foundation</td>
//                 <td>People Cert</td>
//                 <td>View</td>
//             </tr>
//             {/* row 2 */}
//             <tr className="hover">
//                 <th>2</th>
//                 <td>Introduction to Artificial Intelligence</td>
//                 <td>IBM</td>
//                 <td>View</td>
//             </tr>
//             {/* row 3 */}
//             <tr className="hover">
//                 <th>3</th>
//                 <td>Marketing Analytics</td>
//                 <td>University of Virginia</td>
//                 <td>View</td>
//             </tr>
//             {/* row 4 */}
//             <tr className="hover">
//                 <th>4</th>
//                 <td>Viral Marketing and How to Craft Contagious Content</td>
//                 <td>Wharton University of Pensylvania</td>
//                 <td>View</td>
//             </tr>
//             </tbody>
//         </table>
//     </div>
// </div>