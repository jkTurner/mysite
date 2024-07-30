import {Table,TableBody,TableCell,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { technologies } from "@/data/technologies";
import styles from "../portfolio.module.css"

const Technologies = () => {
    return (
        <div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50px] text-center">Tool</TableHead>
                        <TableHead className={`${styles.skill_topic_column}`}>Area</TableHead>
                        <TableHead className="text-left">Description</TableHead>
                    </TableRow>
                </TableHeader>

                {technologies.map((tech, index) => {
                    const ImageComponent = tech.image;
                    return (
                        <TableBody key={index}>
                            <TableRow className="border-line hover:bg-[var(--jkAccent)] hover:text-white">
                            <TableCell className="text-2xl">
                                <ImageComponent />
                            </TableCell>
                            <TableCell>{tech.category}</TableCell>
                            <TableCell className="text-left">{tech.description}</TableCell>
                            </TableRow>
                        </TableBody>
                    )
                })}

            </Table>
            

        </div>
    )
}

export default Technologies;

