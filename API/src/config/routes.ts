import { Router } from "express";
import { ComputadorController } from "../controller/ComputadorController";


const router = Router();
const computadorController = new ComputadorController();


//----------------ROTAS---------------

router.post("/computador/cadastrar", computadorController.cadastrar);

router.get("/computador/listar", computadorController.listar);

router.delete("/computador/remover/:id", computadorController.deletar);


export { router };