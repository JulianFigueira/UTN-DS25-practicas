import {Router} from 'express';
import { createFormularioSchema } from '../validations/libro.validations';
import * as formularioController from '../controllers/formulario.controller';
import {validate} from '../middlewares/validation.middleware';



const router=Router();

router.get('/', formularioController.getAllFormularios);
router.post('/', validate(createFormularioSchema), formularioController.createFormulario);

export const formularioRoutes=router;