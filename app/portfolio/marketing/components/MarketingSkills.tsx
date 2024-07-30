"use client";
import React, { useState } from 'react';

interface MarketingSkills {
    id: number;
    skill: string;
    description: string;
}

const marketingSkillsData: MarketingSkills[] = [
    {
        id: 1,
        skill: 'Social Currency',
        description: "People share things that make them look good or enhance their status. Crafting content that makes sharers feel special, knowledgeable, or in-the-know can increase the likelihood of sharing.",
    },
    {
        id: 2,
        skill: 'Triggers',
        description: "Ideas that are top of mind are more likely to be talked about. Linking your product or idea to common triggers in the environment can make people think of it more often.",
    },
    {
        id: 3,
        skill: 'Emotion',
        description: "Content that evokes strong emotions is more likely to be shared. High arousal emotions like awe, excitement, amusement, or anger motivate people to share more than low arousal emotions like contentment or sadness.",
    },
    {
        id: 4,
        skill: 'Public',
        description: "Making behavior more public encourages imitation. If people can see others using a product or engaging with content, they are more likely to do the same. Making the private public can help.",
    },
    {
        id: 5,
        skill: 'Practical Value',
        description: "People share content that has practical value. Useful information, tips, and advice are more likely to be passed along.",
    },
    {
        id: 6,
        skill: 'Stories',
        description: "People don’t just share information; they share stories. Wrapping your product or idea in a compelling narrative helps ensure that the message is not only shared but remembered.",
    },
];

const MarketingSkills = () => {

    return (
        <div className="mb-5 mt-3">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="border-line">
                            <th></th>
                            <th>Concept</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marketingSkillsData.map((credential, index) => (
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

export default MarketingSkills;
