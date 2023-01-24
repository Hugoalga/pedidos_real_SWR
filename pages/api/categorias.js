import {PrismaClient} from '@prisma/client'

export default async function handler(req, res) {
  //instanciar prisma
  const prisma = new PrismaClient;

   //obtener categorias de la db
   const categorias = await prisma.categoria.findMany({
    include: {
      productos: true,
    }
   });

  res.status(200).json(categorias);
}
