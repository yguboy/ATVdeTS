import { Router } from "express";
import { DespesaController } from "../controllers/despesa.controller";

const router: Router = Router();

router.post("/", new DespesaController().cadastrar);
router.get("/listar", new DespesaController().listar);


export { router };
