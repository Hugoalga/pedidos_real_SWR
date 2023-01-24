import {useState,useEffect,createContext} from 'react'
import axios from 'axios';
import {toast} from 'react-toastify'
import {useRouter} from 'next/router'


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const router = useRouter();

    //estado para almacenar las categorias de la api
    const [categorias,setCategorias] = useState([]);

    //estado para la categoria seleccionada
    const [categoriaActual,setCategoriaActual] = useState({})

    //prducto seleciconado
    const [productoSeleccionado,setProductoSeleccionado] = useState({});

    //estado para mostrar un modal
    const [modal,setModal] = useState(false);

    //estado para el pedido
    const [pedido,setPedido] = useState([]);

    //estado para lamacenar el nombre
    const [nombre,setNombre] = useState('');

    //estad paa cuenta total a pagar
    const [total,setTotal] = useState(0);
   

    //conexion a la API
    const obtenerCategorias = async() => {
        const {data} = await axios('/api/categorias');
        setCategorias(data);
    }

    //ejecutar la funcion 1 vez para obtener las categorias
    useEffect(() => {
        obtenerCategorias()
    },[]);

    //funcion para cargar una categoria por default
    useEffect(() => {
        setCategoriaActual(categorias[0]);
    },[categorias])

    //funcion para realizar calculo cada que cambia pedido
    useEffect(() => {
        const nuevoTotal = pedido.reduce((total,producto) => (producto.precio * producto.cantidad) + total, 0);
        setTotal(nuevoTotal);

    },[pedido])

    //funcion para modificar el estado de categoria seleccionada
    const handleCategoria = (id) => {
        const categoriaElementos = categorias.filter(cat => cat.id === id)
        setCategoriaActual(categoriaElementos[0]);
        router.push('/');
    }

    //funcion para obetner producto seleccionado
    const handleProductoSeleccionado = (producto) => {
        setProductoSeleccionado(producto);
    }

    //funcion para mostrar el modal
    const handleModal = () => {
        setModal(!modal)
    }


    //funcion para agregar al pedido
    const handlePedido = ({categoriaId,... producto}) => {
        if(pedido.some(listaProductos => listaProductos.id === producto.id )){
           
            //actualizar pedido
            const pedidoActualizado = pedido.map((productoState) => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            toast.success('Editado correctamente',{
                autoClose: 2000,
            });

        }else{
            setPedido([...pedido,producto]);
            toast.success('Agregado al pedido',{
                autoClose: 2000,
            });
        }
        
    }

    //funcion para modificar cantidades desde resumen
    const handleChangeCantidades = (id) => {
        //filtrar elementos
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProductoSeleccionado(productoActualizar[0]);

        //mostrar modal
        setModal(!modal)
    }


    //funcion para eliminar produto del pedido
    const handleEliminarProducto = (id) => {
        //seleccionar todos los prodcutos con id diferente al que pasamos
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        //seteamos el pedido con los productos actualizados
        setPedido(pedidoActualizado);
    }

     //funcion que se ejecuta cuando se envia el formulario
    const EnviarOrden =  async (e) => {
        e.preventDefault();

        try {
            //enviar data a la api
            const {data} = await axios.post('/api/ordenes',{pedido,nombre,total,fecha: Date.now().toString()});
            console.log(data);

            //resetear app
            setPedido([]);
            setNombre('');
            setTotal(0);

            //mostrar notificacion
            toast.success('Pedido Realizado con exito');

            //mandar a pagina principal
            setTimeout(() => {
                router.push('/');
            }, 3000)
            
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleCategoria,
                handleProductoSeleccionado,
                handleModal,
                modal,
                productoSeleccionado,
                handlePedido,
                pedido,
                handleChangeCantidades,
                handleEliminarProducto,
                setNombre,
                nombre,
                EnviarOrden,
                total
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}

export default QuioscoContext
