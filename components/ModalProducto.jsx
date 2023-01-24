import Image from "next/image"
import { useEffect, useState } from "react";
import useQuiosco from "../hooks/useQuiosco"

const ModalProducto = () => {

    const {productoSeleccionado, handleModal,handlePedido,pedido} = useQuiosco();
    //estado para almacenar cantidades del pedido
    const [cantidad,setCantidad] = useState(1);
    //estado para actulizar pedido
    const [edicion,setEdicion] = useState(false)

    //revisar pedidos y estado de edicion
    useEffect(() => {
        //revisamos si existe el pedido con respuesta true o false
        if(pedido.some(productoItem => productoItem.id === productoSeleccionado.id)){
            //vamos a buscar el prodcut en el pedido por el id para extrerlo
            const productoEditado = pedido.find(
                pedidoState => pedidoState.id === productoSeleccionado.id
            );
            //cambiamos el estado de la edicion
            setEdicion(true);
            //le pasamos el prodcuto encontrado en el estado para mostrar cantidad
            setCantidad(productoEditado.cantidad)
        }
    },[productoSeleccionado,pedido])


  return (
    <div className="grid__modalProdcuto">
        <div>
            <Image
                width={200}
                height={300}
                src={`/assets/img/${productoSeleccionado.imagen}.jpg`}
                alt={`imagen del prodcuto de ${productoSeleccionado.nombre}`}

            />
        </div>

        <div>
            <div className="boton__modal">
                <button
                    onClick={ () => handleModal()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
                <h2 className="producto__modal">{productoSeleccionado.nombre}</h2>
                <h2 className="precio__modal">${productoSeleccionado.precio}</h2>
                
                <div className="cantidades__modal">
                    
                    <button
                        onClick={() => {
                            if(cantidad <= 1) return
                                setCantidad(cantidad -1)
                            }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                     </button>

                    <p className="numero__cantidad__modal">{cantidad}</p>

                    <button
                        onClick={() => {
                            if(cantidad >= 5) return
                            setCantidad(cantidad +1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>

                <button 
                    className="btn__pedido__modal"
                    onClick={() => (
                        handlePedido({...productoSeleccionado,cantidad}),
                        handleModal()
                        )}
                >
                    {edicion ? 'Editar el pedido' : 'Añadir al pedido'}
                </button>
        </div>
    </div>
  )
}

export default ModalProducto