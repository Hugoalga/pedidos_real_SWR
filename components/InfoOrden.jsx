import Image from "next/image";
import axios from 'axios';
import {toast} from 'react-toastify';

const InfoOrden = ({orden}) => {
    const {id,nombre,total,pedido} = orden;


    //funcion para completar orden
    const completarOrden = async (id) => {
        try {
           const data = await axios.post(`/api/ordenes/${id}`)
        //    console.log(data);
        toast.success('Orden despachada');
        } catch (error) {
            // console.log(error);
            toast.error('Hubo un error');
        }
    }

  return (
    <div className="info__orden__contenedor">
        <p className="datos__orden">Orden: <span>{id}</span> </p> 
        <p className="datos__orden__nombre">Nombre del cliente: <span>{nombre}</span> </p>
        
        
        <div>
            {pedido.map(platillo => (
                <div key={platillo.id} className="platillos__orden">
                    <Image
                        width={100}
                        height={50}
                        src={`/assets/img/${platillo.imagen}.jpg`}
                        alt={`Imagen del platillo ${platillo.nombre}`}
                    />
                    <p>Producto: <br/> <span className="platillos__data">{platillo.nombre}</span></p>
                    <p>Cantidad: <br/> <span className="platillos__data">{platillo.cantidad}</span></p>
                </div>
            ))}
            <div className="actions__orden">
                <p className="costo__orden">Total a pagar: ${total}</p>

               
                {orden?.estado ? 'Orden Despachada' : (
                    <button
                    onClick={e => completarOrden(id)}
                > 
                        Completar orden
                </button>
                )}
                
            </div>
            
        </div>
        
    </div>
  )
}

export default InfoOrden