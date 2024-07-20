import { ReactNode } from "react";
import styles from "./modal.module.css"

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close_button} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;

