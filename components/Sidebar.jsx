import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categorias from "./Categorias";

const Sidebar = () => {

  //xtraer categorias del estado global
  const {categorias} = useQuiosco();

  return (
    <>
        <Image width={150} height={80} src="/assets/img/logo.svg"
            alt="logotipo del negocio" className="sidebar__logo"
        />

        <nav className="sidebar__menu">
          {categorias.map((categoria) => (
           <Categorias
              key={categoria.id}
              categoria={categoria}
           />
          ))}

        </nav>
    </>
  )
}

export default Sidebar