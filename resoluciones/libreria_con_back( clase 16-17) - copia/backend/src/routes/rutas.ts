import {Router} from 'express';
import * as bookController from '../controllers/controller';
import { createFormularioSchema } from '../validations/libro.validations';
import {validate} from '../middlewares/validation.middleware';


const router=Router();

router.get('/', bookController.getAllBooks);
router.post('/', validate(createFormularioSchema), bookController.createBook);

export const bookRoutes=router;