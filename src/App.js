import { useState } from 'react'
import { Car } from './components/Car'
import { useFetchCars } from './hooks/useFetchCars'
import { Pagination } from './components/Pagination'

export const App = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 20 // Set the number of cars per page

  // Pass currentPage to the useFetchCars hook
  const state = useFetchCars(currentPage)

  // Calculate the cars to display on the current page
  const currentCars = state.data

  // Function to handle page changes
  const handlePagination = pageNumber => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {state.loading ? (
        <div> CARGANDO </div>
      ) : (
        <>
          <small className='text-muted'>
            Updated: {new Date(Date.now()).toLocaleString().split(',')[1]}
          </small>
          <p className='card-text'>
            <small className='text-muted'>
              Resultados obtenidos: {state.totalResults}
            </small>
          </p>
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
