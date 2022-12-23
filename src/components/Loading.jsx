import React from 'react'
import imgCargando from "../img/cargando.png"
const Loading = () => {
  return (
    <div className="loading">
        <img className="loading__img" src={imgCargando} alt="" />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading