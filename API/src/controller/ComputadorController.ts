import { Request, response, Response } from "express";
import ComputadorSchema from "../models/ComputadorSchema";



class ComputadorController {

  async cadastrar(request: Request, response: Response) {
    try{
        const {dono} = request.body;
        const pc = await ComputadorSchema.find({dono});
        if (pc.length == 0){
            const novoCadastro = await ComputadorSchema.create(request.body);
    
            console.log(novoCadastro);
            response.status(201).json({objeto: novoCadastro,
                msg:"Cadastrado com sucesso",
                erro: false
            });
        } else {
            response.status(400).json({
                msg: "Existe um computador para este dono",
                error: true
                }); 
        }
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
            const computador =  await ComputadorSchema.deleteOne({_id: id});

            response.status(201).json({
                objeto: computador,
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