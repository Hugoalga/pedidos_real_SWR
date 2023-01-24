import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from 'react-modal';
import {ToastContainer} from 'react-toastify'
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";
import Pasos from "../components/Pasos";

import 'react-toastify/dist/ReactToastify.css'


//estilos generales del modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  //donde se mostrar el modal
  Modal.setAppElement('#__next');

const Layout = ({children, pagina}) => {
    //extraer el estado de modal del estado global
    const {modal} = useQuiosco();


  return (
   <>
        <Head>
            <title>Cafe - {pagina}</title>
            <meta name="description" content="Quisco cafeteria" />
        </Head>

        <div className="layout__grid">
            {/*  - - - - - - barra lateral  - - - - - - */}
            <aside className="layout__barra">
                <Sidebar/>
            </aside>

            {/*  - - - - - - contenido principal - - - - - -  */}
            <main className="layout__contenido">
                <Pasos/>
                {children}
            </main>
        </div>

        {modal && (
            <Modal isOpen={modal} style={customStyles}>
                <ModalProducto/>
            </Modal>
        )}

        <ToastContainer/>
   </>
  )
}

export default Layout