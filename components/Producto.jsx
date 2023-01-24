import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";


const Producto = ({producto}) => {
    const {id,imagen,nombre,precio} = producto;
    const {handleProductoSeleccionado, handleModal} = useQuiosco();


  return (
    <div className="layout__productoItem">
        <Image
            src={`/assets/img/${imagen}.jpg`}
            width={400}
            height={500}
            alt={`imagen de los productos ${nombre}`}
            className='imagen__producto'
        />
        <p className="nombre__producto">{nombre}</p>
        <p className="precio__producto">Precio: <span className="precio__item">${precio}</span></p>

        <button
          type="button"
          className="producto__btn__agregar"
          onClick={() => {
            handleProductoSeleccionado(producto),
            handleModal()
          }}
         
        >
          Agregar

        </button>
        
    </div>
  )
}

export default Producto