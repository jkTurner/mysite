import HighlightV1 from "./highlight-v1/HighlighV1";
import HighlightV2 from "./highlight-v2/HighlightV2";
import styles from "./highlight.module.css"

const desc1 = "With two years of web development experience, I've built a solid foundation in creating dynamic and responsive web applications. I started with HTML and CSS, which gave me the basics of web design. Then, I moved on to JavaScript and Django, where I learned how the frontend and backend connect. Getting into React.js was...";
const desc2 = "With a bachelor's degree in project management from Purdue Global University and an ITIL Foundation Certificate, I've built a comprehensive understanding of managing projects from start to finish. My journey began with the basics of project planning and ...";
const desc3 = "Even though I majored in Project Management at university, I found myself getting really interested in marketing after my first marketing class. It was so fascinating that I decided to switch five of my elective courses to marketing-related ones. After graduating, I didn't stop there...";
const desc4 = "Before diving into the world of web development, project management, and marketing, I was (and still am) an artist at heart. I've been an artist my whole life, starting off as a graphic designer and even doing art commissions, creating character concepts for people online. Art is my passion, and it’s...";

const Highlights = () => {
    return (
        // <div className="flex flex-col mx-auto w-[100%]">
        <div className={styles.main_container}>
            <HighlightV1 
                title="WEB DEVELOPMENT"
                desc={desc1}
                image="/images/highlights/dev2.jpg"
                link="/portfolio#webdev"
                alt="test"
            />
            <HighlightV2 
                title="PROJECT MANAGEMENT"
                desc={desc2}
                image="/images/highlights/pm3.jpg"
                link="/portfolio#pm"
                alt="test"
            />
            <HighlightV1 
                title="MARKETING"
                desc={desc3}
                image="/images/highlights/marketing2.jpg"
                link="/portfolio#marketing"
                alt="test"
            />
            <HighlightV2 
                title="ART"
                desc={desc4}
                image="/images/highlights/art.jpg"
                link="/portfolio#art"
                alt="test"
            />
        </div>
    )
}

export default Highlights;