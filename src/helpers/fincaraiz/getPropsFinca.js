import { bdy } from "./bdyFinca";

export const getPropsFinca = async () => {
  const body = JSON.stringify(bdy);

  const url = `https://api.fincaraiz.com.co/document/api/1.0/listing/search`;
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
  const res = await resp.json();

  const possibleResults = res.hits.hits.map((p) => {
    return {
      id: p._source.listing.fr_property_id,
    };
  });

  console.log(possibleResults);

  const urlPropery = 'https://www.fincaraiz.com.co/_next/data/build/inmueble/apartamento-en-arriendo/aaa/envigado/'


      const resp2 = await fetch(`${urlPropery}${possibleResults[0]}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  })

  const res2 = await resp2.json();

  console.log(res2)

  //   if(!success){
  //     return []
  // return alert('No se encontraron propiedades')
  //   }

  //   const properties = data.result.map((pr) => {
  //     return {
  //       id: pr.id,
  //       precio: pr.canon_arrendamiento,
  //       ubicacion: pr.localidad,
  //       balcones: pr.num_balcones,
  //       banos: pr.num_banos,
  //       habitaciones: pr.num_habitaciones,
  //       url: pr.url_inmueble,
  //       area: pr.area_construida,
  //       foto: pr.url_foto
  //     };
  //   });
  //   return properties;
};
