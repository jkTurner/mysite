import styles from "./loginForm.module.css"
import Details from "./Details";

const Notes = () => {
    return (
        <>
            <div className={`${styles.notes} `}>
                <p>
                This login system is built with a focus on security and ease of use, ensuring that you can access your account swiftly and safely. The real-time feedback helps you correct any errors swiftly, making the process seamless. If you have already registered, go ahead and log in to explore more!
                </p>
            </div>

            <Details />
        </>
    )
}

export default Notes;