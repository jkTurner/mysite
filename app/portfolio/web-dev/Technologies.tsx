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

import { ImHtmlFive } from "react-icons/im";
import { ImCss3 } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGraphql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTypescript } from "react-icons/si"
import { SiTailwindcss } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { SiShadcnui } from "react-icons/si";
import { GiDaisy } from "react-icons/gi";
import { SiFigma } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiCloudinary } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiFilezilla } from "react-icons/si";

import styles from "../portfolio.module.css"

const Technologies = () => {
    return (
        <div>
            {/* <h3>Technologies</h3> */}

            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[50px] text-center">Tool</TableHead>
                    <TableHead className={`${styles.skill_topic_column}`}>Area</TableHead>
                    <TableHead className="text-left">Description</TableHead>
                    {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell className=""><ImHtmlFive className="text-2xl" /></TableCell>
                    <TableCell>Markup</TableCell>
                    <TableCell className="text-left">Fundamental language for creating web pages.</TableCell>
                    {/* <TableCell className="text-right">$250.00</TableCell> */}
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className=""><ImCss3 className="text-2xl" /></TableCell>
                    <TableCell>Styling</TableCell>
                    <TableCell className="text-left">Stylesheets used for describing the presentation of web pages.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiJavascript className="text-2xl" /></TableCell>
                    <TableCell>Scripting</TableCell>
                    <TableCell className="text-left">A versatile programming language used to make web pages interactive.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiReact className="text-2xl" /></TableCell>
                    <TableCell>Frontend Library</TableCell>
                    <TableCell className="text-left">Building user interfaces with reusable components.</TableCell>
                    </TableRow>
                </TableBody>
                
                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiNextdotjs className="text-2xl" /></TableCell>
                    <TableCell>Full-stack Framework</TableCell>
                    <TableCell className="text-left">Server-side rendering and static site generation for better performance.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiTypescript className="text-2xl" /></TableCell>
                    <TableCell>Typing</TableCell>
                    <TableCell className="text-left">Adding static types to JavaScript for better code quality.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiMongodb className="text-2xl" /></TableCell>
                    <TableCell>Database</TableCell>
                    <TableCell className="text-left">Managing and scaling databases.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiPrisma className="text-2xl" /></TableCell>
                    <TableCell>ORM</TableCell>
                    <TableCell className="text-left">Prisma: Database toolkit simplifying database interactions with type safety and intuitive queries.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiPostman className="text-2xl" /></TableCell>
                    <TableCell>API Testing</TableCell>
                    <TableCell className="text-left">Postman: Testing, documenting, and monitoring APIs.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiDjango className="text-2xl" /></TableCell>
                    <TableCell>Backend</TableCell>
                    <TableCell className="text-left">Creating robust backend services.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiTailwindcss className="text-2xl" /></TableCell>
                    <TableCell>Styling</TableCell>
                    <TableCell className="text-left">A utility-first CSS framework for rapid UI development.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><GiDaisy className="text-2xl" /></TableCell>
                    <TableCell>Components</TableCell>
                    <TableCell className="text-left">Daisy UI: An extension of Tailwind CSS with pre-designed components.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiShadcnui className="text-2xl" /></TableCell>
                    <TableCell>Components</TableCell>
                    <TableCell className="text-left">Shadcn UI: Pre-designed, highly customizable UI components for React.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiCloudinary className="text-2xl" /></TableCell>
                    <TableCell>Images & Videos</TableCell>
                    <TableCell className="text-left">Cloudinary: cloud-based service that provides an end-to-end solution for all your image and video management needs.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiGithub className="text-2xl" /></TableCell>
                    <TableCell>Version Control</TableCell>
                    <TableCell className="text-left">A platform for version control and collaboration.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiFilezilla className="text-2xl" /></TableCell>
                    <TableCell>FTP Client</TableCell>
                    <TableCell className="text-left">File transfer protocol client for uploading and managing files on a server.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><SiFigma className="text-2xl" /></TableCell>
                    <TableCell>Design</TableCell>
                    <TableCell className="text-left">Designing user interfaces and prototypes.</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow>
                    <TableCell className=""><DiPhotoshop className="text-3xl" /></TableCell>
                    <TableCell>Design</TableCell>
                    <TableCell className="text-left">Advanced graphic design and image editing.</TableCell>
                    </TableRow>
                </TableBody>

            </Table>
            

        </div>
    )
}

export default Technologies;