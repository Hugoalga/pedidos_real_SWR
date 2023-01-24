import {useRouter} from 'next/router'

const pasos = [
    {paso:1, nombre: 'Menú', url:'/'},
    {paso:2, nombre: 'Resumen', url:'/Resumen'},
    {paso:3, nombre: 'Total', url:'/Total'}
];

const Pasos = () => {

    //instancia del router
    const router = useRouter();

    const calcularProgreso = () => {
        let valor;
        if(router.pathname === "/"){
            valor = 5;
        }else if(router.pathname === "/Resumen"){
            valor = 50;
        }else{
            valor = 100
        }

        return valor;
    }


  return (
    <>
        <div className="barra__progreso">
        {pasos.map(paso => (
            <button
                key={paso.paso}
                className="barra__btn"   
                onClick={() => {
                    router.push(paso.url)
                }}      
            >
                {paso.nombre}
            </button>
        ))}
        </div>

        <div className='contenedor__paso__barra'>
            <div className='barra__paso' style={{width: `${calcularProgreso()}%`}}>
            </div>
        </div>
        
    </>
  )
}

export default Pasos