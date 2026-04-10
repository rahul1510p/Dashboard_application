import "./Pagination.css";

export default function Pagination({ totalPages, currentPage, setPage }) {
  return (
    <div className="pagination">

      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        Previous
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;

        return (
          <button
            key={pageNumber}
            className={currentPage === pageNumber ? "active" : ""}
            onClick={() => setPage(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </button>

    </div>
  );
}