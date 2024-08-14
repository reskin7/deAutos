export const Car = ({
  id,
  model,
  price,
  priceRankIndicator,
  location,
  km,
  year,
  fuelType,
  photos,
  seller,
  sellerRating,
  url,
}) => {
  return (
    <div>
      <div className='card ms-3 mb-5' style={{ maxWidth: 640 }}>
        <div className='row no-gutters'>
          <div className='row-md-4'>
            <img
              className='card-img-top'
              src={photos[0]}
              alt='foto'
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
              <h5 className='card-title'>
                <b>Coche #</b> {id}
              </h5>
              <p className='card-text' style={{ whiteSpace: 'nowrap' }}>
                <b>Modelo:</b> {model}
              </p>
              <p className='card-text'>
                <b>Precio:</b> ${new Intl.NumberFormat('de-DE').format(price)}
              </p>
              <p className='card-text'>
                <b>Indicador de precio:</b>{' '}
                {priceRankIndicator === 5 ? (
                  <b style={{ color: '#ff0707', fontSize: 25 }}>
                    {priceRankIndicator}
                  </b>
                ) : (
                  priceRankIndicator
                )}
              </p>
              <p className='card-text'>
                <b>Kms:</b> {new Intl.NumberFormat('de-DE').format(km)}
              </p>
              <p className='card-text'>
                <b>Año:</b> {year}
              </p>
              <p className='card-text'>
                <b>Ubicacion:</b> {location}
              </p>
              <p className='card-text'>
                <b>Tipo de combustible:</b> {fuelType}
              </p>
              <p className='card-text'>
                <b>Vendedor:</b> {seller}
              </p>
              <p className='card-text'>
                <b>Valoracion del vendedor:</b> {sellerRating}
              </p>
              <b>URL:</b>{' '}
              <a
                target='_blank'
                rel='noreferrer'
                href={`https://coches.net${url}`}
              >
                LINK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
