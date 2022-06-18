import React, {useState, useEffect} from 'react';

export default function Item({product, setTotal}) {
  const [quantity, setQuantity] = useState();

  useEffect(() => {
    setQuantity(product.stock)
  }, [product.stock])

  const handleQuantity = () => {
    if(quantity) {
      setTotal(prevState => prevState + 1);
      setQuantity(prevState => prevState - 1);
    }
  }

  return (
    <div className='producto card'>
      { product.image ? <img class="image" src={product.image}/> : '' }
      <h3>{product.producto.nombre}</h3>
      <p>{product.producto.descripcion}</p>
      <h5>Stock: <span className={ quantity ? 'badge badge-success' : 'badge badge-danger' } >{ quantity ? quantity : "Agotado" } </span> </h5>
      <button className="btn btn-primary" disabled={!quantity?true:""} onClick={() => handleQuantity()}>{quantity === 0 ? 'Sin Producto' : 'Comprar'}</button>
    </div>
  )
}
