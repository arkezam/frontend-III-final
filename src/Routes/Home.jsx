import React from 'react'
import Card from '../Components/Card'

import { useDentistaStates } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentistaStates();

  return (
    <main className="" > 
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentista.map((dentista)=><Card key={dentista.id} dentista={dentista}   />)}
      </div>
    </main>
  )
}

export default Home