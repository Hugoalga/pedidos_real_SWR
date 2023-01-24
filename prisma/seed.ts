import {categorias} from './data/categorias'
import {productos} from './data/productos'

import {PrismaClient} from '@prisma/client'

//instancia de prisma
const prisma = new PrismaClient();

//funcion para añadir datos a la db
const main = async () =>{
    try {

        //agregamos categorias
        await prisma.categoria.createMany({
            data:categorias
        })

        //agregamos productos
        await prisma.producto.createMany({
            data:productos
        })
        
    } catch (error) {
        console.log(error)
    }
}

//ejecutamos la funcion 
main();
