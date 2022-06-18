import React from 'react'
import data from './data.json';
import Item from "./Item";

export default function Listado({setTotal}) {
  return (
    <div className='container'>
      {
        data.map(i => 
          <Item
            key={i.id}
            product={i}
            setTotal={setTotal}
          />
        )
      }
    </div>
  )
}
