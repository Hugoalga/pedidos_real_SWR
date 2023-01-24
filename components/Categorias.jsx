import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

const Categorias = ({categoria}) => {

    const {handleCategoria,categoriaActual} = useQuiosco();
    const {nombre, icono, id} = categoria;

  return (
    <div className={`${categoriaActual?.id === id ? 'categoria__seleccionada' : ''} sidebar__categoria`}>
        <Image
            width={50}
            height={50}
            src={`/assets/img/icono_${icono}.svg`}
            alt="icono categoria"

        />
        <button className="sidebar__btn"
          onClick={(e) => handleCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categorias

