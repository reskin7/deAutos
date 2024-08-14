import { useState } from 'react'
import { Car } from './components/Car'
import { useFetchCars } from './hooks/useFetchCars'
import { Pagination } from './components/Pagination'
import { SizeSelector } from './components/SizeSelector'

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSize, setCurrentSize] = useState(15)

  // Pass currentPage to the useFetchCars hook
  const state = useFetchCars(currentPage, currentSize)

  // Calculate the cars to display on the current page
  const currentCars = state.data

  // Function to handle page changes
  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSize = sizeNumber => {
    setCurrentSize(sizeNumber)
  }

  return (
    <>
      {state.loading ? (
        <div> CARGANDO </div>
      ) : (
        <>
          <div className='bg-white text-white p-4'>
            <small className='text-muted'>
              Updated: {new Date(Date.now()).toLocaleString().split(',')[1]}
            </small>
            <p className='card-text'>
              <small className='text-muted'>
                Resultados obtenidos: {state.totalResults}
              </small>
            </p>
            <SizeSelector
              size={handleSize}
              currentSize={currentSize}
              totalPages={state.totalPages}
            />
          </div>
          <Pagination
            paginate={handlePagination}
            currentPage={currentPage}
            totalPages={state.totalPages}
          />
          {state.totalResults > 0 ? (
            <div className='card-columns'>
              {currentCars.map(car => (
                <Car {...car} key={car.id} />
              ))}
            </div>
          ) : (
            <div>No se encontraron resultados</div>
          )}
          <Pagination
            paginate={handlePagination}
            currentPage={currentPage}
            totalPages={state.totalPages}
          />
        </>
      )}
    </>
  )
}
