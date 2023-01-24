import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import { useCallback, useEffect } from "react";

const Total = () => {

  const {pedido,setNombre,nombre,EnviarOrden,total} = useQuiosco();

  //funcion para revisar si el pedido esta vacio y retornar true o false
  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre.length === 0;
  },[pedido,nombre]);

//ejecutar funcion cada que cambia el pedido ejecutamos la revision
  useEffect(() => {
    comprobarPedido();
  },[pedido,comprobarPedido]);

 


  return (
    <Layout pagina={'Cuenta Total'}>
       
       <div className="contendor__total">
            <h1>Confirmar pedido</h1>
       </div>

       <form action="" className="formulario__total" onSubmit={EnviarOrden}>
        <div className="formulario__item__total">
          <label className="formulario__label" htmlFor="nombre">Nombre</label>
          <input 
          className="formulario__input" 
          type="text" id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* <div className="formulario__item__total">
          <label className="formulario__label" htmlFor="telefono">Telefono</label>
          <input 
            className="formulario__input" 
            type="text" id="telefono"
            value={telefono}
            onChange={e => setTelefono(e.target.value)} 
          />
        </div> */}

        <p className="formulario__cuenta">Total a pagar: <span className="formulario__cuenta__monto">${total}</span> </p>

        <input 
          type="submit" 
          value={ `${comprobarPedido() ? 'Llenar todos los campos' : 'Confirmar pedido' } `}
          className={`formulario__btn ${comprobarPedido() ? 'bnt__inactivo' : 'btn__activo'} ` }  
          disabled={comprobarPedido()} />
       </form>
       
    </Layout>
    
  )
}

export default Total
