import { bdy } from "./bdy";

export const getProps = async () => {
  const body = JSON.stringify(bdy);

  const url = `https://api.ciencuadras.com/api/realestatesmap`;
  const resp = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body,
  });
  const { data,success } = await resp.json();

  if(!success){
    return []
    // return alert('No se encontraron propiedades')
  }

  const properties = data.result.map((pr) => {
    return {
      id: pr.id,
      precio: pr.canon_arrendamiento,
      ubicacion: pr.localidad,
      balcones: pr.num_balcones,
      banos: pr.num_banos,
      habitaciones: pr.num_habitaciones,
      url: pr.url_inmueble,
      area: pr.area_construida,
      foto: pr.url_foto
    };
  });
  return properties;
};
