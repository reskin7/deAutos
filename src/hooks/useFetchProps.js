import { useEffect, useState } from "react";
import { getProps } from "../helpers/getProps";

export const useFetchProps = () => {


  const [state, setState] = useState({
    data: [],
    loading: true,
    updated: Date.now()
  });



  useEffect(() => { 
    getProps().then((properties) => {
      setState({
        data: properties,
        loading: false,
        updated: new Date(),
      });
    });

    const intervalId = setInterval(() => {
      getProps().then((properties) => {
        setState({
          data: properties,
          loading: false,
          updated: new Date(),
        });
      })
    }, 60000 * 15) // 15 min
    return () => clearInterval(intervalId)
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return state;
};
