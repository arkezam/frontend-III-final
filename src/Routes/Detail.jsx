import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams()
  const [dentista, setDentista] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users/" + params.id 
  useEffect(()=>{
    axios(url).then((res)=>{
      setDentista(res.data)
    })
  },[])

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>{dentista.name}</h1>
      <h1>{dentista.email}</h1>
      <h1>{dentista.phone}</h1>
      <h1>{dentista.website}</h1>
    </>
  )
}

export default Detail