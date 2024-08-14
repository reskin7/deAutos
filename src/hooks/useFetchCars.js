import { useEffect, useState } from 'react'
import { getCars } from '../helpers/getCars'

export const useFetchCars = (page = 1, currentSize) => {
  const [state, setState] = useState({
    data: [],
    totalResults: 0,
    totalPages: 0,
    loading: true,
    updated: Date.now(),
  })

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const cars = await getCars(page, currentSize)
        setState({
          data: cars.cars,
          totalResults: cars.totalResults,
          totalPages: cars.totalPages,
          loading: false,
          updated: new Date(),
        })
      } catch (error) {
        console.error('Error fetching cars:', error)
        setState(prevState => ({ ...prevState, loading: false }))
      }
    }

    fetchCars()

    // Fetch data every 15 minutes
    const intervalId = setInterval(fetchCars, 60000 * 15)
    return () => clearInterval(intervalId)
  }, [page, currentSize])

  console.log('useFetchCars', state)

  return state
}
