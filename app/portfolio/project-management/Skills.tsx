import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import styles from "../portfolio.module.css"

const Skills = () => {
    return (
        <div>

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                    <TableHead className={`${styles.skill_topic_column}`}>Skills</TableHead>
                    <TableHead className="text-left">Description</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                    <TableCell>IT Service Management</TableCell>
                    <TableCell className="text-left">Utilizing best practices from frameworks like ITIL to align IT services with business needs, ensuring efficient and effective service delivery.</TableCell>
                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Time Management</TableCell>
                    <TableCell className="text-left">Planning and controlling how hours are allocated in a day to effectively accomplish project goals.</TableCell>
                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Resource Management</TableCell>
                    <TableCell className="text-left">Efficient and effective deployment and allocation of an organization&apos;s resources when and where they are needed.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Communication</TableCell>
                    <TableCell className="text-left">Conveying information to team members and stakeholders clearly and effectively.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Risk Management</TableCell>
                    <TableCell className="text-left">Identifying, assessing, and controlling threats to an organization&apos;s capital and earnings.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Budgeting</TableCell>
                    <TableCell className="text-left">Planning and controlling the finances of a project, ensuring completion within the approved budget.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Team Leadership</TableCell>
                    <TableCell className="text-left">Leading a team towards achieving a common goal, including motivating team members and resolving conflicts.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Problem Solving</TableCell>
                    <TableCell className="text-left">Finding solutions to difficult or complex issues that arise during a project.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Quality Management</TableCell>
                    <TableCell className="text-left">Ensuring that a project&apos;s outputs meet the required standards and satisfy customer expectations.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Stakeholder Management</TableCell>
                    <TableCell className="text-left">Identifying and managing the needs and expectations of all stakeholders involved in a project.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell>Agile Methodologies</TableCell>
                    <TableCell className="text-left">Implementing agile practices to improve flexibility, speed, and quality of project delivery.</TableCell>
                    </TableRow>
                </TableBody>


            </Table>
            
        </div>
    )
}

export default Skills;