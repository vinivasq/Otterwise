import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Link to='/car/create'>Cadastrar Carro</Link>
    </div>
  )
}

export default Home