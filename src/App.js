import { useEffect, useState } from 'react'
import { Car } from './components/Car'
import { useFetchCars } from './hooks/useFetchCars'
import { Pagination } from './components/Pagination'

export const App = () => {
  let [lastCarsId, setLastCarsId] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [carsPerPage] = useState(100) // Set the number of cars per page

  const sameLengthDiffProp = (a, b) => {
    a.sort()
    b.sort()
    for (let i = 0; i < a.length; i++) {
      if (b[i] !== a[i]) {
        return false
      }
    }
    return true
  }

  const state = useFetchCars()

  useEffect(() => {
    setLastCarsId(state.data)
    // console.log('LAST PROPS ID', lastCarsId)
    // console.log('LAST PROPS ID length', lastCarsId.length)
    // console.log('state data length ', state.totalResults)

    if (
      state.totalResults !== 0 &&
      (state.totalResults !== lastCarsId.length ||
        sameLengthDiffProp(state.data, lastCarsId))
    ) {
      setLastCarsId(state.data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data])

  // Calculate the index range for the current page
  const indexOfLastCar = currentPage * carsPerPage
  const indexOfFirstCar = indexOfLastCar - carsPerPage
  const currentCars = state.data.slice(indexOfFirstCar, indexOfLastCar)

  // Function to handle page changes
  const paginate = pageNumber => {
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
            carsPerPage={carsPerPage}
            totalCars={state.totalResults}
            paginate={paginate}
            currentPage={currentPage}
            totalPages={state.totalPages}
          />
          {state.totalResults > 0 ? (
            <>
              <div className='card-columns'>
                {currentCars &&
                  currentCars.map(car => {
                    return <Car {...car} key={car.id} />
                  })}
              </div>
              <Pagination
                carsPerPage={carsPerPage}
                totalCars={state.totalResults}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          ) : (
            <div>No se encontraron resultados</div>
          )}
        </>
      )}
    </>
  )
}
