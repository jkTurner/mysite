interface Findings {
    // id: number;
    topic: string;
    description: string;
}

const findingsData: Findings[] = [
    {
        // id: 1,
        topic: 'Authentication',
        description: "Experience secure login and registration processes using Next Auth with Google Provider.",
        // documentUrl: '/files/cert/itil.pdf', 
    },
    {
        topic: "API and CRUD Operations",
        description: "Explore how to create, read, update, and delete data efficiently.",
    },
    {
        topic: "Projects",
        description: "Check out smaller projects such as a to-do list, weather dashboard, polling system, and expense tracker, each showcasing practical applications of my skills.",
    },
];

const Findings = () => {
    return (
        <div className="mb-0 mt-0">
            
            {/* <h3 className="font-bold mb-4">Credentials:</h3> */}
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        {/* <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Issuer</th>
                        </tr> */}
                    </thead>
                    <tbody>
                        {findingsData.map((finding, index) => (
                            <tr key={finding.topic} className="text-[var(--textDetails)] border-none hover:bg-[var(--jkAccent)] hover:text-white">
                                {/* <th>{index + 1}</th> */}
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