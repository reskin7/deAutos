
export const Property = ({
  id,
  precio,
  ubicacion,
  balcones,
  banos,
  habitaciones,
  url,
  area,
  foto,
}) => {
  return (
    <div>
      <div className="card ms-3" style={{ maxWidth: 540 }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="card-img" src={foto} alt="foto" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Propiedad # {id}</h5>
              <p className="card-text">Precio: ${precio}</p>
              <p className="card-text">Ubicacion: {ubicacion}</p>
              <p className="card-text">Balcones: {balcones}</p>
              <p className="card-text">Habitaciones: {habitaciones}</p>
              <p className="card-text">Baños: {banos}</p>
              <p className="card-text">Area: {area}</p>
              URL:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.ciencuadras.com${url}`}
              >
                LINK
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
