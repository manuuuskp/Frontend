import { useState } from "react";
import "./pagination.css";

function Pagination<T>({ data, renderItem, initialPage, countPerPage, totalItems, fetchData }: Props<T>) {
  const [pageNum, setPageNum] = useState(initialPage);
  const totalPages = Math.ceil(totalItems/countPerPage);

  const handlePaginate = (pageNumber: number) => {
    setPageNum(pageNumber);
    fetchData(countPerPage, (pageNum * countPerPage) - countPerPage);
  };

  return (
    <>
      <div>
        {data.length > 0 &&
          data.map((dataItem: T) => renderItem(dataItem))}
      </div>
      <div className="pagination__container">
        {pageNum > 1 && (
          <span
            className="pagination__button"
            onClick={() => handlePaginate(pageNum - 1)}
          >
            Previous
          </span>
        )}
        {[...Array(totalPages)].map((_, i) => {
          return (
            <span
              key={i}
              className={`pagination__button ${
                pageNum === i + 1 ? "pagination__button--active" : ""
              }`}
              onClick={() => handlePaginate(i + 1)}
            >
              {i + 1}
            </span>
          );
        })}
        {pageNum < totalPages && (
          <span
            className="pagination__button"
            onClick={() => handlePaginate(pageNum+1)}
          >
            Next
          </span>
        )}
      </div>
    </>
  );
}

export default Pagination;

interface Props<T> {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  initialPage: number;
  countPerPage: number;
  totalItems: number;
  fetchData: (limit: number, skip: number) => void;
}
