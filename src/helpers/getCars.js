import { getBdy } from './bdy'

export const getCars = async page => {
  const body = JSON.stringify(getBdy(page))

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
  console.log('totalResults', totalResults)
  console.log('totalPages', totalPages)
  console.log('items', items)

  if (!items) {
    return []
    // return alert('No se encontraron propiedades')
  }

  const cars = items
    .filter(car => {
      return car.price.indicator?.rank > 3
    })
    .sort((a, b) => {
      return b.price.indicator?.rank - a.price.indicator?.rank
    })
    .map(car => {
      return {
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
      }
    })
  return { cars, totalPages, totalResults }
}
