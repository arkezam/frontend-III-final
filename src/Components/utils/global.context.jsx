import axios from "axios";
import { createContext, useState, useEffect, useContext, useReducer } from "react";
import { reducer } from "../../Reducer/reducer";



export const ContextGlobal = createContext(undefined);
const lsFavs = JSON.parse(localStorage.getItem("favs")) || []

export const initialState = {
  favs: lsFavs,
  dentista: [],
  theme: "light"
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const  [state, dispatch]  = useReducer(reducer, initialState)

  // const [favs, setFavs] = useState(lsFavs)
  // const [dentista, setDentista] = useState([]);
  // const [theme, setTheme] = useState([]);
   const url = "https://jsonplaceholder.typicode.com/users"



  useEffect(()=>{
    axios(url).then((res)=>{
      console.log(res)
      dispatch({type: "GET_DENTISTA", payload: res.data})
//      setDentista(res.data)
    })
  },[])
  
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(state.favs))
  },[state.favs])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useDentistaStates = () => useContext(ContextGlobal)