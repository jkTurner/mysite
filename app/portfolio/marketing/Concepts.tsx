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
import { PortfolioText as text } from "../components/PortfolioText";
import styles from "../portfolio.module.css"

const Concepts = () => {
    return (
        <div>

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                    <TableHead className={`${styles.skill_topic_column}`}>Concepts</TableHead>
                    <TableHead className="text-left">Description</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Social Currency</TableCell>
                    <TableCell className="text-left">{text.concept_1}</TableCell>
                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Triggers</TableCell>
                    <TableCell className="text-left">{text.concept_2}</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Emotion</TableCell>
                    <TableCell className="text-left">{text.concept_3}</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Public</TableCell>
                    <TableCell className="text-left">{text.concept_4}</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Practical Value</TableCell>
                    <TableCell className="text-left">{text.concept_5}</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">Stories</TableCell>
                    <TableCell className="text-left">{text.concept_6}</TableCell>
                    </TableRow>
                </TableBody>


            </Table>

        </div>
    )
}

export default Concepts;