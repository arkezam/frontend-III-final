import React from "react";
import { Link } from "react-router-dom";
import { useDentistaStates } from "./utils/global.context";
import doctor from "../../public/images/doctor.jpg"


const Card = ({ dentista }) => {

  const {
    dispatch,
    state:{favs}
  } = useDentistaStates(); 

  const findFav = favs.find((fav)=>fav.id === dentista.id)

  console.log(find.fav)
  const toggleAdd = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    //setFavs((favs)=> [...favs, dentista])
    dispatch({type:findFav?"DELETE_FAV":"ADD_FAV", payload: dentista});
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${dentista.id}`}>
        <img src={doctor} height="200" alt="" />
        <h2> {dentista.name} </h2>
        <h3> {dentista.username} </h3>
        <h6> {dentista.id} </h6>

        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={toggleAdd} className="favButton"   style={{ color: findFav ? "red" : "black" }}>{findFav?"Delete FAV":"Add fav"}</button>

    </div>
  );
};

export default Card;
