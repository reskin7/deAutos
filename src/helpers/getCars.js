import { getBdy } from './bdy'

export const getCars = async (page, carsPerPage) => {
  const body = JSON.stringify(getBdy(page, carsPerPage))

  const url = `https://web.gw.coches.net/search`
  const resp = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'x-schibsted-tenant': 'coches',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body,
  })

  const {
    items,
    meta: { totalPages, totalResults },
  } = await resp.json()

  if (!items) {
    return []
  }

  const cars = items
    .sort((a, b) => b.price.indicator?.rank - a.price.indicator?.rank)
    .map(car => ({
      id: car.id,
      model: car.title,
      price: car.price.amount,
      priceRankIndicator: car.price.indicator?.rank,
      location: car.location.mainProvince,
      km: car.km,
      year: car.year,
      fuelType: car.fuelType,
      photos: car.resources.map(photo => photo.url),
      seller: car.seller.name,
      sellerRating: car.seller.ratings?.scoreAverage,
      url: car.url,
    }))

  return { cars, totalPages, totalResults }
}
