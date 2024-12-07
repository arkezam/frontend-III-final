import React from 'react'
import { Link } from 'react-router-dom'
import DH from "../../public/images/DH.png"
import { useDentistaStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useDentistaStates();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <nav className='nav'>
      <img src={ DH } height="40" alt="" />
      <Link to={"/"}>Home</Link>
      <Link to={"/favs"}>Favs</Link>
      <Link to={"/contact"}>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>
      Change {state.theme === "dark" ? "light" : "dark"}
    </button>
    </nav>
  )
}

export default Navbar