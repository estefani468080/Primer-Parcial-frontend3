import React from 'react'

export default function Cabecera({Total}) {
  return (
    <header>
        <h1>Carrito de compras</h1>
        <p>Cantidad de productos en el carrito: <span className='badge badge-danger'>{Total}</span></p>
    </header>
  )
}
