export const Pagination = ({ paginate, currentPage, totalPages }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            onClick={() => paginate(currentPage - 1)}
            className='page-link'
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? 'active' : ''}`}
          >
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className='page-link'
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}
