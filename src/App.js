import { useEffect, useState } from "react";
import { Property } from "./components/Property";
import { useFetchProps } from "./hooks/useFetchProps";
import useSound from "use-sound";
import beep from "./assets/beep.mp3";
import { sendMessage } from "./bot/ciencuadrasBot";
import { getPropsFinca } from "./helpers/fincaraiz/getPropsFinca";

export const App = () => {
  const [play] = useSound(beep);
  let [lastPropsId, setLastPropsId] = useState([]);

  const sameLengthDiffProp = (a, b) => {
    a.sort();
    b.sort();
    for (let i = 0; i < a.length; i++) {
      if (b[i] !== a[i]) {
        return false;
      }
    }
    return true;
  };

  const state = useFetchProps();

  useEffect(() => {
    setLastPropsId(state.data);
    console.log("LAST PROPS ID", lastPropsId);
    console.log("LAST PROPS ID length", lastPropsId.length);
    console.log("state data length ", state.data.length);
    getPropsFinca();

    if (
      state.data.length !== 0 &&
      (state.data.length !== lastPropsId.length ||
        sameLengthDiffProp(state.data, lastPropsId))
    ) {
      // alert("Se encontraron nuevas propiedades");
      // sendMessage("Se encontraron nuevas propiedades! https://reskin7.github.io/",2036886011)
      // sendMessage("Se encontraron nuevas propiedades! https://reskin7.github.io/",1519487961)
      play();
      setLastPropsId(state.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data]);


  return (
    <>
      {state.loading ? (
        <div> CARGANDO </div>
      ) : (
        <>
          <small className="text-muted">
            Updated: {new Date(Date.now()).toLocaleString().split(",")[1]}
          </small>
          <p className="card-text">
            <small className="text-muted">
              Resultados obtenidos: {state.data.length}
            </small>
          </p>
          {state.data.length > 0 ? (
            <>
              <div className="card-columns">
                {state.data &&
                  state.data.map((prop) => {
                    return <Property {...prop} key={prop.id} />;
                  })}
              </div>
            </>
          ) : (
            <div>No se encontraron resultados</div>
          )}
        </>
      )}
    </>
  );
};
