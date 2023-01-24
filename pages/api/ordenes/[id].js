import {PrismaClient} from '@prisma/client';

export default async function handler(req,res){

    //instanciamos prisma
    const prisma = new PrismaClient();
    //revisamos el metodo de la peticion
    if(req.method === 'POST'){
        //extraemos el id del cuerpo de la peticion
        const {id} = req.query

        const ordenActualizada = await prisma.orden.update({
            where:{
                id: parseInt(id)
            },
            data:{
                estado: true
            }
        })

        res.status(200).json(ordenActualizada)
    }

}