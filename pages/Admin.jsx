import useSWR from 'swr';
import axios from 'axios';
import AdminLayout from "../layout/AdminLayout";
import InfoOrden from '../components/InfoOrden';

const Admin = () => {

  //conexion a la api
  const fetcher = () => axios('/api/ordenes').then(datos => datos.data);

  //ejecutar conexion y pasarlo al useSWR
  const { data, error, isLoading} = useSWR('/api/ordenes', fetcher, {refreshInterval: 1000});
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  return (
    <AdminLayout
        pagina={'Panel de pedidos'}
    >
        <h1>Administración de pedidos</h1>
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

export default Admin

