export const SizeSelector = ({ size, currentSize, totalPages }) => {
  const sizeNumbers = [15, 30, 50, 100]

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {sizeNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${number === currentSize ? 'active' : ''}`}
          >
            <button onClick={() => size(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
