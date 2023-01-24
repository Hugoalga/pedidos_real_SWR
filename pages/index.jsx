import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";


const Home = () => {
  const {categoriaActual} = useQuiosco();
  // console.log(categoriaActual);

  return (
    <Layout
      pagina={`Menú ${categoriaActual?.nombre}`}
    >
      <div className="layout__data">
        <h1>{`${categoriaActual?.nombre}`}</h1>
        <p>Mostrado elementos de la categoria {categoriaActual?.nombre}</p>

        <div className="layout__productos">
          {categoriaActual?.productos?.map(producto => (
             <Producto
                key={producto.id}
                producto={producto}
              />
          )
          )}
        </div>
      </div>
     
     
    </Layout>
  )
}

export default Home



