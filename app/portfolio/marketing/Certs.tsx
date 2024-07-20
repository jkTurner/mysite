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

const Certs = () => {
    return (
        <div>

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                    <TableHead className={`${styles.skill_topic_column}`}>Institution</TableHead>
                    <TableHead className="text-left">Certificates</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">University of Pennsylvania</TableCell>
                    <TableCell className="text-left align-top">Viral Marketing and How to Craft Contagious Content</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className="align-top">University of Virginia</TableCell>
                    <TableCell className="text-left align-top">Marketing Analytics</TableCell>
                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                    </TableRow>
                </TableBody>

            </Table>
        </div>
    )
}

export default Certs;