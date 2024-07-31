interface Findings {
    topic: string;
    description: string;
}

const findingsData: Findings[] = [
    {
        topic: 'Authentication',
        description: "Experience secure login and registration processes using Next Auth with Google Provider.",
    },
    {
        topic: "API and CRUD Operations",
        description: "Explore how to create, read, update, and delete data efficiently.",
    },
    {
        topic: "Full-Scale Projects",
        description: "Explore my collection of full-scale projects, showcasing a variety of web applications. These projects cover a range of technologies and demonstrate my ability to design, develop, and deploy robust solutions. From applications with authentication and CRUD operations to dynamic websites, each project highlights my skills in building scalable and efficient web solutions.",
    },
    {
        topic: "Feature Highlights",
        description: "In addition to full-scale projects, here are some smaller React functionalities and components I've developed. These examples demonstrate specific features and techniques, such as search filters, to-do lists, and more."
    }
];

const Findings = () => {
    return (
        <div className="mb-0 mt-0">
            
            <div className="overflow-x-auto">
                <table className="table">
                    <thead></thead>
                    <tbody>
                        {findingsData.map((finding, index) => (
                            <tr key={finding.topic} className="text-[var(--textDetails)] border-none hover:bg-[var(--jkAccent)] hover:text-white">
                                <td>{finding.topic}</td>
                                <td>{finding.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Findings;