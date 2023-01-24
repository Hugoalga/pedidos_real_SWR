import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from "../layout/AdminLayout";
import InfoOrden from '../components/InfoOrden';


const OrdenesTerminadas = () => {

      //conexion a la api
    const fetcher = () => axios('/api/terminadas').then(datos => datos.data);

     //ejecutar conexion y pasarlo al useSWR
  const { data, error, isLoading} = useSWR('/api/ordenes', fetcher, {refreshInterval: 1000});
  console.log(data);


  return (
    <AdminLayout
        pagina={'Ordenes terminadas'}
    >
        <h1>Ordenes terminadas</h1>
        <div className="listado__pedidos__admin">
           <div className="listado__Ordenes">

            {data && data.length ? 
              data.map(orden => (
                <InfoOrden
                  key={orden.id}
                  orden={orden}
                />
              )) :
              ('Cargando')
            }
           </div>

        </div>
    </AdminLayout>
  )
}

export default OrdenesTerminadas