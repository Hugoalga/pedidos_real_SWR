import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";

const Resumen = () => {

  const {pedido} = useQuiosco();


  return (
    <Layout
      pagina={'Resumen Pedido'}
    >
        
        <div className="contendor__resumen">
            <h1>Resumen de tu pedido</h1>

            <div className="resumen__productos">

              {pedido.length === 0 ? (
                <p>No tienes elementos en tu pedido</p>
              ) : (
                pedido.map((producto) => (
                  <ResumenProducto
                    key={producto.id}
                    producto={producto}
                  />
                ))
              )}
            </div>
        </div>
       
    </Layout>
  )
}

export default Resumen