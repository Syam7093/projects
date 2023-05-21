import React, { useState, useEffect } from "react";
import TableBody from "./TableBody";

export default function TableData(props) {
  const { data } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const itemsPerPage = 3;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  useEffect(() => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    setTotalPages(totalPages);
  }, [data]);
 
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <table className="tableDiv">
      <thead>
        <tr>
          <th>id</th>
          <th>category</th>
          <th>Price</th>
          <th>title</th>
          <th>image</th>
        </tr>
      </thead>
      <TableBody data={itemsToShow} />
      <tfoot>
        <tr>
          <th colSpan={3}></th>
          <th>
            <button onClick={goToPreviousPage}>
              <React.Suspense fallback = 'please wait ....'>
               Prev Page
               </React.Suspense>
            </button>
          </th>
          <th>
          <React.Suspense fallback = 'please wait ....'>
            <button onClick={goToNextPage}> Next Page</button>
          </React.Suspense>
          </th>
        </tr>
      </tfoot>
    </table>
  );
}
