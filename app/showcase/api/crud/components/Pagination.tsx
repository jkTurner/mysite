"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./drugsList.module.css";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
}

const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
    const router = useRouter();
    const [inputMode, setInputMode] = useState(false);
    const [inputPage, setInputPage] = useState('');

    const handlePageChange = (newPage: number) => {
        router.push(`/showcase/api/crud?page=${newPage}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPage(e.target.value);
    };

    const handleInputSubmit = () => {
        let page = parseInt(inputPage, 10);
        if (!isNaN(page)) {
            if (page > totalPages) {
                page = totalPages;
            } else if (page < 1) {
                page = 1;
            }
            handlePageChange(page);
        }
        setInputMode(false);
        setInputPage('');
    };

    const getPageNumbers = () => {
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 1);

        if (currentPage === 1 || currentPage === 2) {
            endPage = Math.min(totalPages, 4);
        } else if (currentPage === totalPages || currentPage === totalPages - 1) {
            startPage = Math.max(1, totalPages - 3);
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className={styles.pagination_container}>
            <div className="join">
                <button
                    className="join-item btn"
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    «
                </button>
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`join-item btn ${pageNumber === currentPage ? `active ${styles.current_page}` : ""}`}
                    >
                        {pageNumber}
                    </button>
                ))}
                {inputMode ? (
                    <div className={styles.input_container}>
                        <input
                            type="text"
                            value={inputPage}
                            onChange={handleInputChange}
                            onKeyDown={(e) => e.key === 'Enter' && handleInputSubmit()}
                            className="join-item btn"
                            autoFocus
                            style={{ width: '50px', textAlign: 'center' }}
                        />
                        <button onClick={handleInputSubmit} className="join-item btn">Go</button>
                    </div>
                ) : (
                    <button
                        className="join-item btn"
                        onClick={() => setInputMode(true)}
                    >
                        ...
                    </button>
                )}
                <button
                    className="join-item btn"
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                >
                    »
                </button>
            </div>
        </div>
    );
};

export default Pagination;