import React from "react";
import clsx from "clsx";
import ArrowNext from "../../icons/ArrowNext";
import ArrowPrev from "../../icons/ArrowPrev";
import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  pageRangeDisplayed?: number;
  initialPage?: number;
  showLessPages?: boolean;
}

export const Pagination = ({
  pageCount: _pageCount,
  onPageChange,
  pageRangeDisplayed = 4,
  initialPage,
  showLessPages = true,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage || 0);

  let total = _pageCount;
  if (showLessPages && total <= _pageCount) {
    total = currentPage + pageRangeDisplayed - 1;
  }
  if (currentPage < 2 && _pageCount > pageRangeDisplayed) {
    total = 5;
  }
  if (_pageCount < 5) {
    total = _pageCount;
  }
  const pageCount = total <= _pageCount ? total : _pageCount;

  const handlePageClick = useCallback(
    (page: number) => {
      onPageChange({ selected: page });
      setCurrentPage(page);
    },
    [onPageChange],
  );

  const pages = useMemo(() => {
    const pages = [];
    const leftSide = pageRangeDisplayed / 2;
    const rightSide = pageRangeDisplayed - leftSide;

    for (let i = 0; i < pageCount; i++) {
      const label = i + 1;
      let className = styles.page;
      if (i === currentPage) className += ` ${styles.active}`;

      if (i === 0 || i === pageCount - 1 || (i >= currentPage - leftSide && i <= currentPage + rightSide + 1)) {
        pages.push(
          <button key={i} onClick={() => handlePageClick(i)} className={className}>
            {label}
          </button>,
        );
      } else if ((i < currentPage - leftSide && i === 1) || (i > currentPage + rightSide && i === pageCount - 2)) {
        const breakIdx = currentPage - (leftSide + rightSide);
        pages.push(
          <span key={i} onClick={() => handlePageClick(breakIdx)} className={styles.break}>
            ...
          </span>,
        );
      }
    }

    return pages;
  }, [currentPage, pageCount, pageRangeDisplayed]);

  useEffect(() => {
    setCurrentPage(initialPage || 0);
  }, [initialPage]);

  if (!_pageCount) return null;
  return (
    <div className={styles.container}>
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        className={clsx(styles.prev, { [styles.disabled]: currentPage === 0 })}
        disabled={currentPage === 0}
      >
        <ArrowPrev />
      </button>

      {pages}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        className={clsx(styles.next, { [styles.disabled]: currentPage === pageCount - 1 })}
        disabled={currentPage === pageCount - 1}
      >
        <ArrowNext />
      </button>
    </div>
  );
};
