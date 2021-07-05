import { Request, response, Response } from "express";
import ComputadorSchema from "../models/ComputadorSchema";



class ComputadorController {

  async cadastrar(request: Request, response: Response) {
    try{
      const novoCadastro = await ComputadorSchema.create(request.body);
      console.log(novoCadastro);
      response.status(201).json({objeto: novoCadastro,
         msg:"Ciclo cadastrado com sucesso",
         erro: false
    });
  } catch (error){
    response.status(400).json({
	objeto: error,
	msg: "Falha na validação",
	error: true
    });
   }
  }
   
    async  listar(request: Request, response: Response) {
        response.status(200).json(await ComputadorSchema.find({}));
    }

    
    async deletar(request: Request, response: Response) {
        try {
            const { id } = request.params;
            const classe =  await ComputadorSchema.deleteOne({_id: id});

            response.status(201).json({
                objeto: classe,
                msg: "deletado com sucesso!",
                erro: false,
            });
        } catch (error) {
            response.status(400).json({
                onjeto: error,
                msg: "falha ao deletar ",
                erro: true,
            });
        }
    }
}
export { ComputadorController };